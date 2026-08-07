import {
  AccentStat,
  Body,
  FlowArrow,
  FlowNode,
  Slide,
  SlideTitle,
} from "@/components/shared";

export function DocumentAISlide() {
  return (
    <Slide id="document-ai">
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
    <Slide id="lender-routing">
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <SlideTitle>
          Systematic lender routing addresses the largest single margin opportunity
        </SlideTitle>
        <div className="flex flex-wrap items-start gap-[28px] md:gap-[40px]">
          <AccentStat
            value="54%"
            label="book-level approval — Mar'23–Feb'24 bank book"
          />
          <AccentStat
            value="~72%"
            label="approval among top-quartile lenders on that same book"
          />
        </div>
        <Body className="max-w-[720px] text-[12px] leading-[1.5] text-muted-soft md:text-[12px]">
          Observed spread across lenders on your submissions — not a pledged lift to 72%
          on every case. Part of the gap is lender–borrower fit (routing); the rest is credit
          quality, product mix, and lender policy. Rules-based routing targets the fit share
          first; the Credit Graph tightens it as outcomes accumulate.
        </Body>
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
    <Slide id="reconciliation">
      <div className="flex flex-col gap-[28px] md:gap-[36px]">
        <SlideTitle>
          Automated reconciliation converts outstanding commission into collected commission
        </SlideTitle>
        <Body className="max-w-[760px]">
          Outcome: the ~₹25.1 Cr defensible receivable — and the ₹22 Cr already paid down the
          chain — becomes a tracked, collectible list, not a manual search. Mechanism: lender
          MIS and bank receipts auto-matched on LAN and six keys; exceptions routed with
          owners and deadlines.
        </Body>
        <div className="flex items-stretch overflow-x-auto pb-[4px]">
          <FlowNode label="Lender MIS" sub="+ bank receipt feed" />
          <FlowArrow accent />
          <FlowNode
            label="Six-key match"
            sub="LAN · application ID · PAN · amount · disbursal date · product"
          />
          <FlowArrow accent />
          <FlowNode label="Auto-cleared" accent />
        </div>
        <Body className="max-w-[760px]">
          Anything that doesn&apos;t match — a ₹2.38 Cr short-receive, a +₹3.60 Cr
          over-receive, a missing LAN, a NOT FOUND remark — becomes an exception with a named
          owner and a due date. Backfilling LANs reclassifies the ₹76.1 Cr dark bucket into
          chaseable work.
        </Body>
      </div>
    </Slide>
  );
}

export function PartnerAnalyticsSlide() {
  return (
    <Slide id="partner-analytics">
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>Partner performance analytics direct support where it compounds</SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              Concentrate the support
            </h3>
            <Body className="mt-[12px]">
              One channel alone — RAM MUMBAI — is ~32% of IDC rows. Continuous scoring —
              approval rate, document quality, margin per loan, duplicates — lets relationship
              teams concentrate support where it returns most, and helps newer partners
              improve with clear signals.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              Surface genuine risk early
            </h3>
            <Body className="mt-[12px]">
              The same scoring surfaces real risk — 4,856 loss-making loans (−₹4.29 Cr) where
              giving exceeded receipt, unusual duplicate patterns, or a bank-detail change
              just before a payout — early, as a safeguard rather than an accusation.
            </Body>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function PredictivePromptsSlide() {
  return (
    <Slide id="predictive-prompts">
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
              Aging & write-off risk
            </h3>
            <Body className="mt-[10px]">
              Surfaces the aged tail — like the ~₹9 Cr Mar–Aug&apos;23 unreceived — before it
              becomes a write-off, not after.
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

export function DataAssetSlide() {
  return (
    <Slide id="data-asset">
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
              Phase II captures lender-outcome data across 121 lenders, 83 products, and
              205k bank-book rows — who paid, how quickly, at what rate, and where the short
              and over-receives concentrate.
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
    <Slide id="credit-graph">
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
          Rules-based routing starts capturing value immediately. As live cases accumulate,
          the Credit Graph learns from every outcome, improving continuously — a compounding
          advantage that grows the more of your normal business you run. More volume →
          sharper model → better outcomes.
        </Body>
      </div>
    </Slide>
  );
}

export function StrategicPositionSlide() {
  return (
    <Slide id="strategic-position">
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

export function CrmEngagementSlide() {
  return (
    <Slide id="crm-engagement">
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>
          CRM, WhatsApp, and agentic workflows cut cycle time and raise follow-through
        </SlideTitle>
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3 md:gap-[32px]">
          <div>
            <h3 className="text-[17px] font-medium tracking-[-0.02em] md:text-[18px]">
              CRM as system of record
            </h3>
            <Body className="mt-[10px]">
              Every lead, partner touch, case status, and next action in one place — no
              orphaned WhatsApp threads or spreadsheet handoffs.
            </Body>
          </div>
          <div>
            <h3 className="text-[17px] font-medium tracking-[-0.02em] md:text-[18px]">
              WhatsApp Business
            </h3>
            <Body className="mt-[10px]">
              Click-to-WhatsApp intake, document nudges, status updates, and partner alerts
              on the channel borrowers already use.
            </Body>
          </div>
          <div>
            <h3 className="text-[17px] font-medium tracking-[-0.02em] md:text-[18px]">
              AI agentic workflows
            </h3>
            <Body className="mt-[10px]">
              Agents qualify, chase missing docs, escalate aging cases, and draft next
              actions — humans approve. Operational efficiency without losing control.
            </Body>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function CustomerWebsiteSlide() {
  return (
    <Slide id="customer-website">
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>
          A customer website that attracts, qualifies, and brings visitors back
        </SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              Tools that earn traffic
            </h3>
            <Body className="mt-[12px]">
              Free CIBIL / credit-score check, EMI calculator, and eligibility estimator —
              each tool captures intent and feeds the CRM instead of leaving visitors as
              anonymous page views.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              Return-visit signal &amp; retargeting
            </h3>
            <Body className="mt-[12px]">
              Meta Pixel plus Conversions API (CAPI) marks tool abandoners and return
              visitors into custom audiences — and CRM triggers notify the team so outreach
              follows the signal: revisit → alert → follow-up, not a static brochure.
            </Body>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function GrowthOutreachSlide() {
  const channels = [
    {
      title: "Meta Pixel + CAPI retargeting",
      body: "Warm audiences from site and tool visitors — highest-intent recovery of abandoned interest.",
    },
    {
      title: "Click-to-WhatsApp campaigns",
      body: "Low-friction, India-native lead capture that lands straight in the CRM.",
    },
    {
      title: "Google Ads + remarketing",
      body: "High-intent search — personal loan, CIBIL check — plus site remarketing for return traffic.",
    },
    {
      title: "SEO lead magnets",
      body: "Calculator and score pages that rank and feed an organic pipeline over time.",
    },
    {
      title: "CRM lookalikes & partner referrals",
      body: "Closed and qualified lists seed lookalike audiences; systematic partner share-links extend outreach.",
    },
  ];

  return (
    <Slide id="growth-outreach">
      <div className="flex flex-col gap-[28px] md:gap-[32px]">
        <SlideTitle>Channels that compound outreach beyond a static brochure site</SlideTitle>
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-x-[40px] md:gap-y-[28px]">
          {channels.map((channel) => (
            <div key={channel.title}>
              <h3 className="text-[16px] font-medium tracking-[-0.02em] md:text-[18px]">
                {channel.title}
              </h3>
              <Body className="mt-[10px]">{channel.body}</Body>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

export function Phase2CloseSlide() {
  return (
    <Slide id="phase-2-close">
      <div className="flex max-w-[640px] flex-col gap-[20px] md:gap-[24px]">
        <SlideTitle>
          Phase II improves margin on existing volume — and compounds into decisioning
          advantage.
        </SlideTitle>
        <Body className="text-[15px] md:text-[16px]">
          Higher approval through routing, faster turnaround through automation, recovery of
          the ~₹25.1 Cr chaseable book and the ₹22 Cr cash already out, better-directed
          partner support — plus a Credit Graph that learns from every case. CRM, WhatsApp,
          and agentic workflows tighten follow-through; a customer website with tools and
          Pixel retargeting brings warmer traffic back into the funnel. All on the business
          you already run.
        </Body>
      </div>
    </Slide>
  );
}
