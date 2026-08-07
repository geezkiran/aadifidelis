import Image from "next/image";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="home"
      data-slide
      className="hero-glow relative flex h-dvh w-full shrink-0 snap-start snap-always flex-col overflow-hidden"
    >
      <div className="slide-content site-container flex flex-1 flex-col justify-center pb-[48px] pt-[88px] md:pb-[64px] md:pt-[96px]">
        <div className="mb-[20px] flex items-center justify-center gap-[16px] md:mb-[28px] md:gap-[20px]">
          <Image
            src="/images/aadifidelis-logo.png"
            alt="Aadifidelis Solutions Pvt. Ltd."
            width={793}
            height={217}
            className="h-auto w-[180px] mix-blend-lighten md:w-[260px]"
            priority
          />
          <Logo />
        </div>

        <div className="grid grid-cols-1 items-end gap-[24px] md:grid-cols-[1.15fr_0.85fr] md:gap-[48px]">
          <h1 className="max-w-[640px] text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-[64px]">
            Automate &amp; manage your business with ease
          </h1>
          <p className="max-w-[360px] text-[15px] font-medium leading-[1.55] text-white/85 md:justify-self-end md:pb-[8px] md:text-[16px]">
            AutoBiz AI solutions simplify complex processes, helping you scale faster and
            smarter. From intelligent automation to predictive insights, we empower teams
            to focus on growth while technology handles the rest.
          </p>
        </div>
      </div>
    </section>
  );
}
