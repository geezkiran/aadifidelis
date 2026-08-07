"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is AutoBiz?",
    a: "AutoBiz is an AI-powered platform that helps companies automate operations, unify customer workflows, and scale growth systems without adding linear headcount.",
  },
  {
    q: "What services does AutoBiz provide?",
    a: "We deliver analytics agents, content systems, SEO engines, lifecycle automation, and custom AI workflows tailored to your operating model.",
  },
  {
    q: "How can AI improve my business?",
    a: "AI reduces manual coordination, accelerates decisions, and surfaces opportunities earlier — so teams spend more time executing and less time hunting for information.",
  },
  {
    q: "Is AutoBiz suitable for small businesses?",
    a: "Yes. We start with high-ROI automations and expand into a full operating layer as your volume and complexity grow.",
  },
  {
    q: "How do I get started with AutoBiz?",
    a: "Book a free consultation. We map your current workflows, identify quick wins, and propose a phased rollout with clear ownership and outcomes.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      data-slide
      className="flex h-dvh w-full shrink-0 snap-start snap-always flex-col justify-center overflow-hidden bg-white"
    >
      <div className="slide-content site-container grid grid-cols-1 gap-[28px] md:grid-cols-[0.9fr_1.1fr] md:gap-[80px]">
        <div>
          <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-[#0b0b0b] md:text-[44px]">
            Frequently Asked Question
          </h2>
          <p className="mt-[16px] max-w-[360px] text-[15px] font-medium leading-[1.55] text-[#6b6b6b] md:text-[16px]">
            Everything you need to know about how AutoBiz works, what we deliver, and how
            teams usually get started.
          </p>
        </div>

        <div className="flex max-h-[52dvh] flex-col overflow-y-auto border-t border-[rgba(0,0,0,0.08)] md:max-h-none md:overflow-visible">
          {FAQS.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q} className="border-b border-[rgba(0,0,0,0.08)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-[16px] py-[16px] text-left md:py-[22px]"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="text-[15px] font-medium tracking-[-0.01em] text-[#0b0b0b] md:text-[18px]">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center text-[22px] text-[#0b0b0b] transition-transform ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-[16px] pr-[40px] text-[14px] font-medium leading-[1.55] text-[#6b6b6b] md:pb-[22px] md:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
