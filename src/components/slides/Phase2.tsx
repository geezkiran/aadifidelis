import {
  AccentStat,
  Body,
  FlowArrow,
  FlowNode,
  Slide,
  SlideFooter,
  SlideTitle,
} from "@/components/shared";

export function Phase2DividerSlide() {
  return (
    <Slide id="phase-2-divider" variant="dark">
      <div className="mt-auto max-w-[560px] pb-[24px]">
        <p className="text-[72px] font-medium leading-none tracking-[-0.04em] text-accent md:text-[96px]">
          04
        </p>
        <h2 className="mt-[12px] text-[28px] font-medium tracking-[-0.03em] md:text-[36px]">
          Phase 2 — Value capture
        </h2>
        <p className="mt-[14px] max-w-[420px] text-[15px] leading-[1.5] text-white/75 md:text-[16px]">
          Five focused areas, each tied to a specific, quantifiable outcome on existing
          volume.
        </p>
      </div>
    </Slide>
  );
}

export function DocumentAISlide() {
  return (
    <Slide id="document-ai" footer={<SlideFooter n={15} />}>
      <div className="flex flex-col gap-[28px] md:gap-[36px]">
        <SlideTitle>
          Automated document processing compresses turnaround from a day to minutes
        </SlideTitle>
        <Body className="max-w-[760px]">
          Outcome: the longest step in the case cycle shortens materially, and cleaner files
          raise approval likelihood. Mechanism: Document AI reads bank statements, ITR, GST
          and salary slips — and flags mismatches automatically.
        </Body>
        <div className="flex items-stretch overflow-x-auto pb-[4px]">
          <FlowNode label="Upload" sub="bank stmt · ITR · GST · salary slip" />
          <FlowArrow accent />
          <FlowNode label="Extract" sub="income · obligations · balances" />
          <FlowArrow accent />
          <FlowNode label="Cross-check" sub="vs stated position" />
          <FlowArrow accent />
          <FlowNode label="Verified" sub="mismatch → task to executive" accent />
        </div>
      </div>
    </Slide>
  );
}

export function LenderRoutingSlide() {
  return (
    <Slide id="lender-routing" footer={<SlideFooter n={16} />}>
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <SlideTitle>
          Systematic lender routing addresses the largest single margin opportunity
        </SlideTitle>
        <div className="flex flex-wrap items-start gap-[28px] md:gap-[40px]">
          <AccentStat value="54%" label="approval rate today" />
          <AccentStat
            value="~72%"
            label="top-quartile lenders — part of the gap is routing, not borrower quality"
          />
        </div>
        <div className="flex items-stretch overflow-x-auto pb-[4px]">
          <FlowNode label="Borrower profile" sub="income · vintage · score · FOIR · geo" />
          <FlowArrow accent />
          <FlowNode label="Policy engine" />
          <FlowArrow accent />
          <FlowNode
            label="Ranked best-fit lenders"
            sub="recommended submission per borrower"
            accent
          />
        </div>
      </div>
    </Slide>
  );
}

export function ReconciliationSlide() {
  return (
    <Slide id="reconciliation" footer={<SlideFooter n={17} />}>
      <div className="flex flex-col gap-[28px] md:gap-[36px]">
        <SlideTitle>
          Automated reconciliation converts outstanding commission into collected commission
        </SlideTitle>
        <Body className="max-w-[760px]">
          Outcome: the ~₹76.6L outstanding becomes a tracked, collectible list — not a
          manual search. Mechanism: lender MIS and bank receipts auto-matched on six keys;
          exceptions routed with owners and deadlines.
        </Body>
        <div className="flex items-stretch overflow-x-auto pb-[4px]">
          <FlowNode label="Lender MIS" sub="+ bank receipt feed" />
          <FlowArrow accent />
          <FlowNode
            label="Six-key match"
            sub="application ID · PAN · amount · disbursal date · product · case ID"
          />
          <FlowArrow accent />
          <FlowNode label="Auto-cleared" accent />
        </div>
        <Body className="max-w-[760px]">
          Anything that doesn&apos;t match — a rate difference, a short payment, a duplicate,
          a missing invoice reference — becomes an exception with a named owner and a due
          date.
        </Body>
      </div>
    </Slide>
  );
}

export function PartnerAnalyticsSlide() {
  return (
    <Slide id="partner-analytics" footer={<SlideFooter n={18} />}>
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>Partner performance analytics direct support where it compounds</SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              Concentrate the support
            </h3>
            <Body className="mt-[12px]">
              Across 9,400+ partners, contribution varies naturally. Continuous scoring —
              approval rate, document quality, duplicates, complaints — lets relationship
              teams concentrate support where it returns most, and helps newer partners
              improve with clear signals.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              Surface genuine risk early
            </h3>
            <Body className="mt-[12px]">
              The same scoring surfaces real risk indicators — an unusual duplicate pattern,
              or a bank-detail change just before a payout — early, as a safeguard rather
              than an accusation.
            </Body>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function PredictivePromptsSlide() {
  return (
    <Slide id="predictive-prompts" footer={<SlideFooter n={19} />}>
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>Predictive prompts move the team from reactive to pre-emptive</SlideTitle>
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3 md:gap-[32px]">
          <div>
            <h3 className="text-[17px] font-medium tracking-[-0.02em] md:text-[18px]">
              Approval probability
            </h3>
            <Body className="mt-[10px]">
              Per case, with the one document that would change the outcome flagged
              alongside it.
            </Body>
          </div>
          <div>
            <h3 className="text-[17px] font-medium tracking-[-0.02em] md:text-[18px]">
              SLA-risk prediction
            </h3>
            <Body className="mt-[10px]">
              A warning when a case is approaching its limit — before the delay, not after.
            </Body>
          </div>
          <div>
            <h3 className="text-[17px] font-medium tracking-[-0.02em] md:text-[18px]">
              Recommended next action
            </h3>
            <Body className="mt-[10px]">
              Decision support: the team stays in control, but works with more foresight.
            </Body>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function Phase2CloseSlide() {
  return (
    <Slide id="phase-2-close" footer={<SlideFooter n={20} />}>
      <div className="flex max-w-[640px] flex-col gap-[20px] md:gap-[24px]">
        <SlideTitle>Phase 2 improves margin on existing volume.</SlideTitle>
        <Body className="text-[15px] md:text-[16px]">
          Higher approval through routing, faster turnaround through automation, more
          complete commission collection, better-directed partner support — all on the
          business you already run. No additional origination required.
        </Body>
      </div>
    </Slide>
  );
}
