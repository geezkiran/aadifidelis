"use client";

import { cn } from "@/lib/utils";
import { useMemo, useRef, useState } from "react";

interface ScrollIndicatorProps {
  count: number;
  /** Continuous position from 0 … count-1 (fractional while scrolling). */
  progress: number;
  labels?: string[];
  onNavigate?: (index: number) => void;
  className?: string;
}

const BAR_H = 2;
const BAR_GAP = 3;
const STEP = BAR_H + BAR_GAP;
const MAX_W = 28;
const MIN_W = 10;
const FALLOFF = 5.5;
const DRAG_THRESHOLD = 4;
const WINDOW_H = 280;

function barWidth(distance: number) {
  const t = Math.min(Math.abs(distance) / FALLOFF, 1);
  const ease = (1 - t) ** 2.2;
  return MIN_W + (MAX_W - MIN_W) * ease;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function ScrollIndicator({
  count,
  progress,
  labels,
  onNavigate,
  className,
}: ScrollIndicatorProps) {
  const dragRef = useRef<{
    pointerId: number;
    startY: number;
    startProgress: number;
    moved: boolean;
    lastIndex: number;
  } | null>(null);
  const [dragProgress, setDragProgress] = useState<number | null>(null);

  const clamped = clamp(dragProgress ?? progress, 0, count - 1);
  const activeIndex = Math.round(clamped);
  const label = labels?.[activeIndex];
  const bars = useMemo(() => Array.from({ length: count }, (_, i) => i), [count]);
  const trackTop = WINDOW_H / 2 - (clamped * STEP + BAR_H / 2);
  const dragging = dragProgress != null;

  const seekTo = (next: number) => {
    const value = clamp(next, 0, count - 1);
    setDragProgress(value);

    const index = Math.round(value);
    if (dragRef.current && index !== dragRef.current.lastIndex) {
      dragRef.current.lastIndex = index;
      onNavigate?.(index);
    }
  };

  const endDrag = (
    target: HTMLElement,
    pointerId: number,
    clientY: number
  ) => {
    if (!dragRef.current || dragRef.current.pointerId !== pointerId) return;

    const { moved, lastIndex, startProgress } = dragRef.current;
    dragRef.current = null;
    setDragProgress(null);

    if (moved) {
      onNavigate?.(lastIndex);
    } else {
      const rect = target.getBoundingClientRect();
      const offsetFromCenter = clientY - (rect.top + rect.height / 2);
      const index = Math.round(startProgress + offsetFromCenter / STEP);
      onNavigate?.(clamp(index, 0, count - 1));
    }

    if (target.hasPointerCapture(pointerId)) {
      target.releasePointerCapture(pointerId);
    }
  };

  return (
    <div
      className={cn("pointer-events-none w-[28px]", className)}
    >
      <div
        className={cn(
          "pointer-events-auto relative w-full touch-none overflow-hidden",
          dragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{ height: WINDOW_H }}
        role="slider"
        aria-orientation="vertical"
        aria-label="Deck progress"
        aria-valuemin={1}
        aria-valuemax={count}
        aria-valuenow={activeIndex + 1}
        aria-valuetext={label ?? `Slide ${activeIndex + 1}`}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          dragRef.current = {
            pointerId: event.pointerId,
            startY: event.clientY,
            startProgress: clamp(progress, 0, count - 1),
            moved: false,
            lastIndex: Math.round(clamp(progress, 0, count - 1)),
          };
          setDragProgress(clamp(progress, 0, count - 1));
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current;
          if (!drag || drag.pointerId !== event.pointerId) return;

          const dy = event.clientY - drag.startY;
          if (Math.abs(dy) < DRAG_THRESHOLD && !drag.moved) return;

          drag.moved = true;
          // Drag down → previous; drag up → next (content moves with the finger).
          seekTo(drag.startProgress - dy / STEP);
        }}
        onPointerUp={(event) =>
          endDrag(event.currentTarget, event.pointerId, event.clientY)
        }
        onPointerCancel={(event) =>
          endDrag(event.currentTarget, event.pointerId, event.clientY)
        }
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-x-0 flex flex-col items-center"
          style={{ top: trackTop }}
        >
          {bars.map((index) => {
            const distance = index - clamped;
            const width = barWidth(distance);
            const isPast = index <= clamped;
            const isNear = Math.abs(distance) < 0.55;

            return (
              <span
                key={index}
                className="flex w-full shrink-0 items-center justify-center"
                style={{ height: STEP }}
                aria-hidden
              >
                <span
                  className={cn(
                    "block h-[2px] rounded-full",
                    isNear
                      ? "bg-foreground"
                      : isPast
                        ? "bg-foreground/75"
                        : "bg-foreground/16"
                  )}
                  style={{ width }}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
