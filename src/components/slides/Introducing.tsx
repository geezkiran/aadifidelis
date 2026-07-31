import Image from "next/image";
import { HeadingBlock, Slide, TextBlock } from "@/components/shared";

export function CompetitionAlreadySlide() {
  return (
    <Slide
      id="competition-already"
      variant="gradient"
      contentClassName="items-center justify-center"
    >
      <HeadingBlock
        size="xl"
        gradient
        className="flex max-w-4xl flex-col flex-wrap items-center justify-center gap-y-2 text-center"
      >
        <span className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl">Introducing</span>
        <Image
          src="/images/aarthilife-logo.png"
          alt="AarthiLife"
          width={447}
          height={95}
          className="h-12 w-auto sm:h-14 md:h-[69px]"
        />
      </HeadingBlock>
      <TextBlock size="md" className="max-w-3xl text-center text-sm text-muted sm:text-xl md:text-[1.375rem]">
        An affordable preventive-health programme that helps individuals and
        families test regularly, understand their results and track their
        health over time.
      </TextBlock>
    </Slide>
  );
}
