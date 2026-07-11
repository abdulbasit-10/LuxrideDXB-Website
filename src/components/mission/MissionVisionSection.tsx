const missionVision = [
  {
    eyebrow: 'OUR MISSION',
    heading: (
      <>
        Redefining Premium
        <br />
        Mobility in Dubai
      </>
    ),
    description:
      'To redefine luxury travel in the UAE by delivering seamless, memorable rides that blend comfort, privacy, and elite service. Every ride is tailored, every route is optimized, and every passenger is a VIP.',
  },
  {
    eyebrow: 'OUR VISION',
    heading: (
      <>
        The UAE&apos;s Most Trusted
        <br />
        Luxury Chauffeur Brand
      </>
    ),
    description:
      'Our ambition is to become the most respected name in luxury ground transport across the United Arab Emirates trusted by heads of state, Fortune 500 executives, and discerning individuals who accept nothing but the finest.',
  },
];

export function MissionVisionSection() {
  return (
    <section
      id="mission"
      className="w-full bg-[#171414]"
      aria-label="Mission and vision"
    >
      <div className="mx-auto box-border flex h-auto max-w-[1120px] flex-col gap-[16px] px-[20px] py-[40px] md:gap-[18px] md:px-[32px] md:py-[48px] lg:flex-row lg:gap-[18px] lg:py-[40px]">
        {missionVision.map((item) => (
          <article
            key={item.eyebrow}
            className="relative box-border h-auto w-full overflow-hidden rounded-[3px] border border-white/[0.08] bg-[#191616] px-[22px] py-[22px] pl-[28px] shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition duration-300 hover:border-[#e75041] lg:min-h-[230px] lg:w-1/2 lg:px-[26px] lg:py-[24px] lg:pl-[32px]"
          >
            <span className="absolute top-0 left-0 h-full w-[3px] bg-[#ef4e3a]" />

            <p className="mb-[18px] font-body text-[11px] leading-none font-semibold tracking-[0.28em] text-[#ef4e3a] uppercase">
              {item.eyebrow}
            </p>

            <h2 className="mb-[18px] font-serif text-[24px] leading-[1.18] font-bold tracking-[0] text-[#f4f4f4] md:text-[27px] lg:text-[28px]">
              {item.heading}
            </h2>

            <p className="max-w-[520px] font-body text-[14px] leading-[1.55] font-normal tracking-[0] text-[#a8a1a0]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
