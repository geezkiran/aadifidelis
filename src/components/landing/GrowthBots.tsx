const CARDS = [
  {
    title: "Data Analytics Deep Insights",
    description:
      "Turn operational data into clear recommendations your team can act on every week.",
    color: "#ff6b6b",
  },
  {
    title: "Personalized Content Creation",
    description:
      "Generate tailored messaging and campaigns that stay on-brand across every channel.",
    color: "#2dd4bf",
  },
  {
    title: "SEO Optimization & Strategy",
    description:
      "Discover high-intent opportunities and ship content systems that compound traffic.",
    color: "#60a5fa",
  },
  {
    title: "Email Marketing Automation",
    description:
      "Build lifecycle journeys that nurture leads and convert without manual busywork.",
    color: "#a78bfa",
  },
];

export function GrowthBots() {
  return (
    <section
      id="services"
      data-slide
      className="flex h-dvh w-full shrink-0 snap-start snap-always flex-col justify-center overflow-hidden bg-white"
    >
      <div className="slide-content site-container">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-[#0b0b0b] md:text-[44px]">
            AI-Powered Growth Bots
          </h2>
          <p className="mt-[12px] text-[15px] font-medium leading-[1.55] text-[#6b6b6b] md:mt-[16px] md:text-[16px]">
            Modular agents that plug into your stack — analytics, content, SEO, and lifecycle
            automation working together as one growth system.
          </p>
        </div>

        <div className="mt-[28px] grid grid-cols-2 gap-[12px] md:mt-[48px] md:grid-cols-4 md:gap-[20px]">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-[16px] bg-[#f3f3f3] p-[16px] md:min-h-[260px] md:p-[28px]"
            >
              <span
                className="mb-[16px] inline-flex h-[32px] w-[32px] items-center justify-center rounded-[10px] md:mb-[28px] md:h-[40px] md:w-[40px]"
                style={{ backgroundColor: card.color }}
                aria-hidden
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-[16px] w-[16px] text-white md:h-[18px] md:w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 14V6h3v8H4zm4.5 0V9h3v5h-3zM13 14V4h3v10h-3z" />
                </svg>
              </span>
              <h3 className="text-[14px] font-medium leading-[1.25] tracking-[-0.02em] text-[#0b0b0b] md:text-[20px]">
                {card.title}
              </h3>
              <p className="mt-[8px] hidden text-[14px] font-medium leading-[1.5] text-[#6b6b6b] md:mt-[12px] md:block">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
