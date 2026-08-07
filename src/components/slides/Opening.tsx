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
          <AccentStat value="₹36,800 Cr" label="in loan leads originated, FY26" />
          <AccentStat value="9,400+" label="active distribution partners" />
          <AccentStat value="100+" label="lenders on the panel" />
          <AccentStat value="24" label="states of coverage" />
        </div>
        <Body>
          Growth of this pace is rare — and it concentrates value in operational precision.
          The gap between volume and infrastructure isn&apos;t a problem with how the
          business is run; it&apos;s where the next phase of value tends to sit.
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
        <div className="flex flex-wrap items-start gap-[20px] md:gap-[32px]">
          <AccentStat value="15.8%" label="BLS distribution margin, early FY26" />
          <span className="pt-[8px] text-[28px] text-accent md:pt-[12px] md:text-[36px]" aria-hidden>
            →
          </span>
          <AccentStat value="8.7%" label="consolidated margin as volume scaled" />
        </div>
        <Body>
          Distribution is high-revenue, low-margin — and margin compresses as volume grows.
          That&apos;s the economics of the category, not a failing. At this scale, the
          incremental margin is captured in the precision of everything{" "}
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
      value: "~₹76.6L",
      label: "earned commission outstanding — awaiting matching, not lost",
    },
    {
      value: "₹1.2L / ₹13.2L",
      label:
        "received against expected this period; receipts arrive faster than manual matching clears",
    },
    {
      value: "30 cases",
      label: "past SLA, awaiting a next step",
    },
    {
      value: "₹3.5 Cr",
      label: "a single high-value case still awaiting an owner",
    },
  ];

  return (
    <Slide id="value-at-stake">
      <div className="flex flex-col gap-[24px] md:gap-[32px]">
        <SlideTitle>The value at stake, on your own data</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {cells.map((cell, i) => (
            <div
              key={cell.value}
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
          The pattern every high-growth distributor hits at a certain volume — volume
          outpacing manual process, not effort or capability. The value at stake is concrete,
          and it is addressable.
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
              Spreadsheets and shared trackers are excellent at recording what happened.
              It&apos;s what most distributors scale on, and it works — until the volume of
              what needs attention outgrows the ability to find it by hand.
            </Body>
          </div>
          <div>
            <h3 className="text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">
              A system that surfaces
            </h3>
            <Body className="mt-[12px]">
              What a business of your volume benefits from next is infrastructure that also
              acts: it surfaces the stalled case, the commission that&apos;s due, the receipt
              that hasn&apos;t matched — and routes each to an owner with a clock. It lets
              judgment reach every case, not only the ones that happen to surface.
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
