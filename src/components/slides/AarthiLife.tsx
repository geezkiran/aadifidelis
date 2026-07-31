import Image from "next/image";
import { Slide, SlideLead, TextBlock } from "@/components/shared";

export function TitleSlide() {
  return (
    <Slide id="title" variant="gradient">
      <SlideLead className="w-full items-center text-center">
        <div className="flex w-full items-center gap-3 sm:gap-6">
          <div className="flex flex-1 justify-end">
            <Image
              src="/images/aarthilife-logo.png"
              alt="AarthiLife"
              width={447}
              height={97}
              className="h-auto w-[9.5rem] max-w-full sm:w-[20rem]"
              priority
            />
          </div>
          <span className="h-9 w-px shrink-0 bg-foreground/15 sm:h-12" aria-hidden />
          <div className="flex flex-1 justify-start">
            <Image
              src="/images/framer-badge.png"
              alt="TwoSpoon"
              width={285}
              height={96}
              className="h-auto w-[6.5rem] max-w-full invert sm:w-[13rem]"
            />
          </div>
        </div>
        <TextBlock size="md" className="mt-6 text-sm leading-tight sm:mt-10 sm:text-xl md:text-[1.375rem]">
          <span className="text-muted">
            {" "}
            Turning Aarthi’s diagnostic network into a recurring
          </span>
          <span className="text-foreground">
            <br /> consumer-health business
          </span>

        </TextBlock>
      </SlideLead>
    </Slide>
  );
}
