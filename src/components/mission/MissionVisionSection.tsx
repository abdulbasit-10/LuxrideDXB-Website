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
      'Our ambition is to become the most respected name in luxury ground transport across the United Arab Emirates — trusted by heads of state, Fortune 500 executives, and discerning individuals who accept nothing but the finest.',
  },
];

export function MissionVisionSection() {
  return (
    <section className="w-full bg-[#171414]" aria-label="Mission and vision">
      <div className="mx-auto box-border flex h-auto max-w-[1379px] flex-col gap-[20px] px-[20px] py-[48px] md:gap-[24px] md:px-[32px] md:py-[64px] lg:flex-row lg:gap-[23px] lg:py-[48px]">
        {missionVision.map((item) => (
          <article
            key={item.eyebrow}
            className="relative box-border h-auto w-full rounded-[4px] border border-white/10 bg-transparent px-[24px] py-[24px] lg:h-[294px] lg:w-1/2 lg:px-[32px] lg:py-[28px]"
          >
            <span className="absolute top-0 left-0 h-full w-[4px] rounded-[4px_0_0_4px] bg-[#ef4e3a]" />

            <p className="mb-[28px] font-body text-[13px] leading-none font-medium tracking-[0.28em] text-[#ef4e3a] uppercase">
              {item.eyebrow}
            </p>

            <h2 className="mb-[36px] font-serif text-[27px] leading-[1.28] font-bold tracking-[0] text-[#f4f4f4] md:text-[30px] lg:text-[34px]">
              {item.heading}
            </h2>

            <p className="max-w-[560px] font-body text-[16px] leading-[1.2] font-normal tracking-[0] text-[#9f9a9a] lg:text-[17px]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
