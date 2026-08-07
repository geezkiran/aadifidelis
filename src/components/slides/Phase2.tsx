import { Body, Slide, SlideTitle } from "@/components/shared";

function BentoCard({
  label,
  title,
  children,
  className = "",
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-[10px] bg-surface p-[14px] md:p-[18px] ${className}`}
    >
      <div>
        <p className="text-[10px] tracking-[0.04em] text-accent uppercase md:text-[11px]">
          {label}
        </p>
        <h3 className="mt-[5px] text-[14px] font-medium tracking-[-0.02em] md:text-[16px]">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

export function Phase2ProposalsSlide() {
  return (
    <Slide id="phase-2-proposals" contentClassName="justify-start md:justify-center">
      <div className="flex w-full min-h-0 flex-col gap-[14px] md:gap-[16px]">
        <SlideTitle className="max-w-[780px]">
          Phase II proposals — margin, decisioning, and growth on the business you already run
        </SlideTitle>

        <div className="grid grid-cols-1 gap-[8px] md:grid-cols-[1fr_240px] md:gap-[10px] lg:grid-cols-[1fr_260px]">
          <div className="grid grid-cols-1 gap-[8px] md:grid-cols-6 md:gap-[10px]">
            {/* Document AI */}
            <BentoCard
              label="Document AI"
              title="Turnaround from a day to minutes"
              className="md:col-span-2"
            >
              <Body className="mt-[8px] text-[11px] md:text-[12px]">
                Reads bank stmt, ITR, GST, salary slips — extracts, cross-checks, flags
                mismatches as tasks.
              </Body>
            </BentoCard>

            {/* Lender routing — hero with stats */}
            <BentoCard
              label="Lender routing"
              title="Largest single margin opportunity"
              className="md:col-span-4 md:min-h-[140px]"
            >
              <div className="mt-[10px] flex flex-wrap items-end gap-[20px] md:gap-[28px]">
                <div>
                  <p className="text-[26px] font-medium tracking-[-0.03em] text-accent md:text-[32px]">
                    54%
                  </p>
                  <p className="mt-[4px] text-[11px] text-muted md:text-[12px]">
                    book-level approval
                  </p>
                </div>
                <span className="pb-[18px] text-[20px] text-accent" aria-hidden>
                  →
                </span>
                <div>
                  <p className="text-[26px] font-medium tracking-[-0.03em] text-accent md:text-[32px]">
                    ~72%
                  </p>
                  <p className="mt-[4px] text-[11px] text-muted md:text-[12px]">
                    top-quartile lenders on same book
                  </p>
                </div>
              </div>
              <Body className="mt-[8px] text-[11px] text-muted-soft md:text-[12px]">
                Observed spread — not a pledged lift. Routing targets lender–borrower fit; credit,
                product, and policy remain.
              </Body>
            </BentoCard>

            {/* Reconciliation */}
            <BentoCard
              label="Reconciliation"
              title="Outstanding commission → collected"
              className="md:col-span-3"
            >
              <p className="mt-[10px] text-[22px] font-medium tracking-[-0.03em] text-accent md:text-[26px]">
                ~₹25.1 Cr
                <span className="ml-[8px] text-[11px] font-normal tracking-normal text-muted md:text-[12px]">
                  chaseable · ₹22 Cr already paid out
                </span>
              </p>
              <Body className="mt-[6px] text-[11px] md:text-[12px]">
                Six-key match on LAN + MIS; exceptions get owners and deadlines. Backfill LANs
                unlocks the ₹76.1 Cr dark bucket.
              </Body>
            </BentoCard>

            {/* Partner analytics */}
            <BentoCard
              label="Partner analytics"
              title="Support where it compounds"
              className="md:col-span-3"
            >
              <Body className="mt-[8px] text-[11px] md:text-[12px]">
                Score approval, doc quality, margin, duplicates — concentrate coaching (e.g. RAM
                MUMBAI ~32% of IDC). Surface loss-making patterns early as safeguards.
              </Body>
            </BentoCard>

            {/* Predictive prompts */}
            <BentoCard
              label="Predictive prompts"
              title="Reactive → pre-emptive"
              className="md:col-span-2"
            >
              <Body className="mt-[8px] text-[11px] md:text-[12px]">
                Approval probability, aging / write-off risk, recommended next action — team
                stays in control.
              </Body>
            </BentoCard>

            {/* Credit Graph */}
            <BentoCard
              label="Credit Graph"
              title="Data compounds into decisioning"
              className="md:col-span-2"
            >
              <Body className="mt-[8px] text-[11px] md:text-[12px]">
                121 lenders · 83 products · 205k rows. Every case teaches likely lender, speed,
                pricing before submission.
              </Body>
            </BentoCard>

            {/* Strategic position */}
            <BentoCard
              label="Strategic position"
              title="Distributor → decisioning partner"
              className="md:col-span-2"
            >
              <Body className="mt-[8px] text-[11px] md:text-[12px]">
                Negotiate from evidence — opens co-lending, first-loss, embedded-finance rails.
              </Body>
            </BentoCard>

            {/* CRM / WhatsApp / Agents */}
            <BentoCard
              label="CRM · WhatsApp · Agents"
              title="Cycle time down, follow-through up"
              className="md:col-span-3"
            >
              <Body className="mt-[8px] text-[11px] md:text-[12px]">
                One system of record; Click-to-WhatsApp intake and nudges; agentic workflows
                qualify, chase docs, escalate — humans approve.
              </Body>
            </BentoCard>

            {/* Customer website */}
            <BentoCard
              label="Customer website"
              title="Attract, qualify, bring back"
              className="md:col-span-3"
            >
              <Body className="mt-[8px] text-[11px] md:text-[12px]">
                CIBIL check, EMI, eligibility tools feed CRM. Meta Pixel + CAPI: revisit →
                audience → team alert → follow-up.
              </Body>
            </BentoCard>
          </div>

          {/* Growth outreach — vertical column beside the bento */}
          <BentoCard
            label="Growth & outreach"
            title="Channels beyond a brochure site"
            className="md:h-full"
          >
            <div className="mt-[16px] flex flex-col gap-[28px] md:gap-[32px]">
              {[
                {
                  title: "Meta Pixel + CAPI",
                  body: "Retarget site and tool visitors with server-side conversion signal.",
                },
                {
                  title: "Click-to-WhatsApp",
                  body: "Low-friction India-native leads landing straight in CRM.",
                },
                {
                  title: "Google Ads + remarketing",
                  body: "High-intent search plus return-traffic remarketing.",
                },
                {
                  title: "SEO lead magnets",
                  body: "Calculator and score pages that rank and feed organic pipeline.",
                },
                {
                  title: "CRM lookalikes",
                  body: "Closed and qualified lists seed lookalike audiences.",
                },
                {
                  title: "Partner referrals",
                  body: "Systematic share-links that extend partner outreach.",
                },
              ].map((channel) => (
                <div key={channel.title}>
                  <p className="text-[12px] font-medium tracking-[-0.01em] md:text-[13px]">
                    {channel.title}
                  </p>
                  <Body className="mt-[3px] text-[11px] md:text-[12px]">{channel.body}</Body>
                </div>
              ))}
            </div>
          </BentoCard>
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
