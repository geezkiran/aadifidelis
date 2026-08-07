const INDUSTRIES = [
  "Logistics & Transportation",
  "Food & Beverage",
  "Agriculture & Plantation",
  "Design & Creative",
  "Information Technology",
];

export function Industries() {
  return (
    <section
      id="blog"
      data-slide
      className="industries-bg flex h-dvh w-full shrink-0 snap-start snap-always flex-col justify-center overflow-hidden"
    >
      <div className="slide-content site-container text-center">
        <h2 className="text-[28px] font-medium tracking-[-0.02em] text-white md:text-[36px]">
          What Industries We Served
        </h2>

        <ul className="mt-[32px] flex flex-col items-center gap-[14px] md:mt-[48px] md:gap-[20px]">
          {INDUSTRIES.map((item) => (
            <li
              key={item}
              className="text-[24px] font-medium leading-[1.15] tracking-[-0.025em] text-white md:text-[48px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
