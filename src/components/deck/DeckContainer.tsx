"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

interface DeckContainerProps {
  children: React.ReactNode;
  slideCount: number;
  slideLabels?: string[];
}

export function DeckContainer({ children, slideCount }: DeckContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const scrollEndTimerRef = useRef<number | null>(null);
  const [, setActiveIndex] = useState(0);

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

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetTop + slide.offsetHeight / 2;
      const distance = Math.abs(slideCenter - viewportCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

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
      setSlideActiveStates(index);
      slide.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [getSlides, setSlideActiveStates]
  );

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
    <div className="relative h-dvh">
      <div
        ref={containerRef}
        className={cn(
          "deck-scroll flex h-dvh snap-y snap-mandatory flex-col items-center overflow-y-auto overflow-x-hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
}
