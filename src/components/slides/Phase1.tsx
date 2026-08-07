import Image from "next/image";
import {
  Body,
  FlowArrow,
  FlowNode,
  MockFrame,
  MockNote,
  Slide,
  SlideFooter,
  SlideTitle,
} from "@/components/shared";

export function Phase1DividerSlide() {
  return (
    <Slide id="phase-1-divider" variant="dark">
      <div className="mt-auto max-w-[560px] pb-[24px]">
        <p className="text-[72px] font-medium leading-none tracking-[-0.04em] text-accent md:text-[96px]">
          03
        </p>
        <h2 className="mt-[12px] text-[28px] font-medium tracking-[-0.03em] md:text-[36px]">
          Phase 1 — Visibility
        </h2>
        <p className="mt-[14px] max-w-[420px] text-[15px] leading-[1.5] text-white/75 md:text-[16px]">
          One source of truth, lead to payout. Built and running today — not a concept.
        </p>
      </div>
    </Slide>
  );
}

export function Phase1ExistsSlide() {
  return (
    <Slide id="phase-1-exists" footer={<SlideFooter n={8} />}>
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>
          Phase 1 establishes a single, real-time view of the business — and it already
          exists
        </SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              The Control Tower
            </h3>
            <Body className="mt-[12px]">
              A desktop application for the office — the national pipeline, commercial
              performance and open items in one screen, live.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              The Agent App
            </h3>
            <Body className="mt-[12px]">
              A field application for your partners — structured borrower capture at first
              contact, flowing straight into a case.
            </Body>
          </div>
        </div>
        <Body className="max-w-[720px]">
          Rather than present a concept, we built a working version tailored to your
          operating model. This conversation is grounded in something real.
        </Body>
      </div>
    </Slide>
  );
}

export function LeadershipViewSlide() {
  return (
    <Slide
      id="leadership-view"
      footer={<SlideFooter n={9} />}
      contentClassName="relative !max-w-none justify-start px-0 py-0"
    >
      <div className="relative z-10 w-full max-w-[340px] pl-[28px] pt-[48px] md:max-w-[520px] md:pl-[56px] md:pt-[64px]">
        <SlideTitle className="max-w-none text-[24px] md:text-[28px]">
          Leadership gains a real-time national view in a single screen
        </SlideTitle>
        <Body className="mt-[16px] max-w-none text-[13px] md:text-[14px]">
          Active cases and value, approval rate, sanctioned versus disbursed, commission
          expected versus outstanding, payouts pending, cases past SLA — all live. The
          funnel shows conversion at every stage; lender league tables rank approval rate
          and turnaround.
        </Body>
        <a
          href="https://aadifidelis-three.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[20px] inline-flex h-[40px] items-center justify-center rounded-[6px] bg-foreground px-[18px] text-[13px] font-medium text-background transition-opacity hover:opacity-85 md:mt-[24px] md:h-[44px] md:px-[22px] md:text-[14px]"
        >
          See Live
        </a>
      </div>
      <Image
        src="/images/control-tower.png"
        alt="Aadifidelis Control Tower — national overview dashboard"
        width={2848}
        height={2122}
        className="pointer-events-none absolute right-[-18%] bottom-[-8%] w-[82%] max-w-none translate-y-[30%] md:right-[-16%] md:bottom-[-6%] md:w-[78%]"
        sizes="70vw"
        priority
      />
    </Slide>
  );
}

export function GovernanceSlide() {
  return (
    <Slide id="governance" footer={<SlideFooter n={10} />}>
      <div className="flex flex-col gap-[32px] md:gap-[40px]">
        <SlideTitle>
          Governance is built in — to the standard a listed, BLS-owned entity requires
        </SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              Scoped by role
            </h3>
            <Body className="mt-[12px]">
              Role-based access with field-level permissions: a regional executive sees
              their team, finance sees the money, an auditor sees the log and can change
              nothing.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              Two sets of hands
            </h3>
            <Body className="mt-[12px]">
              Sensitive actions — payouts, commission-rate changes, partner bank-detail
              changes — require a separate approver by design. Every material action is
              logged with its reason.
            </Body>
          </div>
        </div>
        <div className="flex items-stretch overflow-x-auto pb-[4px]">
          <FlowNode label="Executive creates payout" sub="maker" />
          <FlowArrow accent />
          <FlowNode label="Validated" />
          <FlowArrow accent />
          <FlowNode
            label="Separate manager approves"
            sub="checker · creator ≠ approver"
            accent
          />
          <FlowArrow accent />
          <FlowNode label="Paid" accent />
        </div>
      </div>
    </Slide>
  );
}

export function WorkQueueSlide() {
  return (
    <Slide id="work-queue" footer={<SlideFooter n={11} />}>
      <div className="grid grid-cols-1 items-center gap-[28px] md:grid-cols-[0.95fr_1.05fr] md:gap-[40px]">
        <div>
          <SlideTitle className="md:text-[34px]">
            Prioritized work queues direct attention to what needs it, automatically
          </SlideTitle>
          <Body className="mt-[20px]">
            The platform assembles the queues — ready for lender, awaiting documents,
            commission due, sanction expiring, payout in review. Each item carries its
            owner, the pending action, its age, its SLA and the value at stake, so effort
            concentrates where it matters rather than on finding where it matters.
          </Body>
          <MockNote>Mockup · drop live screenshot</MockNote>
        </div>
        <MockFrame title="Work Queue — Needs attention" caption="owner · action · age · SLA · value" />
      </div>
    </Slide>
  );
}

export function FieldCaptureSlide() {
  return (
    <Slide id="field-capture" footer={<SlideFooter n={12} />}>
      <div className="grid grid-cols-1 items-center gap-[28px] md:grid-cols-[0.95fr_1.05fr] md:gap-[40px]">
        <div>
          <SlideTitle className="md:text-[34px]">
            Structured capture in the field improves data quality at the source
          </SlideTitle>
          <Body className="mt-[20px]">
            Data quality is hardest to fix downstream, so we address it at origin. The field
            app lets a partner capture the borrower and requirement at first contact —
            validated fields, documents photographed on the spot — flowing directly into a
            case. Less is lost or re-entered as it moves, and your 9,400 partners get a
            cleaner, faster way to work with you.
          </Body>
          <MockNote>Mockup · drop live screenshot</MockNote>
        </div>
        <MockFrame title="Agent App — Field capture" />
      </div>
    </Slide>
  );
}

export function Phase1CloseSlide() {
  return (
    <Slide id="phase-1-close" footer={<SlideFooter n={13} />}>
      <div className="flex max-w-[640px] flex-col gap-[20px] md:gap-[24px]">
        <SlideTitle>
          Phase 1 delivers a complete, real-time view of the business.
        </SlideTitle>
        <Body className="text-[15px] md:text-[16px]">
          The foundation everything else builds on — and what makes the next phase,
          improving the numbers you can now see, possible.
        </Body>
      </div>
    </Slide>
  );
}
