import whyImage from '@/assets/why.png';

const features = [
  {
    number: '01',
    title: 'Premium Fleet',
    description:
      'From luxury SUVs to stretch limousines, every ride is immaculate',
  },
  {
    number: '02',
    title: 'Professional Chauffeurs',
    description:
      'Trained, RTA-approved, and committed to service excellence.',
  },
  {
    number: '03',
    title: 'Tailored Experiences',
    description:
      "We adapt to your needs, whether it's a corporate transfer or a surprise anniversary.",
  },
  {
    number: '04',
    title: '24/7 Availability',
    description: 'Book your ride anytime, anywhere in Dubai.',
  },
];

export function WhyLuxurySection() {
  return (
    <section
      id="about"
      className="mx-auto h-auto w-full max-w-[1440px] bg-[#171414] px-[20px] pt-[48px] pb-[48px] md:px-[32px] md:pt-[56px] md:pb-[56px] lg:px-[72px] lg:pt-[72px] lg:pb-[56px]"
      aria-label="Why LuxRideDXB"
    >
      <div className="grid h-full grid-cols-1 items-start gap-[48px] lg:grid-cols-[45%_55%] lg:gap-[64px]">
        <div>
          <p className="mb-[24px] font-body text-[13px] leading-none font-medium tracking-[0.28em] text-[#ef4e3a] uppercase">
            WHY LUXRIDEDXB
          </p>

          <h2 className="mb-[56px] font-serif text-[38px] leading-[1.05] font-bold tracking-[0] text-white md:text-[44px] lg:text-[56px]">
            The Standard Others
            <span className="block text-[#ef4e3a] italic">Aspire To</span>
          </h2>

          <div>
            {features.map((feature) => (
              <div
                key={feature.number}
                className="mb-[38px] grid grid-cols-[54px_1fr] gap-[24px] lg:grid-cols-[70px_1fr]"
              >
                <span className="font-serif text-[34px] leading-none font-bold text-[rgba(239,78,58,0.22)]">
                  {feature.number}
                </span>
                <div>
                  <h3 className="mb-[10px] font-serif text-[21px] leading-none font-bold tracking-[0] text-white">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[17px] leading-[1.45] font-normal tracking-[0] text-[#9f9a9a]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden md:h-[520px] lg:h-[640px]">
          <img
            src={whyImage}
            alt="Luxury vehicle interior with illuminated cabin"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-[24px] bottom-[32px] left-[24px] flex h-[78px] items-center justify-center bg-[#171414] md:right-[52px] md:left-[52px]">
            <p className="font-serif text-[22px] leading-none font-bold text-[#ef4e3a] italic lg:text-[30px]">
              "First Class, on Every Road."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
