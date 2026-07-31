import Image from "next/image";
import { HeadingBlock, Slide, SlideLead } from "@/components/shared";

export function AppIntroSlide2() {
  return (
    <Slide id="app-intro-2" variant="gradient">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row-reverse md:gap-20">
        <SlideLead className="max-w-xl text-center md:text-left">
          <HeadingBlock as="h2" size="xl" className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            The whole family, booked together.
          </HeadingBlock>
        </SlideLead>
        <div className="relative aspect-[9/19] w-40 shrink-0 sm:w-48 md:w-72">
          <Image
            src="/images/catalogue.png"
            alt="AarthiLife app"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </Slide>
  );
}
