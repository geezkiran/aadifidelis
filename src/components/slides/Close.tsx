import {
  Body,
  Slide,
  SlideTitle,
} from "@/components/shared";

export function InvestmentSlide() {
  const phases = [
    {
      title: "Phase I — Visibility",
      body: "Deploy & enable Control Tower + Agent App, data migration, team enablement.",
      timeline: "Timeline · ~6 weeks to rollout (built)",
    },
    {
      title: "Phase II — Value capture",
      body: "Modules sequenced: Document AI · Lender routing · Reconciliation · Partner analytics · Decision support · Credit Graph · CRM · WhatsApp · Agentic workflows · Revamp website & Pixel · Customer-facing loan app · Growth outreach. Model matures with ~9 months of live cases.",
      timeline: "Timeline · 3–5 weeks per module; Credit Graph ongoing",
    },
  ];

  return (
    <Slide id="investment">
      <div className="flex flex-col gap-[28px] md:gap-[32px]">
        <SlideTitle>Scope & timeline</SlideTitle>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[24px]">
          {phases.map((phase) => (
            <div key={phase.title} className="border-t border-border pt-[16px]">
              <h3 className="text-[15px] font-medium tracking-[-0.01em] md:text-[16px]">
                {phase.title}
              </h3>
              <Body className="mt-[10px] text-[13px] md:text-[13px]">{phase.body}</Body>
              <p className="mt-[14px] text-[12px] text-accent">{phase.timeline}</p>
            </div>
          ))}
        </div>
        
      </div>
    </Slide>
  );
}

export function ConsiderationsSlide() {
  const items = [
    {
      title: "Scale & data security",
      body: "Role-based access, field-level permissions, full audit and maker-checker are foundational — to the standard your parent group requires — and the architecture scales from current volume upward.",
    },
    {
      title: "Partner adoption",
      body: "The field app earns adoption by making the partner's own work faster and their earnings clearer.",
    },
    {
      title: "Fit with BLS IT",
      body: "Designed as the operations-and-money layer that integrates with existing systems: it draws lender MIS, feeds finance, and complements the banking-correspondent infrastructure rather than competing with it.",
    },
    {
      title: "Data ownership & continuity",
      body: "The data is yours, fully exportable at any time; the engagement is structured so you're never dependent on us to retain it.",
    },
  ];

  return (
    <Slide id="considerations">
      <div className="flex flex-col gap-[28px] md:gap-[32px]">
        <SlideTitle>Considerations we&apos;ve anticipated</SlideTitle>
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-x-[40px] md:gap-y-[28px]">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="text-[16px] font-medium tracking-[-0.02em] md:text-[18px]">
                {item.title}
              </h3>
              <Body className="mt-[10px]">{item.body}</Body>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

export function ClosingSlide() {
  return (
    <Slide id="closing" footer={<p className="text-[11px] text-muted-soft md:text-[12px]">TwoSpoon · santosh@twospoon.ai</p>}>
      <div className="flex max-w-[640px] flex-col gap-[28px] md:gap-[36px]">
        <h2 className="text-[32px] font-medium leading-[1.2] tracking-[-0.03em] md:text-[48px]">
          You&apos;ve built the scale.
          <br />
          The opportunity now is the margin scale creates.
        </h2>
       
      </div>
    </Slide>
  );
}
