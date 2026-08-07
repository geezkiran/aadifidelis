const STATS = [
  {
    value: "100%",
    label: "Strategies for Business Growth and Market Expansion",
  },
  {
    value: "90%",
    label: "Global Corporations and Multinational Enterprises",
  },
  {
    value: "10k",
    label: "Companies collaborate to achieve goals and innovate",
  },
];

export function HelpSection() {
  return (
    <section
      id="about"
      data-slide
      className="flex h-dvh w-full shrink-0 snap-start snap-always flex-col justify-center overflow-hidden bg-white"
    >
      <div className="slide-content site-container">
        <div className="grid grid-cols-1 gap-[24px] border-b border-[rgba(0,0,0,0.08)] pb-[32px] md:grid-cols-2 md:gap-[64px] md:pb-[48px]">
          <h2 className="max-w-[420px] text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-[#0b0b0b] md:text-[44px]">
            How can we help your business
          </h2>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[15px] font-medium leading-[1.55] text-[#6b6b6b] md:text-[16px]">
              We partner with growing companies to design AI-powered workflows that remove
              busywork, improve decision speed, and create clearer ownership across teams.
            </p>
            <p className="hidden text-[15px] font-medium leading-[1.55] text-[#6b6b6b] md:block md:text-[16px]">
              From first automation to full operating systems, AutoBiz helps you ship
              reliable systems that scale with your ambition.
            </p>
            <a
              href="#services"
              className="mt-[4px] inline-flex items-center gap-[6px] text-[15px] font-medium text-[#0b0b0b] transition-opacity hover:opacity-70"
            >
              Learn More
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="mt-[32px] grid grid-cols-1 gap-[24px] md:mt-[48px] md:grid-cols-3 md:gap-[0px]">
          {STATS.map((stat, index) => (
            <div
              key={stat.value}
              className={`md:px-[32px] ${
                index > 0
                  ? "border-t border-[rgba(0,0,0,0.08)] pt-[24px] md:border-t-0 md:border-l md:pt-[0px]"
                  : "md:pl-[0px]"
              } ${index === 2 ? "md:pr-[0px]" : ""}`}
            >
              <p className="text-[40px] font-medium tracking-[-0.03em] text-[#0b0b0b] md:text-[56px]">
                {stat.value}
              </p>
              <p className="mt-[12px] max-w-[260px] text-[14px] font-medium leading-[1.45] text-[#6b6b6b] md:text-[15px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
