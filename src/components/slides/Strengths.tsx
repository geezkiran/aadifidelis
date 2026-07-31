import { Eyebrow, HeadingBlock, Slide, SlideLead } from "@/components/shared";

const STRENGTHS = [
  "200+ centres across India",
  "Presence across 12 states",
  "Home sample collection",
  "Pathology and radiology capabilities",
  "A strong affordability proposition",
  "Jana Seva preventive-health packages",
  "Iswaryam home-friendly preventive packages",
  "Smart Reports with health scores, explanations, trends and next steps",
];

export function StrengthsSlide() {
  return (
    <Slide id="strengths" variant="muted" contentClassName="justify-center">
      <div className="flex flex-col gap-3 md:gap-10">
        <SlideLead className="max-w-5xl">

          <HeadingBlock size="lg" className="text-foreground text-3xl">
            Where Aarthi Labs Stand Today
          </HeadingBlock>
        </SlideLead>

        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-4">
          {STRENGTHS.map((item) => (
            <div
              key={item}
              className="flex min-h-0 min-w-0 items-center gap-2 rounded-[12px] border border-surface-border bg-surface-elevated p-2.5 shadow-[var(--shadow-soft)] sm:gap-3 sm:rounded-[16px] sm:p-6"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent sm:h-2 sm:w-2" />
              <p className="text-xs font-medium leading-snug text-foreground sm:text-lg">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
