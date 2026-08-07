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
  orientation?: "vertical" | "horizontal";
}

const BAR_THICKNESS = 2;
const BAR_GAP = 3;
const STEP = BAR_THICKNESS + BAR_GAP;
const MAX_LEN = 28;
const MIN_LEN = 10;
const FALLOFF = 5.5;
const DRAG_THRESHOLD = 4;
const WINDOW_SIZE = 280;

function barLength(distance: number) {
  const t = Math.min(Math.abs(distance) / FALLOFF, 1);
  const ease = (1 - t) ** 2.2;
  return MIN_LEN + (MAX_LEN - MIN_LEN) * ease;
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
  orientation = "vertical",
}: ScrollIndicatorProps) {
  const horizontal = orientation === "horizontal";
  const dragRef = useRef<{
    pointerId: number;
    startPos: number;
    startProgress: number;
    moved: boolean;
    lastIndex: number;
  } | null>(null);
  const [dragProgress, setDragProgress] = useState<number | null>(null);

  const clamped = clamp(dragProgress ?? progress, 0, count - 1);
  const activeIndex = Math.round(clamped);
  const label = labels?.[activeIndex];
  const bars = useMemo(() => Array.from({ length: count }, (_, i) => i), [count]);
  const trackOffset = WINDOW_SIZE / 2 - (clamped * STEP + BAR_THICKNESS / 2);
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
    clientPos: number
  ) => {
    if (!dragRef.current || dragRef.current.pointerId !== pointerId) return;

    const { moved, lastIndex, startProgress } = dragRef.current;
    dragRef.current = null;
    setDragProgress(null);

    if (moved) {
      onNavigate?.(lastIndex);
    } else {
      const rect = target.getBoundingClientRect();
      const center = horizontal
        ? rect.left + rect.width / 2
        : rect.top + rect.height / 2;
      const offsetFromCenter = clientPos - center;
      const index = Math.round(startProgress + offsetFromCenter / STEP);
      onNavigate?.(clamp(index, 0, count - 1));
    }

    if (target.hasPointerCapture(pointerId)) {
      target.releasePointerCapture(pointerId);
    }
  };

  return (
    <div
      className={cn(
        "pointer-events-none",
        horizontal ? "h-[28px] w-full" : "w-[28px]",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-auto relative touch-none overflow-hidden",
          horizontal ? "h-full w-full" : "w-full",
          dragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={horizontal ? { width: WINDOW_SIZE, marginInline: "auto" } : { height: WINDOW_SIZE }}
        role="slider"
        aria-orientation={orientation}
        aria-label="Deck progress"
        aria-valuemin={1}
        aria-valuemax={count}
        aria-valuenow={activeIndex + 1}
        aria-valuetext={label ?? `Slide ${activeIndex + 1}`}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          const startPos = horizontal ? event.clientX : event.clientY;
          dragRef.current = {
            pointerId: event.pointerId,
            startPos,
            startProgress: clamp(progress, 0, count - 1),
            moved: false,
            lastIndex: Math.round(clamp(progress, 0, count - 1)),
          };
          setDragProgress(clamp(progress, 0, count - 1));
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current;
          if (!drag || drag.pointerId !== event.pointerId) return;

          const pos = horizontal ? event.clientX : event.clientY;
          const delta = pos - drag.startPos;
          if (Math.abs(delta) < DRAG_THRESHOLD && !drag.moved) return;

          drag.moved = true;
          if (horizontal) {
            // Drag right → next; drag left → previous.
            seekTo(drag.startProgress + delta / STEP);
          } else {
            // Drag down → previous; drag up → next (content moves with the finger).
            seekTo(drag.startProgress - delta / STEP);
          }
        }}
        onPointerUp={(event) =>
          endDrag(
            event.currentTarget,
            event.pointerId,
            horizontal ? event.clientX : event.clientY
          )
        }
        onPointerCancel={(event) =>
          endDrag(
            event.currentTarget,
            event.pointerId,
            horizontal ? event.clientX : event.clientY
          )
        }
      >
        <div
          className={cn(
            "pointer-events-none absolute z-30 rounded-full bg-foreground",
            horizontal
              ? "left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2"
              : "left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2"
          )}
          aria-hidden
        />

        <div
          className={cn(
            "pointer-events-none absolute flex",
            horizontal
              ? "inset-y-0 left-0 flex-row items-center"
              : "inset-x-0 top-0 flex-col items-center"
          )}
          style={horizontal ? { left: trackOffset } : { top: trackOffset }}
        >
          {bars.map((index) => {
            const distance = index - clamped;
            const length = barLength(distance);
            const isPast = index <= clamped;
            const isNear = Math.abs(distance) < 0.55;

            return (
              <span
                key={index}
                className={cn(
                  "flex shrink-0 items-center justify-center",
                  horizontal ? "h-full" : "w-full"
                )}
                style={horizontal ? { width: STEP } : { height: STEP }}
                aria-hidden
              >
                <span
                  className={cn(
                    "block rounded-full",
                    horizontal ? "w-[2px]" : "h-[2px]",
                    isNear
                      ? "bg-foreground"
                      : isPast
                        ? "bg-foreground/75"
                        : "bg-foreground/16"
                  )}
                  style={horizontal ? { height: length } : { width: length }}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
