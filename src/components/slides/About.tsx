import { CircularStepFlow, Slide, StepFlow } from "@/components/shared";

export function AboutSlide() {
  return (
    <Slide id="about" contentClassName="justify-center">
      <div className="grid h-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 md:divide-x md:divide-surface-border">
        <div className="relative flex w-full flex-col items-center justify-center pt-14 sm:pt-16 md:h-full md:pt-24">
          <h3 className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl md:text-6xl">
            Traditional
          </h3>
          <StepFlow
            direction="vertical"
            autoPlay
            loop={false}
            className="w-full max-w-xs"
            steps={["Doctor prescription", "Test", "PDF report", "Relationship ends"]}
          />
        </div>

        <div className="relative flex w-full flex-col items-center justify-center pt-14 sm:pt-16 md:h-full md:pl-6 md:pt-24">
          <h3 className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl md:text-6xl">
            Emerging
          </h3>
          <div
            className="w-full max-w-xs md:hidden"
            style={{ "--color-accent": "#10b981" } as React.CSSProperties}
          >
            <StepFlow
              direction="vertical"
              autoPlay
              loop={false}
              steps={[
                "Establish a baseline",
                "Understand results",
                "Monitor progress",
                "Retest",
                "Move to next package",
              ]}
            />
          </div>
          <CircularStepFlow
            accent
            autoPlay
            className="hidden md:block md:w-[26rem]"
            steps={[
              "Establish a baseline",
              "Understand results",
              "Monitor progress",
              "Retest",
              "Move to next package",
            ]}
          />
        </div>
      </div>
    </Slide>
  );
}
