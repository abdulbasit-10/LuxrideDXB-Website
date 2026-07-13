import { useState, type CSSProperties } from 'react';
import {
  Briefcase,
  CalendarCheck,
  Car,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Laptop,
  MessageCircle,
  Phone,
  Sparkles,
  User,
  Users,
  Wifi,
} from 'lucide-react';
import { scrollToId } from '@/lib/scroll';

const fleet = [
  {
    title: 'GAC M8',
    image: '/MPV.png',
    luxury: 'Luxury MPV',
    seats: '6 Seats',
    luggage: 'Laptop Table',
    driver: 'Professional Chauffeur',
    toll: 'Wifi',
    fuel: 'Spa',
  },
  {
    title: 'GMC Yukon XL',
    image: '/SMC-new.png',
    luxury: 'Luxury SUV',
    seats: '7 Seats',
    luggage: 'Luggage',
    driver: 'Certified Chauffeur',
    toll: 'Wifi',
    fuel: 'Fuel',
  },
];

const actions = [
  { label: 'Call Now', icon: Phone, type: 'whatsapp' },
  { label: 'Ask Inquiry', icon: MessageCircle, type: 'whatsapp' },
  { label: 'Book Now', icon: CalendarCheck, type: 'booking' },
] as const;

const whatsappNumber = '971523695478';

function getWhatsAppUrl(vehicleTitle: string, actionLabel: string) {
  const message = `Hi LuxRideDXB, I want to ${actionLabel.toLowerCase()} for ${vehicleTitle}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function FleetSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + fleet.length) % fleet.length,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % fleet.length);
  };

  return (
    <section
      id="fleet"
      // Services already owns the next section's top padding, so Fleet only
      // keeps the remaining handoff space: 16px + Services 56px on mobile,
      // 40px + Services 56px on desktop.
      className="bg-[#171515] px-5 pt-[46px] pb-[16px] sm:px-6 lg:pb-[36px]"
      aria-label="Premium vehicle fleet"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-body text-[12px] leading-none font-bold tracking-[0.25em] text-[#e54b2b] uppercase">
            OUR FLEET
          </p>
          <p className="mx-auto mt-[16px] max-w-[640px] font-body text-[14px] leading-[1.6] font-normal text-[#bdb7b5] sm:text-[15px]">
            Meticulously maintained and presented to the highest standards
            choose the vehicle that suits your journey.
          </p>
          <h2 className="mt-[20px] font-serif text-[34px] leading-[1.08] font-bold text-white sm:text-[44px] lg:text-[52px]">
            Vehicles Worthy of
            <span className="block text-[#e54b2b] italic">Every Occasion</span>
          </h2>
        </div>

        <div className="mx-auto mt-[30px] w-full max-w-[700px] overflow-hidden md:overflow-visible">
          <div
            className="flex translate-x-[var(--fleet-offset)] transition-transform duration-500 ease-out motion-reduce:transition-none md:grid md:translate-x-0 md:grid-cols-2 md:gap-[18px]"
            style={
              {
                '--fleet-offset': `-${activeIndex * 100}%`,
              } as CSSProperties
            }
          >
            {fleet.map((vehicle) => {
            const specs = [
              { label: vehicle.luxury, icon: Car },
              { label: vehicle.seats, icon: Users },
              {
                label: vehicle.luggage,
                icon: vehicle.luggage === 'Laptop Table' ? Laptop : Briefcase,
              },
              { label: vehicle.driver, icon: User },
              { label: vehicle.toll, icon: Wifi },
              {
                label: vehicle.fuel,
                icon: vehicle.fuel === 'Spa' ? Sparkles : Fuel,
              },
            ];

            return (
              <article
                key={vehicle.title}
                className="group flex min-h-[380px] w-full shrink-0 flex-col overflow-hidden rounded-[7px] border border-[rgba(229,75,43,0.24)] bg-[#1f1c1c] shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-[#e54b2b] md:min-w-0 md:shrink"
              >
                <div className="relative aspect-[453/260] overflow-hidden rounded-t-[7px] bg-[#151313]">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.title} luxury chauffeur vehicle`}
                    width="453"
                    height="341"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-[12px] left-[12px] bg-[#e54b2b] px-[8px] py-[5px] font-body text-[8px] leading-none font-bold tracking-[0.12em] text-white uppercase">
                    BEST FOR GROUPS
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-[14px] pt-[14px] pb-[14px] sm:px-[16px]">
                  <h3 className="font-serif text-[22px] leading-none font-bold text-white sm:text-[24px]">
                    {vehicle.title}
                  </h3>

                  <div className="mt-[13px] grid grid-cols-2 gap-x-[9px] gap-y-[9px]">
                    {specs.map(({ label, icon: Icon }) => {

                      return (
                        <div
                          key={label}
                          className="flex min-w-0 items-center gap-[10px]"
                        >
                          <Icon
                            aria-hidden="true"
                            className="h-[13px] w-[13px] shrink-0 text-[#e54b2b]"
                            strokeWidth={1.9}
                          />
                          <span className="min-w-0 font-body text-[11px] leading-[1.2] font-medium text-[#aaa3a1]">
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-[18px] grid grid-cols-3 gap-[5px]">
                    {actions.map(({ label, icon: Icon, type }) =>
                      type === 'booking' ? (
                        <button
                          key={label}
                          type="button"
                          onClick={() => scrollToId('home')}
                          className="group/action flex h-[30px] min-w-0 items-center justify-center gap-[3px] border border-[#e54b2b] bg-transparent px-[4px] font-body text-[9px] leading-none font-bold text-[#e54b2b] transition duration-300 hover:bg-[#e54b2b] hover:text-white"
                        >
                          <Icon
                            aria-hidden="true"
                            className="h-[11px] w-[11px] shrink-0 text-[#e54b2b] transition duration-300 group-hover/action:text-white"
                            strokeWidth={2}
                          />
                          <span className="truncate">{label}</span>
                        </button>
                      ) : (
                        <a
                          key={label}
                          href={getWhatsAppUrl(vehicle.title, label)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/action flex h-[30px] min-w-0 items-center justify-center gap-[3px] border border-[#e54b2b] bg-transparent px-[4px] font-body text-[9px] leading-none font-bold text-[#e54b2b] transition duration-300 hover:bg-[#e54b2b] hover:text-white"
                        >
                          <Icon
                            aria-hidden="true"
                            className="h-[11px] w-[11px] shrink-0 text-[#e54b2b] transition duration-300 group-hover/action:text-white"
                            strokeWidth={2}
                          />
                          <span className="truncate">{label}</span>
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </article>
            );
            })}
          </div>
        </div>

        <div className="mx-auto mt-[18px] flex items-center justify-center gap-[18px] md:hidden">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous vehicle"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e54b2b]/70 text-[#e54b2b] transition active:bg-[#e54b2b] active:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e54b2b]"
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Show next vehicle"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e54b2b]/70 text-[#e54b2b] transition active:bg-[#e54b2b] active:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e54b2b]"
          >
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
