import Image from "next/image";
import { Body, Slide, SlideTitle } from "@/components/shared";
import { cn } from "@/lib/utils";

export function Phase1ExistsSlide() {
  return (
    <Slide id="phase-1-exists">
      <div className="flex flex-col gap-[36px] md:gap-[44px]">
        <SlideTitle>
          Phase I establishes a unified real-time view of the business
        </SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:border-r md:border-border md:pr-[28px]">
            <h3 className="text-[17px] font-medium tracking-[-0.02em] md:text-[20px]">
              The Control Tower
            </h3>
            <Body className="mt-[10px] md:mt-[12px]">
              A desktop application for the office — the national pipeline, commercial
              performance and open items in one screen, live.
            </Body>
          </div>
          <div>
            <h3 className="text-[17px] font-medium tracking-[-0.02em] md:text-[20px]">
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
      contentClassName="relative !max-w-none justify-start px-0 py-0"
    >
      <div className="relative z-10 w-full max-w-[520px] px-[20px] pt-[36px] md:max-w-[520px] md:px-0 md:pl-[56px] md:pt-[64px]">
        <SlideTitle className="max-w-none">
          Leadership gains a real-time national view in a single screen
        </SlideTitle>
        <Body className="mt-[14px] max-w-[340px] text-[15px] md:mt-[16px] md:max-w-[400px] md:text-[14px]">
          Active cases and value, approval rate, sanctioned versus disbursed, commission
          expected versus outstanding, payouts pending, cases past SLA — all live. The
          funnel shows conversion at every stage; lender league tables rank approval rate
          and turnaround.
        </Body>
        <a
          href="https://aadifidelis-three.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[18px] inline-flex h-[44px] items-center justify-center rounded-[6px] bg-foreground px-[20px] text-[14px] font-medium text-background transition-opacity hover:opacity-85 md:mt-[24px] md:h-[44px] md:px-[22px] md:text-[14px]"
        >
          See Live
        </a>
      </div>
      <Image
        src="/images/control-tower.png"
        alt="Aadifidelis Control Tower — national overview dashboard"
        width={2848}
        height={2122}
        className="pointer-events-none absolute right-[-22%] bottom-[-6%] w-[95%] max-w-none translate-y-[28%] opacity-45 md:right-[-16%] md:bottom-[-6%] md:w-[78%] md:translate-y-[30%] md:opacity-100"
        sizes="70vw"
        priority
      />
    </Slide>
  );
}

export function AgentAppViewSlide({
  id = "agent-app-view",
  image = "/images/newlead.png",
  alt = "Aadifidelis Agent App — new lead capture",
  title = "Partners capture a new lead in three steps, right from a selfie",
  body = "Identity, employment, and requirement — guided capture with a live selfie and PAN/Aadhaar on the spot. Structured intake at first contact flows straight into the Control Tower.",
  imageSide = "right",
}: {
  id?: string;
  image?: string;
  alt?: string;
  title?: string;
  body?: string;
  imageSide?: "left" | "right";
} = {}) {
  const isLeft = imageSide === "left";
  return (
    <Slide
      id={id}
      contentClassName="relative !max-w-none justify-start px-0 py-0 md:justify-center"
    >
      <div
        className={cn(
          "relative z-10 w-full max-w-[420px] px-[20px] pt-[36px] md:max-w-[650px] md:px-0 md:pt-0",
          isLeft
            ? "md:ml-auto md:pr-[56px] md:pl-[24px]"
            : "md:pl-[56px] md:pr-[24px]"
        )}
      >
        <SlideTitle className="max-w-none">{title}</SlideTitle>
        <Body className="mt-[14px] max-w-[340px] text-[15px] md:mt-[16px] md:max-w-[560px] md:text-[14px]">
          {body}
        </Body>
      </div>
      <Image
        src={image}
        alt={alt}
        width={501}
        height={1024}
        className={cn(
          "pointer-events-none relative mx-auto mt-[28px] w-[42%] max-w-[180px] drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)] md:absolute md:top-1/2 md:mx-0 md:mt-0 md:w-[30%] md:max-w-[300px] md:-translate-y-1/2",
          isLeft ? "md:left-[14%]" : "md:right-[14%]"
        )}
        sizes="30vw"
        priority
      />
    </Slide>
  );
}

export function AgentAppViewSlide2() {
  return (
    <AgentAppViewSlide
      id="agent-app-view-2"
      image="/images/cases.png"
      alt="Aadifidelis Agent App — cases"
      title="Every case a partner owns, searchable and filterable in one list"
      body="Case ID, customer, product, and status at a glance — filter by Lender Processing, Documents Pending, or Sanctioned. No calling the branch to check where a file stands."
      imageSide="left"
    />
  );
}

export function AgentAppViewSlide3() {
  return (
    <AgentAppViewSlide
      id="agent-app-view-3"
      image="/images/casedetails.png"
      alt="Aadifidelis Agent App — case details"
      title="Open a case and the next action is already decided"
      body="Status, amount requested, estimated payout, and document completeness in one screen — with the overdue next action surfaced up top, not buried in a timeline."
    />
  );
}

export function AgentAppViewSlide4() {
  return (
    <AgentAppViewSlide
      id="agent-app-view-4"
      image="/images/inbox.png"
      alt="Aadifidelis Agent App — inbox"
      title="Lender queries land as an inbox, not a lost email"
      body="Rejected files, pending documents, credit manager queries — each with an SLA that lapses if ignored. Reply, upload, or open the case without leaving the thread."
      imageSide="left"
    />
  );
}

export function AgentAppViewSlide5() {
  return (
    <AgentAppViewSlide
      id="agent-app-view-5"
      image="/images/payout.png"
      alt="Aadifidelis Agent App — payout"
      title="Commission is visible end to end — from lead to earned"
      body="Outstanding and lifetime payout, TDS rate, and a funnel from leads to disbursed to earned. A per-case ledger settles any dispute about what's owed."
    />
  );
}

export function Phase1FeaturesSlide() {
  const queues = [
    "Ready for lender",
    "Awaiting documents",
    "Commission due",
    "Sanction expiring",
    "Payout in review",
  ];

  const itemSignals = ["Owner", "Action", "Age", "SLA", "Value"];

  return (
    <Slide id="phase-1-features" contentClassName="justify-start md:justify-center">
      <div className="flex w-full min-h-0 flex-col gap-[16px] md:gap-[18px]">
        <SlideTitle className="max-w-[760px]">
          Governance, queues, and field capture — built for how the business runs
        </SlideTitle>

        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-6 md:gap-[12px]">
          {/* Governance — wide */}
          <div className="flex flex-col justify-between rounded-[10px] bg-surface p-[16px] md:col-span-4 md:min-h-[200px] md:p-[20px]">
            <div>
              <p className="text-[12px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
                Governance
              </p>
              <h3 className="mt-[6px] text-[17px] font-medium tracking-[-0.02em] md:text-[19px]">
                Built to the standard a BLS-owned entity requires
              </h3>
            </div>
            <div className="mt-[14px] grid grid-cols-1 gap-[14px] md:grid-cols-2 md:gap-[20px]">
              <div>
                <h4 className="text-[15px] font-medium tracking-[-0.01em] md:text-[15px]">
                  Scoped by role
                </h4>
                <Body className="mt-[6px] text-[14px] md:text-[13px]">
                  Role-based access with field-level permissions — regional, finance, and
                  auditor each see only what they should.
                </Body>
              </div>
              <div>
                <h4 className="text-[15px] font-medium tracking-[-0.01em] md:text-[15px]">
                  Two sets of hands
                </h4>
                <Body className="mt-[6px] text-[14px] md:text-[13px]">
                  Sensitive actions need a separate approver. Every material action is
                  logged with its reason.
                </Body>
              </div>
            </div>
            <p className="mt-[14px] text-[13px] text-muted md:text-[13px]">
              <span className="text-foreground">Maker</span>
              <span className="mx-[6px] text-accent">→</span>
              Validated
              <span className="mx-[6px] text-accent">→</span>
              <span className="text-foreground">Checker</span>
              <span className="mx-[6px] text-accent">→</span>
              Paid
            </p>
          </div>

          {/* Work queues */}
          <div className="flex flex-col justify-between rounded-[10px] bg-surface p-[16px] md:col-span-2 md:p-[20px]">
            <div>
              <p className="text-[12px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
                Work queues
              </p>
              <h3 className="mt-[6px] text-[16px] font-medium tracking-[-0.02em] md:text-[17px]">
                Attention, assembled automatically
              </h3>
              <Body className="mt-[8px] text-[14px] md:text-[13px]">
                Effort concentrates where it matters — not on finding where it matters.
              </Body>
            </div>
            <div className="mt-[14px] flex flex-wrap gap-[6px]">
              {queues.map((queue) => (
                <span
                  key={queue}
                  className="rounded-[4px] border border-border bg-background px-[8px] py-[5px] text-[11px] text-foreground md:text-[11px]"
                >
                  {queue}
                </span>
              ))}
            </div>
          </div>

          {/* Field capture */}
          <div className="flex flex-col justify-between gap-[12px] rounded-[10px] bg-surface p-[16px] md:col-span-2 md:min-h-[160px] md:p-[20px]">
            <div>
              <p className="text-[12px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
                Field capture
              </p>
              <h3 className="mt-[6px] text-[16px] font-medium tracking-[-0.02em] md:text-[17px]">
                Data quality fixed at the source
              </h3>
              <Body className="mt-[8px] text-[14px] md:text-[13px]">
                Partners capture borrower and requirement at first contact — validated
                fields, documents on the spot — flowing straight into a case.
              </Body>
            </div>
            <p className="text-[28px] font-medium tracking-[-0.03em] text-accent md:text-[30px]">
              17,912
              <span className="ml-[8px] text-[13px] font-normal tracking-normal text-muted md:text-[13px]">
                rows, ₹76.1 Cr — unverifiable without a LAN at intake
              </span>
            </p>
          </div>

          {/* Item context */}
          <div className="flex h-full flex-col rounded-[10px] bg-surface p-[16px] md:col-span-2 md:p-[20px]">
            <p className="text-[12px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
              On every item
            </p>
            <h3 className="mt-[6px] text-[16px] font-medium tracking-[-0.02em] md:text-[17px]">
              Full context, no hunting
            </h3>
            <div className="mt-auto flex flex-wrap gap-[6px] pt-[12px]">
              {itemSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-[4px] border border-border bg-background px-[8px] py-[5px] text-[11px] text-foreground md:text-[11px]"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="flex h-full flex-col rounded-[10px] bg-surface p-[16px] md:col-span-2 md:p-[20px]">
            <p className="text-[12px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
              Result
            </p>
            <h3 className="mt-[6px] text-[16px] font-medium tracking-[-0.02em] md:text-[17px]">
              Less lost.
              <br />
              Less re-entered.
              <br />
              Faster handoff.
            </h3>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function Phase1CloseSlide() {
  return (
    <Slide id="phase-1-close">
      <div className="flex max-w-[640px] flex-col gap-[20px] md:gap-[24px]">
        <SlideTitle>Phase II expands it even further.</SlideTitle>
        <Body className="text-[16px] md:text-[16px]">
          Visibility is the foundation — Phase II uses it to improve the numbers you can now
          see: faster turnaround, fuller collection, sharper routing.
        </Body>
      </div>
    </Slide>
  );
}
