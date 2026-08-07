/** Design canvas the deck slides are authored against (laptop @ 100% zoom). */
export const SLIDE_DESIGN_WIDTH = 1380;
export const SLIDE_DESIGN_HEIGHT = 900;

/** Keep scale numerically stable for crisp text. */
export function computeSlideScale(
  availableWidth: number,
  availableHeight: number,
  designWidth = SLIDE_DESIGN_WIDTH,
  designHeight = SLIDE_DESIGN_HEIGHT
) {
  if (availableWidth <= 0 || availableHeight <= 0) return 1;
  const raw = Math.min(
    availableWidth / designWidth,
    availableHeight / designHeight
  );
  return Math.round(raw * 10000) / 10000;
}
