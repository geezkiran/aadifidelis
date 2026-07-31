import { HeadingBlock, Slide, SlideLead } from "@/components/shared";

const ARTEFACTS = [
  "Package catalogues",
  "Price lists",
  "Booking flows",
  "Report downloads",
];

export function ProblemSlide() {
  return (
    <Slide id="problem" variant="muted" contentClassName="justify-center">
      <div className="flex flex-col gap-10">
        <SlideLead className="max-w-5xl">
          <HeadingBlock size="xl" className="text-foreground text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Patients don&apos;t think in test names. They think in{" "}
            <span className="text-accent">health questions.</span>
          </HeadingBlock>
        </SlideLead>

        <div>
          <p className="text-sm font-medium  text-muted">
            Aarthi&apos;s present experience is built around
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {ARTEFACTS.map((item) => (
              <div
                key={item}
                className="flex min-h-0 min-w-0 items-center rounded-[16px] bg-black/[0.05] p-4 sm:p-5"
              >
                <p className="text-sm font-medium leading-snug text-muted sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
          It&apos;s a transaction.{" "}
          <span className="text-muted">Not a relationship.</span>
        </p>
      </div>
    </Slide>
  );
}
