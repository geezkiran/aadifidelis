import {
  Body,
  FlowArrow,
  FlowNode,
  Slide,
  SlideFooter,
  SlideTitle,
} from "@/components/shared";

export function DataAssetSlide() {
  return (
    <Slide id="data-asset" footer={<SlideFooter n={21} />}>
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>
          Operating the platform generates a proprietary data asset few others could
          assemble
        </SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              What accrues
            </h3>
            <Body className="mt-[12px]">
              Phases 1–2 capture lender-outcome data across 100+ lenders and millions of
              profiles — who approved, how quickly, at what price, and why cases were
              declined.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              Why it&apos;s rare
            </h3>
            <Body className="mt-[12px]">
              Individual lenders see only their own book; bureaus see booked loans, not the
              full decision graph. Over time, Aadifidelis would hold one of the richest maps
              of mid-market lender behaviour in the country — seeing both.
            </Body>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function CreditGraphSlide() {
  return (
    <Slide id="credit-graph" footer={<SlideFooter n={22} />}>
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <SlideTitle>
          That data compounds into predictive decisioning — the Credit Graph
        </SlideTitle>
        <div className="flex items-stretch overflow-x-auto pb-[4px]">
          <FlowNode label="Every case" />
          <FlowArrow accent />
          <FlowNode label="Credit Graph" sub="learns lender behaviour" accent />
          <FlowArrow accent />
          <FlowNode label="Before submission" sub="likely lender · speed · pricing" accent />
        </div>
        <Body className="max-w-[760px]">
          Phase 2 uses a rules-based version of this. Phase 3 lets it learn from every case,
          improving continuously — a compounding advantage that grows the more of your
          normal business you run. More volume → sharper model → better outcomes.
        </Body>
      </div>
    </Slide>
  );
}

export function StrategicPositionSlide() {
  return (
    <Slide id="strategic-position" footer={<SlideFooter n={23} />}>
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <SlideTitle>Predictive decisioning expands Aadifidelis&apos;s strategic position</SlideTitle>
        <div className="flex flex-wrap items-start gap-[20px] md:gap-[28px]">
          <div>
            <p className="text-[28px] font-medium tracking-[-0.03em] text-accent md:text-[36px]">
              Distributor
            </p>
            <p className="mt-[8px] text-[13px] text-muted md:text-[14px]">
              commission price-taker
            </p>
          </div>
          <span className="pt-[6px] text-[28px] text-accent md:pt-[10px] md:text-[36px]" aria-hidden>
            →
          </span>
          <div>
            <p className="text-[28px] font-medium tracking-[-0.03em] text-accent md:text-[36px]">
              Decisioning partner
            </p>
            <p className="mt-[8px] text-[13px] text-muted md:text-[14px]">
              negotiates from evidence
            </p>
          </div>
        </div>
        <Body className="max-w-[760px]">
          A distributor negotiates the commission a lender offers; a partner that
          demonstrably improves approval quality negotiates from evidence — pre-qualified
          volume that converts better is worth more. It opens adjacent structures over time:
          co-lending, first-loss arrangements, embedded-finance rails where Aadifidelis
          contributes decisioning, not only distribution.
        </Body>
      </div>
    </Slide>
  );
}

export function ThreePhasesSlide() {
  return (
    <Slide id="three-phases" footer={<SlideFooter n={24} />}>
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <SlideTitle>Three phases, each proven before the next is commissioned</SlideTitle>
        <div className="flex items-stretch overflow-x-auto pb-[4px]">
          <FlowNode label="1 · Visibility" sub="the single view · built" />
          <FlowArrow accent />
          <FlowNode label="2 · Value capture" sub="margin on existing volume" accent />
          <FlowArrow accent />
          <FlowNode label="3 · Optionality" sub="Credit Graph → decisioning" accent />
        </div>
        <Body className="max-w-[720px]">
          Each phase is validated before the next — risk stays contained, and you approve
          each stage on the results of the one before it.
        </Body>
      </div>
    </Slide>
  );
}

export function AlternativesSlide() {
  const rows = [
    {
      path: "Extend current tooling",
      strength: "Familiar, low disruption",
      tradeoff: "Records well; limited ability to act, route or reconcile at volume",
    },
    {
      path: "General-purpose CRM",
      strength: "Mature, broad",
      tradeoff:
        "No lender-policy or reconciliation logic; heavy customization to fit distribution",
    },
    {
      path: "Build in-house",
      strength: "Full ownership",
      tradeoff:
        "12+ months and sustained investment; domain modeling built from scratch",
    },
    {
      path: "TwoSpoon",
      strength: "Distribution-specific; Phase 1 already built to your model",
      tradeoff: "Newer partner — mitigated by phased, proof-first delivery",
    },
  ];

  return (
    <Slide id="alternatives" footer={<SlideFooter n={25} />}>
      <div className="flex flex-col gap-[24px] md:gap-[28px]">
        <SlideTitle>How this compares to the realistic alternatives</SlideTitle>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border text-[11px] uppercase tracking-[0.06em] text-muted-soft">
                <th className="py-[12px] pr-[16px] font-medium">Path</th>
                <th className="py-[12px] pr-[16px] font-medium">Strength</th>
                <th className="py-[12px] font-medium">Trade-off at your scale</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.path} className="border-b border-border align-top">
                  <td className="py-[14px] pr-[16px] text-[14px] font-medium tracking-[-0.01em] md:text-[15px]">
                    {row.path}
                  </td>
                  <td className="py-[14px] pr-[16px] text-[13px] text-muted md:text-[14px]">
                    {row.strength}
                  </td>
                  <td className="py-[14px] text-[13px] text-muted md:text-[14px]">
                    {row.tradeoff}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Slide>
  );
}

export function EvidenceSlide() {
  return (
    <Slide id="evidence" footer={<SlideFooter n={26} />}>
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>Evidence of fit</SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              The platform is the proof
            </h3>
            <Body className="mt-[12px]">
              The clearest evidence isn&apos;t a reference list — it&apos;s that the working
              platform you&apos;ve seen was built specifically around your lifecycle,
              reflecting how a loan distributor actually operates across both its sales and
              money halves.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              A relevant engagement
            </h3>
            <Body className="mt-[12px]">
              Optional — include one directly relevant TwoSpoon engagement here: the
              situation, what we did, and the measurable result. One well-chosen case does
              more than a list.
            </Body>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function InvestmentSlide() {
  const phases = [
    {
      title: "Phase 1 — Visibility",
      body: "Deploy & enable Control Tower + Agent App, data migration, team enablement.",
      timeline: "Timeline · ~6 weeks to rollout (built)",
    },
    {
      title: "Phase 2 — Value capture",
      body: "Five modules, sequenced: Document AI · Lender routing · Reconciliation · Partner analytics · Decision support.",
      timeline: "Timeline · 3–5 weeks per module",
    },
    {
      title: "Phase 3 — Optionality",
      body: "The Credit Graph accrues from Phase 1; model matures after ~9 months of live cases.",
      timeline: "Timeline · Ongoing",
    },
  ];

  return (
    <Slide id="investment" footer={<SlideFooter n={27} />}>
      <div className="flex flex-col gap-[28px] md:gap-[32px]">
        <SlideTitle>Investment, scope & timeline</SlideTitle>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[24px]">
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
        <Body className="max-w-[760px] text-[13px]">
          Draft figures — Kiran to replace with real numbers before presenting. You approve
          each phase on the results of the one before it, which keeps risk contained
          throughout.
        </Body>
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
    <Slide id="considerations" footer={<SlideFooter n={28} />}>
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

export function InternalCaseSlide() {
  return (
    <Slide id="internal-case" footer={<SlideFooter n={29} />}>
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>What this makes possible for the team presenting it internally</SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              A quantified value case
            </h3>
            <Body className="mt-[12px]">
              A recoverable, quantified opportunity in outstanding commission and
              approval-rate headroom — concrete numbers, on your own data.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              A low-risk path
            </h3>
            <Body className="mt-[12px]">
              A phased structure with Phase 1 already live and validated — a well-evidenced
              recommendation to put in front of the group.
            </Body>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function ClosingSlide() {
  return (
    <Slide id="closing" footer={<p className="text-[11px] text-muted-soft md:text-[12px]">TwoSpoon · hello@twospoon.co</p>}>
      <div className="flex max-w-[640px] flex-col gap-[28px] md:gap-[36px]">
        <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.03em] md:text-[48px]">
          You&apos;ve built the scale.
          <br />
          The opportunity now is the margin scale creates.
        </h2>
        <Body className="text-[15px] md:text-[16px]">
          Recommended next step: confirm Phase 1 rollout and scope Phase 2, module one.
        </Body>
      </div>
    </Slide>
  );
}
