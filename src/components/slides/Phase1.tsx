import Image from "next/image";
import { Body, Slide, SlideTitle } from "@/components/shared";

export function Phase1ExistsSlide() {
  return (
    <Slide id="phase-1-exists">
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
      contentClassName="relative !max-w-none justify-start px-0 py-0"
    >
      <div className="relative z-10 w-full max-w-[340px] pl-[28px] pt-[48px] md:max-w-[520px] md:pl-[56px] md:pt-[64px]">
        <SlideTitle className="max-w-none">
          Leadership gains a real-time national view in a single screen
        </SlideTitle>
        <Body className="mt-[16px] max-w-[280px] text-[13px] md:max-w-[400px] md:text-[14px]">
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
              <p className="text-[11px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
                Governance
              </p>
              <h3 className="mt-[6px] text-[16px] font-medium tracking-[-0.02em] md:text-[19px]">
                Built to the standard a BLS-owned entity requires
              </h3>
            </div>
            <div className="mt-[14px] grid grid-cols-1 gap-[14px] md:grid-cols-2 md:gap-[20px]">
              <div>
                <h4 className="text-[14px] font-medium tracking-[-0.01em] md:text-[15px]">
                  Scoped by role
                </h4>
                <Body className="mt-[6px] text-[12px] md:text-[13px]">
                  Role-based access with field-level permissions — regional, finance, and
                  auditor each see only what they should.
                </Body>
              </div>
              <div>
                <h4 className="text-[14px] font-medium tracking-[-0.01em] md:text-[15px]">
                  Two sets of hands
                </h4>
                <Body className="mt-[6px] text-[12px] md:text-[13px]">
                  Sensitive actions need a separate approver. Every material action is
                  logged with its reason.
                </Body>
              </div>
            </div>
            <p className="mt-[14px] text-[12px] text-muted md:text-[13px]">
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
              <p className="text-[11px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
                Work queues
              </p>
              <h3 className="mt-[6px] text-[15px] font-medium tracking-[-0.02em] md:text-[17px]">
                Attention, assembled automatically
              </h3>
              <Body className="mt-[8px] text-[12px] md:text-[13px]">
                Effort concentrates where it matters — not on finding where it matters.
              </Body>
            </div>
            <div className="mt-[14px] flex flex-wrap gap-[6px]">
              {queues.map((queue) => (
                <span
                  key={queue}
                  className="rounded-[4px] border border-border bg-background px-[8px] py-[5px] text-[10px] text-foreground md:text-[11px]"
                >
                  {queue}
                </span>
              ))}
            </div>
          </div>

          {/* Field capture */}
          <div className="flex flex-col justify-between gap-[12px] rounded-[10px] bg-surface p-[16px] md:col-span-2 md:min-h-[160px] md:p-[20px]">
            <div>
              <p className="text-[11px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
                Field capture
              </p>
              <h3 className="mt-[6px] text-[15px] font-medium tracking-[-0.02em] md:text-[17px]">
                Data quality fixed at the source
              </h3>
              <Body className="mt-[8px] text-[12px] md:text-[13px]">
                Partners capture borrower and requirement at first contact — validated
                fields, documents on the spot — flowing straight into a case.
              </Body>
            </div>
            <p className="text-[26px] font-medium tracking-[-0.03em] text-accent md:text-[30px]">
              17,912
              <span className="ml-[8px] text-[12px] font-normal tracking-normal text-muted md:text-[13px]">
                rows, ₹76.1 Cr — unverifiable without a LAN at intake
              </span>
            </p>
          </div>

          {/* Item context */}
          <div className="flex h-full flex-col rounded-[10px] bg-surface p-[16px] md:col-span-2 md:p-[20px]">
            <p className="text-[11px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
              On every item
            </p>
            <h3 className="mt-[6px] text-[15px] font-medium tracking-[-0.02em] md:text-[17px]">
              Full context, no hunting
            </h3>
            <div className="mt-auto flex flex-wrap gap-[6px] pt-[12px]">
              {itemSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-[4px] border border-border bg-background px-[8px] py-[5px] text-[10px] text-foreground md:text-[11px]"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="flex h-full flex-col rounded-[10px] bg-surface p-[16px] md:col-span-2 md:p-[20px]">
            <p className="text-[11px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
              Result
            </p>
            <h3 className="mt-[6px] text-[15px] font-medium tracking-[-0.02em] md:text-[17px]">
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
