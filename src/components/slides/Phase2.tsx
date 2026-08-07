import { Body, Slide, SlideTitle } from "@/components/shared";

function BentoCard({
  label,
  title,
  children,
  className = "",
}: {
  label: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-[10px] bg-surface p-[16px] md:p-[18px] ${className}`}
    >
      <div>
        <p className="text-[12px] tracking-[0.04em] text-accent uppercase md:text-[12px]">
          {label}
        </p>
        {title ? (
          <h3 className="mt-[6px] text-[17px] font-medium tracking-[-0.02em] md:text-[17px]">
            {title}
          </h3>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function Phase2ProposalsSlide() {
  return (
    <Slide
      id="phase-2-proposals"
      contentClassName="justify-start md:justify-center !py-[36px] md:!py-[44px]"
    >
      <div className="flex w-full min-h-0 flex-col">
        <div className="grid min-h-0 grid-cols-1 gap-[12px] md:grid-cols-[1fr_250px] md:gap-[14px] lg:grid-cols-[1fr_270px]">
          <div className="grid grid-cols-1 gap-[12px] md:grid-cols-6 md:gap-[14px]">
            <BentoCard
              label="Document AI"
              title="Turnaround from a day to minutes"
              className="md:col-span-2"
            >
              <Body className="mt-[10px] text-[14px] md:text-[13px]">
                Bank stmt, ITR, GST, salary slips — extract, cross-check, flag mismatches as
                tasks.
              </Body>
            </BentoCard>

            <BentoCard
              label="Lender routing"
              title="Largest single margin opportunity"
              className="md:col-span-4"
            >
              <div className="mt-[12px] flex flex-wrap items-end gap-[22px] md:gap-[28px]">
                <div>
                  <p className="text-[30px] font-medium tracking-[-0.03em] text-accent md:text-[34px]">
                    54%
                  </p>
                  <p className="mt-[4px] text-[13px] text-muted md:text-[13px]">
                    book-level approval
                  </p>
                </div>
                <span className="pb-[18px] text-[20px] text-accent" aria-hidden>
                  →
                </span>
                <div>
                  <p className="text-[30px] font-medium tracking-[-0.03em] text-accent md:text-[34px]">
                    ~72%
                  </p>
                  <p className="mt-[4px] text-[13px] text-muted md:text-[13px]">
                    top-quartile lenders on same book
                  </p>
                </div>
              </div>
              <Body className="mt-[6px] text-[13px] text-muted-soft md:text-[12px]">
                Observed spread — not a pledged lift. Routing targets fit; credit, product, and
                policy remain.
              </Body>
            </BentoCard>

            <BentoCard
              label="Reconciliation"
              title="Outstanding commission → collected"
              className="md:col-span-3"
            >
              <p className="mt-[10px] text-[26px] font-medium tracking-[-0.03em] text-accent md:text-[28px]">
                ~₹25.1 Cr
                <span className="ml-[8px] text-[13px] font-normal tracking-normal text-muted md:text-[13px]">
                  chaseable · ₹22 Cr already paid out
                </span>
              </p>
              <Body className="mt-[6px] text-[14px] md:text-[13px]">
                Six-key LAN + MIS match; exceptions get owners. Backfill unlocks the ₹76.1 Cr
                dark bucket.
              </Body>
            </BentoCard>

            <BentoCard
              label="Partner analytics"
              title="Support where it compounds"
              className="md:col-span-3"
            >
              <Body className="mt-[10px] text-[14px] md:text-[13px]">
                Score approval, docs, margin, duplicates — concentrate coaching where returns
                are highest; surface loss patterns early.
              </Body>
            </BentoCard>

            <BentoCard
              label="Predictive prompts"
              title="Reactive → pre-emptive"
              className="md:col-span-2"
            >
              <Body className="mt-[10px] text-[14px] md:text-[13px]">
                Approval probability, aging risk, recommended next action — team stays in
                control.
              </Body>
            </BentoCard>

            <BentoCard
              label="Credit Graph"
              title="Data compounds into decisioning"
              className="md:col-span-2"
            >
              <Body className="mt-[10px] text-[14px] md:text-[13px]">
                121 lenders · 83 products · 205k rows — likely lender, speed, pricing before
                submission.
              </Body>
            </BentoCard>

            <BentoCard
              label="Strategic position"
              title="Distributor → decisioning partner"
              className="md:col-span-2"
            >
              <Body className="mt-[10px] text-[14px] md:text-[13px]">
                Negotiate from evidence — opens co-lending, first-loss, embedded-finance rails.
              </Body>
            </BentoCard>

            <BentoCard
              label="CRM · WhatsApp · Agents"
              title="Cycle time down, follow-through up"
              className="md:col-span-3"
            >
              <Body className="mt-[10px] text-[14px] md:text-[13px]">
                One system of record; WhatsApp intake and nudges; agents qualify and chase —
                humans approve.
              </Body>
            </BentoCard>

            <BentoCard
              label="Revamp website"
              title="Attract, qualify, bring back"
              className="md:col-span-3"
            >
              <Body className="mt-[10px] text-[14px] md:text-[13px]">
                CIBIL, EMI, eligibility tools feed CRM. Pixel + CAPI: revisit → alert →
                follow-up.
              </Body>
            </BentoCard>
          </div>

          <div className="flex h-full min-h-0 flex-col gap-[12px] md:gap-[14px]">
            <BentoCard
              label="Customer facing application"
              title="Borrowers apply and take loans directly"
              className="shrink-0"
            >
              <Body className="mt-[10px] text-[14px] md:text-[13px]">
                A new app we build for end customers — check eligibility, submit documents,
                and complete a loan online. Cases flow into Control Tower with the same
                routing and reconciliation stack.
              </Body>
            </BentoCard>

            <BentoCard label="Growth & outreach" className="min-h-0 flex-1">
              <div className="mt-[14px] flex flex-col gap-[16px] md:gap-[18px]">
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
                    <p className="text-[14px] font-medium tracking-[-0.01em] md:text-[14px]">
                      {channel.title}
                    </p>
                    <Body className="mt-[3px] text-[13px] md:text-[12px]">{channel.body}</Body>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
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
        <Body className="text-[16px] md:text-[16px]">
          Higher approval through routing, faster turnaround through automation, recovery of
          the ~₹25.1 Cr chaseable book and the ₹22 Cr cash already out, better-directed
          partner support — plus a Credit Graph that learns from every case. CRM, WhatsApp,
          and agentic workflows tighten follow-through; a revamped website with tools and
          Pixel retargeting brings warmer traffic back into the funnel. All on the business
          you already run.
        </Body>
      </div>
    </Slide>
  );
}
