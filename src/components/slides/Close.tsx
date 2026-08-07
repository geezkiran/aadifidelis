import {
  Body,
  FlowArrow,
  FlowNode,
  Slide,
  SlideTitle,
} from "@/components/shared";

export function TwoPhasesSlide() {
  return (
    <Slide id="two-phases">
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <SlideTitle>Two phases, each proven before the next is commissioned</SlideTitle>
        <div className="flex items-stretch overflow-x-auto pb-[4px]">
          <FlowNode label="1 · Visibility" sub="the single view · built" />
          <FlowArrow accent />
          <FlowNode
            label="2 · Value capture"
            sub="margin + Credit Graph → decisioning"
            accent
          />
        </div>
        <Body className="max-w-[720px]">
          Phase II is validated on Phase I results — risk stays contained, and you approve
          the next stage on the results of the one before it.
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
      strength: "Distribution-specific; Phase I already built to your model",
      tradeoff: "Newer partner — mitigated by phased, proof-first delivery",
    },
  ];

  return (
    <Slide id="alternatives">
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
    <Slide id="evidence">
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
      title: "Phase I — Visibility",
      body: "Deploy & enable Control Tower + Agent App, data migration, team enablement.",
      timeline: "Timeline · ~6 weeks to rollout (built)",
    },
    {
      title: "Phase II — Value capture",
      body: "Modules sequenced: Document AI · Lender routing · Reconciliation · Partner analytics · Decision support · Credit Graph. Model matures with ~9 months of live cases.",
      timeline: "Timeline · 3–5 weeks per module; Credit Graph ongoing",
    },
  ];

  return (
    <Slide id="investment">
      <div className="flex flex-col gap-[28px] md:gap-[32px]">
        <SlideTitle>Investment, scope & timeline</SlideTitle>
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
        <Body className="max-w-[760px] text-[13px]">
          Draft figures — Kiran to replace with real numbers before presenting. You approve
          Phase II on the results of Phase I, which keeps risk contained throughout.
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

export function InternalCaseSlide() {
  return (
    <Slide id="internal-case">
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>What this makes possible for the team presenting it internally</SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              A quantified value case
            </h3>
            <Body className="mt-[12px]">
              ~₹25.1 Cr defensible receivable to chase, ₹22 Cr already paid out on unsettled
              loans, and ₹76.1 Cr sitting dark for lack of a LAN — concrete numbers, on your
              own data.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              A low-risk path
            </h3>
            <Body className="mt-[12px]">
              A phased structure with Phase I already live and validated — a well-evidenced
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
