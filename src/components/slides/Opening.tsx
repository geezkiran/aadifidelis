import Image from "next/image";
import { LOGO_SRC } from "@/components/landing/Logo";
import {
  AccentStat,
  Body,
  FlowArrow,
  FlowNode,
  Slide,
  SlideTitle,
} from "@/components/shared";

export function TitleSlide() {
  return (
    <Slide
      id="title"
      contentClassName="items-center text-center"
      header={
        <Image
          src={LOGO_SRC}
          alt="two spoon."
          width={290}
          height={100}
          className="h-auto w-[90px] invert md:w-[106px]"
          priority
        />
      }
    >
      <div className="flex flex-col items-center gap-[28px] md:gap-[36px]">
        <h1>
          <Image
            src="/images/aadifidelis-wordmark.png"
            alt="Aadifidelis"
            width={793}
            height={115}
            className="h-auto w-[260px] md:w-[400px]"
            priority
          />
        </h1>
        <Body className="max-w-[520px] text-[15px] md:text-[17px]">
          From visibility to value — a phased operating platform that turns the scale
          you&apos;ve built into captured margin, and, over time, into strategic optionality.
        </Body>
      </div>
    </Slide>
  );
}

export function ScaleSlide() {
  return (
    <Slide id="scale">
      <div className="flex flex-col gap-[36px] md:gap-[48px]">
        <SlideTitle>
          A business that has scaled faster than most infrastructure can keep pace with
        </SlideTitle>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[28px] md:grid-cols-4 md:gap-x-[32px]">
          <AccentStat value="₹17,721 Cr" label="disbursed across the bank book, Mar'23–Feb'24" />
          <AccentStat value="₹584 Cr" label="payout received from 121 lenders, 83 products" />
          <AccentStat value="₹6,586 Cr" label="loan volume routed through the IDC channel network" />
          <AccentStat value="₹41–54 Cr" label="monthly PO collection — steady, no seasonal collapse" />
        </div>
        <Body className="max-w-[560px] text-[12px] leading-[1.5] text-muted-soft md:text-[12px]">
          Figures from Mar&apos;23–Feb&apos;24 records and IDC extracts —
          204,875 bank-book rows, 53,494 channel rows. Growth of this pace concentrates value
          in operational precision — the gap between volume and infrastructure is where the
          next phase of value tends to sit.
        </Body>
      </div>
    </Slide>
  );
}

export function MarginSlide() {
  return (
    <Slide id="margin">
      <div className="flex flex-col gap-[36px] md:gap-[48px]">
        <SlideTitle>
          In a high-volume, thin-margin model, value concentrates after origination
        </SlideTitle>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[28px] md:grid-cols-4 md:gap-x-[32px]">
          <AccentStat value="3.30%" label="bank payout rate on ₹17,721 Cr disbursed" />
          <AccentStat value="0.21%" label="IDC spread — ₹12.32 Cr kept on ₹6,586 Cr routed" />
          <AccentStat value="−₹4.29 Cr" label="loss on 4,856 loans where giving exceeded receipt" />
          <AccentStat value="~76%" label="of the bank book with TDS/NET untracked" />
        </div>
        <Body>
          Distribution is high-revenue, razor-thin spread — every basis point matters. At
          this scale, the incremental margin is captured in the precision of everything{" "}
          <em className="italic">after</em> origination: how fast cases move, how completely
          commissions are collected, how tightly the money reconciles.
        </Body>
      </div>
    </Slide>
  );
}

export function ValueAtStakeSlide() {
  const cells = [
    {
      value: "₹22 Cr",
      label:
        "already paid to sub-partners on loans the banks haven't settled — a cash hole, not lost margin",
    },
    {
      value: "~₹25.1 Cr",
      label:
        "defensible receivable to chase — ₹22.72 Cr unreceived + ₹2.38 Cr short-received",
    },
    {
      value: "5,796",
      label:
        "claimed loans with LAN and no bank receipt (₹22.72 Cr) — your ledger already flags NOT FOUND, DUMP PENDING, INVOICE PENDING",
    },
    {
      value: "₹76.1 Cr",
      label:
        "unverifiable — 17,912 rows with no LAN to match; a data-hygiene problem before it's a collection problem",
    },
  ];

  return (
    <Slide id="value-at-stake">
      <div className="flex flex-col gap-[24px] md:gap-[32px]">
        <SlideTitle>The value at stake, on your own data</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {cells.map((cell, i) => (
            <div
              key={`${cell.value}-${cell.label.slice(0, 24)}`}
              className={[
                "py-[20px] md:py-[28px]",
                i % 2 === 0 ? "md:pr-[32px]" : "md:pl-[32px] md:border-l md:border-border",
                i < 2 ? "border-b border-border" : "",
              ].join(" ")}
            >
              <p className="text-[28px] font-medium tracking-[-0.03em] text-accent md:text-[36px]">
                {cell.value}
              </p>
              <p className="mt-[10px] max-w-[340px] text-[13px] leading-[1.45] text-muted md:text-[14px]">
                {cell.label}
              </p>
            </div>
          ))}
        </div>
        <Body className="max-w-[720px]">
          That ₹22 Cr cash exposure alone dwarfs the entire ₹12.3 Cr channel margin for the
          period. Most of the unreceived book is recent (Dec&apos;23 ₹4.1 Cr, Nov&apos;23
          ₹3.5 Cr) — still in-pipeline — but the Mar–Aug&apos;23 aged tail of ~₹9 Cr is where
          write-off risk concentrates. Concrete, addressable, on your own ledgers.
        </Body>
      </div>
    </Slide>
  );
}

export function ExceptionsSlide() {
  return (
    <Slide id="exceptions">
      <div className="flex flex-col gap-[36px] md:gap-[48px]">
        <SlideTitle>
          At this scale, you need a system that acts on exceptions — not just one that
          records them
        </SlideTitle>
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 md:gap-[40px]">
          <div className="md:pr-[24px] md:border-r md:border-border">
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              A system of record
            </h3>
            <Body className="mt-[12px]">
              Your books already know the problem — remarks like NOT FOUND (262), DUMP
              PENDING (32), INVOICE PENDING (15). Spreadsheets record what happened. They
              don&apos;t assemble who owns the next step, or how old the open leg is.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              A system that surfaces
            </h3>
            <Body className="mt-[12px]">
              What a business of your volume benefits from next is infrastructure that also
              acts: it surfaces the stalled case, the ₹22 Cr of giving already paid with no
              bank receipt, the short payment, the missing LAN — and routes each to an owner
              with a clock.
            </Body>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function LifecycleSlide() {
  const sales = ["Lead", "Case", "Application", "Approved", "Disbursal"];
  const money = ["Commission receivable", "Reconciled", "Partner payout", "Paid"];

  return (
    <Slide id="lifecycle">
      <div className="flex flex-col gap-[28px] md:gap-[36px]">
        <SlideTitle>The full lifecycle, managed as one continuous object</SlideTitle>

        <div>
          <p className="mb-[12px] text-[11px] uppercase tracking-[0.08em] text-muted-soft">
            Sales half
          </p>
          <div className="flex items-stretch overflow-x-auto pb-[4px]">
            {sales.map((node, i) => (
              <div key={node} className="flex shrink-0 items-center">
                <FlowNode label={node} />
                {i < sales.length - 1 ? <FlowArrow /> : null}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-[12px] text-[11px] uppercase tracking-[0.08em] text-accent">
            Money half
          </p>
          <div className="flex items-stretch overflow-x-auto pb-[4px]">
            {money.map((node, i) => (
              <div key={node} className="flex shrink-0 items-center">
                <FlowNode label={node} accent />
                {i < money.length - 1 ? <FlowArrow accent /> : null}
              </div>
            ))}
          </div>
        </div>

        <Body className="max-w-[760px]">
          Every node carries a <em className="italic">status</em>, a{" "}
          <em className="italic">clock</em>, and an <em className="italic">owner</em> — and
          the money half is tracked with the same rigor as the sales half. Today the
          lifecycle is coordinated across several systems; we bring it into one object.
        </Body>
      </div>
    </Slide>
  );
}
