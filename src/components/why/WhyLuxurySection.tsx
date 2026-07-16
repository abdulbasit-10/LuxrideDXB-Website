import { useState } from 'react';
import whyImage from '@/assets/why.png';
import turquoiseInterior from '@/assets/luxury-interior-turquoise.png';
import turquoiseDashboardInterior from '@/assets/luxury-interior-turquoise-dashboard.jpg';
import suvCargo from '@/assets/why-suv-cargo.jpg';
import suvRearSeats from '@/assets/why-suv-rear-seats.jpg';
import suvPanoramicSeats from '@/assets/why-suv-panoramic-seats.jpg';
import suvStarlightCabin from '@/assets/why-suv-starlight-cabin.jpeg';
import suvTurquoiseCargo from '@/assets/why-suv-turquoise-cargo.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const galleryImages = [
  { src: whyImage, alt: 'Luxury vehicle interior with illuminated cabin' },
  {
    src: turquoiseInterior,
    alt: 'Turquoise leather captain seats in a luxury cabin',
  },
  {
    src: turquoiseDashboardInterior,
    alt: 'Turquoise leather luxury SUV interior overlooking Downtown Dubai',
  },
  { src: suvCargo, alt: 'Spacious luxury SUV cargo compartment' },
  { src: suvRearSeats, alt: 'Black leather rear seats in a luxury SUV' },
  {
    src: suvPanoramicSeats,
    alt: 'Luxury SUV rear cabin with panoramic roof',
  },
  {
    src: suvStarlightCabin,
    alt: 'Premium SUV cabin with starlight roof overlooking Dubai',
  },
  {
    src: suvTurquoiseCargo,
    alt: 'Luxury SUV cargo area with turquoise leather seats',
  },
];

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
  const [activeImage, setActiveImage] = useState(0);

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % galleryImages.length);
  };

  return (
    <section
      id="about"
      className="h-auto w-full bg-[#171414] px-[20px] pt-[38px] pb-[38px] md:px-[32px] md:pt-[44px] md:pb-[44px] lg:px-[56px] lg:pt-[48px] lg:pb-[42px]"
      aria-label="Why LuxRideDXB"
    >
      <div className="mx-auto grid h-full max-w-[1120px] grid-cols-1 items-start gap-[34px] lg:grid-cols-[minmax(0,520px)_minmax(0,420px)] lg:justify-between lg:gap-[64px]">
        <div className="max-w-[520px]">
          <p className="mb-[18px] font-body text-[12px] leading-none font-medium tracking-[0.26em] text-[#ef4e3a] uppercase">
            WHY LUXRIDEDXB
          </p>

          <h2 className="mb-[32px] font-serif text-[31px] leading-[1.05] font-bold tracking-[0] text-white md:text-[36px] lg:text-[42px]">
            The Standard Others
            <span className="block text-[#ef4e3a] italic">Aspire To</span>
          </h2>

          <div>
            {features.map((feature) => (
              <div
                key={feature.number}
                className="mb-[24px] grid grid-cols-[44px_1fr] gap-[16px] lg:grid-cols-[54px_1fr]"
              >
                <span className="font-serif text-[26px] leading-none font-bold text-[rgba(239,78,58,0.22)]">
                  {feature.number}
                </span>
                <div>
                  <h3 className="mb-[7px] font-serif text-[18px] leading-none font-bold tracking-[0] text-white">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.45] font-normal tracking-[0] text-[#9f9a9a]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[320px] w-full max-w-[420px] overflow-hidden md:h-[400px] lg:h-[430px]">
          <img
            key={galleryImages[activeImage].src}
            src={galleryImages[activeImage].src}
            alt={galleryImages[activeImage].alt}
            className={`h-full w-full object-cover object-center ${
              activeImage === 0 ? 'scale-[1.12]' : ''
            }`}
          />
          <button
            type="button"
            aria-label="Previous image"
            onClick={showPreviousImage}
            className="absolute top-1/2 left-[12px] z-10 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-[#ef4e3a] hover:bg-[#ef4e3a]/85"
          >
            <ChevronLeft aria-hidden="true" className="h-[20px] w-[20px]" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={showNextImage}
            className="absolute top-1/2 right-[12px] z-10 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-[#ef4e3a] hover:bg-[#ef4e3a]/85"
          >
            <ChevronRight aria-hidden="true" className="h-[20px] w-[20px]" />
          </button>
          <div className="absolute right-0 bottom-[82px] left-0 z-10 flex justify-center gap-[7px]">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show image ${index + 1}`}
                aria-current={index === activeImage ? 'true' : undefined}
                onClick={() => setActiveImage(index)}
                className={`h-[7px] rounded-full transition-all duration-300 ${
                  index === activeImage
                    ? 'w-[24px] bg-[#ef4e3a]'
                    : 'w-[7px] bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
          <div className="absolute right-[20px] bottom-[18px] left-[20px] flex min-h-[52px] items-center justify-center bg-[#171414] px-[16px] py-[9px] md:right-[36px] md:left-[36px]">
            <p className="text-center font-serif text-[18px] leading-[1.1] font-bold text-[#ef4e3a] italic lg:text-[20px]">
              "First Class, on Every Road."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
