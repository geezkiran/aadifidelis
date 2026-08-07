import Image from "next/image";
import { LOGO_SRC } from "./Logo";

export function Footer() {
  return (
    <section
      id="contact"
      data-slide
      className="footer-glow flex h-dvh w-full shrink-0 snap-start snap-always flex-col justify-center overflow-hidden text-white"
    >
      <div className="slide-content site-container">
        <div className="border-b border-white/10 pb-[32px] md:pb-[48px]">
          <h2 className="max-w-[320px] text-[28px] font-medium leading-[1.1] tracking-[-0.025em] md:text-[40px]">
            Let&apos;s Build The Future Together
          </h2>
          <a
            href="#home"
            className="mt-[20px] inline-flex h-[48px] items-center justify-center rounded-full bg-white px-[28px] text-[15px] font-medium text-[#0b0b0b] transition-opacity hover:opacity-90"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex flex-col gap-[20px] pt-[32px] md:flex-row md:items-end md:justify-between md:pt-[48px]">
          <div className="flex items-center">
            <Image
              src={LOGO_SRC}
              alt="two spoon."
              width={285}
              height={96}
              className="h-auto w-[160px] md:w-[240px]"
            />
          </div>

          <div className="flex gap-[20px] text-[13px] font-medium text-white/55 md:pb-[8px]">
            <a href="#home" className="hover:text-white/80">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-white/80">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
