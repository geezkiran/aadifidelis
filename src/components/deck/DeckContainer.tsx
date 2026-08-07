"use client";

import { cn } from "@/lib/utils";
import {
  SLIDE_DESIGN_HEIGHT,
  SLIDE_DESIGN_WIDTH,
  computeSlideScale,
} from "@/lib/slide-scale";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { ScrollIndicator } from "./ScrollIndicator";

interface DeckContainerProps {
  children: React.ReactNode;
  slideCount: number;
  slideLabels?: string[];
}

export function DeckContainer({
  children,
  slideCount,
  slideLabels,
}: DeckContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const scrollEndTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [slideScale, setSlideScale] = useState(1);
  const [isMobileChrome, setIsMobileChrome] = useState(true);

  const getSlides = useCallback(() => {
    const container = containerRef.current;
    if (!container) return [];
    return Array.from(container.querySelectorAll<HTMLElement>("[data-slide]"));
  }, []);

  const setSlideActiveStates = useCallback(
    (index: number) => {
      getSlides().forEach((slide, i) => {
        slide.classList.toggle("is-active", i === index);
      });
    },
    [getSlides]
  );

  const updateActiveSlide = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const slides = getSlides();
    if (!slides.length) return;

    const viewportCenter = container.scrollTop + container.clientHeight / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;
    let continuous = 0;

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      const slideCenter = slide.offsetTop + slide.offsetHeight / 2;
      const distance = Math.abs(slideCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }

      if (viewportCenter <= slideCenter) {
        if (i === 0) {
          continuous = 0;
        } else {
          const prev = slides[i - 1];
          const prevCenter = prev.offsetTop + prev.offsetHeight / 2;
          const span = slideCenter - prevCenter || 1;
          const t = (viewportCenter - prevCenter) / span;
          continuous = i - 1 + Math.max(0, Math.min(1, t));
        }
        break;
      }

      continuous = i;
    }

    setProgress(continuous);

    if (closestIndex !== activeIndexRef.current) {
      activeIndexRef.current = closestIndex;
      setActiveIndex(closestIndex);
      setSlideActiveStates(closestIndex);
    }
  }, [getSlides, setSlideActiveStates]);

  const scrollToSlide = useCallback(
    (index: number) => {
      const slides = getSlides();
      const slide = slides[index];
      if (!slide) return;

      activeIndexRef.current = index;
      setActiveIndex(index);
      setProgress(index);
      setSlideActiveStates(index);
      slide.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [getSlides, setSlideActiveStates]
  );

  useLayoutEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const syncChrome = () => setIsMobileChrome(media.matches);
    syncChrome();
    media.addEventListener("change", syncChrome);
    return () => media.removeEventListener("change", syncChrome);
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setSlideScale(1);
        return;
      }
      setSlideScale(
        computeSlideScale(container.clientWidth, container.clientHeight)
      );
    };

    updateScale();

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
      updateActiveSlide();
    });
    resizeObserver.observe(container);
    window.addEventListener("resize", updateScale);
    window.visualViewport?.addEventListener("resize", updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
      window.visualViewport?.removeEventListener("resize", updateScale);
    };
  }, [updateActiveSlide, isMobileChrome]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setSlideActiveStates(0);

    const onScroll = () => {
      updateActiveSlide();
      if (scrollEndTimerRef.current !== null) {
        window.clearTimeout(scrollEndTimerRef.current);
      }
      scrollEndTimerRef.current = window.setTimeout(updateActiveSlide, 80);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSlide);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSlide);
      if (scrollEndTimerRef.current !== null) {
        window.clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, [updateActiveSlide, setSlideActiveStates]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const nextKeys = ["ArrowDown", "ArrowRight", "PageDown", " "];
      const prevKeys = ["ArrowUp", "ArrowLeft", "PageUp"];

      if (nextKeys.includes(event.key)) {
        event.preventDefault();
        scrollToSlide(Math.min(activeIndexRef.current + 1, slideCount - 1));
      }
      if (prevKeys.includes(event.key)) {
        event.preventDefault();
        scrollToSlide(Math.max(activeIndexRef.current - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollToSlide, slideCount]);

  useEffect(() => {
    const onHashClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;

      const slides = getSlides();
      const index = slides.findIndex((slide) => slide.id === id);
      if (index < 0) return;

      event.preventDefault();
      scrollToSlide(index);
    };

    document.addEventListener("click", onHashClick);
    return () => document.removeEventListener("click", onHashClick);
  }, [getSlides, scrollToSlide]);

  return (
    <div
      className={cn(
        "relative flex h-dvh flex-col viewport-md:flex-row",
        !isMobileChrome && "deck-force-desktop"
      )}
    >
      <div
        ref={containerRef}
        className={cn(
          "deck-scroll flex min-h-0 min-w-0 flex-1 flex-col items-center overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
        )}
        style={
          {
            "--slide-design-w": `${SLIDE_DESIGN_WIDTH}px`,
            "--slide-design-h": `${SLIDE_DESIGN_HEIGHT}px`,
            "--slide-scale": String(slideScale),
          } as CSSProperties
        }
      >
        {children}
      </div>

      <aside
        className={cn(
          "relative z-40 flex shrink-0 items-center justify-center bg-background",
          "h-[48px] w-full border-t border-border",
          "viewport-md:h-dvh viewport-md:w-[64px] viewport-md:border-t-0 viewport-md:border-l"
        )}
      >
        <ScrollIndicator
          count={slideCount}
          progress={progress}
          labels={slideLabels}
          onNavigate={scrollToSlide}
          orientation={isMobileChrome ? "horizontal" : "vertical"}
        />
      </aside>

      <span className="sr-only" aria-live="polite">
        Slide {activeIndex + 1} of {slideCount}
        {slideLabels?.[activeIndex] ? `: ${slideLabels[activeIndex]}` : ""}
      </span>
    </div>
  );
}
