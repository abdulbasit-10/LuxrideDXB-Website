import {
  Briefcase,
  CalendarCheck,
  Car,
  Fuel,
  MessageCircle,
  Phone,
  Ticket,
  User,
  Users,
} from 'lucide-react';

const fleet = [
  {
    title: 'MPV',
    image: '/MPV.png',
    luxury: 'Luxury MPV',
    seats: '6 Seats',
    luggage: '5 Luggage',
    driver: 'Professional Driver',
    toll: 'Toll Gates',
    fuel: 'Fuel',
  },
  {
    title: 'SMC',
    image: '/SMC.png',
    luxury: 'Luxury SMC',
    seats: '5 Seats',
    luggage: '5 Luggage',
    driver: 'Professional Driver',
    toll: 'Toll Gates',
    fuel: 'Fuel',
  },
];

const specIcons = [Car, Users, Briefcase, User, Ticket, Fuel];

const actions = [
  { label: 'Call Now', icon: Phone },
  { label: 'Ask Inquiry', icon: MessageCircle },
  { label: 'Book Now', icon: CalendarCheck },
];

export function FleetSection() {
  return (
    <section
      id="fleet"
      // Services already owns the next section's top padding, so Fleet only
      // keeps the remaining handoff space: 16px + Services 56px on mobile,
      // 40px + Services 56px on desktop.
      className="bg-[#171515] px-5 pt-[52px] pb-[16px] sm:px-6 lg:pb-[40px]"
      aria-label="Premium vehicle fleet"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-body text-[12px] leading-none font-bold tracking-[0.25em] text-[#e54b2b] uppercase">
            OUR FLEET
          </p>
          <p className="mx-auto mt-[18px] max-w-[706px] font-body text-[15px] leading-[1.62] font-normal text-[#bdb7b5] sm:text-[16px]">
            Meticulously maintained and presented to the highest standards -
            choose the vehicle that suits your journey.
          </p>
          <h2 className="mt-[24px] font-serif text-[38px] leading-[1.08] font-bold text-white sm:text-[50px] lg:text-[62px]">
            Vehicles Worthy of
            <span className="block text-[#e54b2b] italic">Every Occasion</span>
          </h2>
        </div>

        <div className="mx-auto mt-[58px] flex h-[644px] w-[941px] flex-row gap-[35px]">
          {fleet.map((vehicle) => {
            const specs = [
              vehicle.luxury,
              vehicle.seats,
              vehicle.luggage,
              vehicle.driver,
              vehicle.toll,
              vehicle.fuel,
            ];

            return (
              <article
                key={vehicle.title}
                className="group flex h-full basis-[453px] flex-col overflow-hidden rounded-[10px] border border-[rgba(229,75,43,0.28)] bg-[#1f1c1c] shadow-[0_18px_46px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(229,75,43,0.52)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.34)]"
              >
                <div className="relative aspect-[453/341] overflow-hidden rounded-t-[10px] bg-[#151313]">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.title} luxury chauffeur vehicle`}
                    width="453"
                    height="341"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-[20px] left-[20px] bg-[#e54b2b] px-[14px] py-[8px] font-body text-[11px] leading-none font-bold tracking-[0.12em] text-white uppercase">
                    BEST FOR GROUPS
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-[22px] pt-[26px] pb-[24px] sm:px-[30px] sm:pt-[30px] sm:pb-[28px]">
                  <h3 className="font-serif text-[32px] leading-none font-bold text-white sm:text-[36px]">
                    {vehicle.title}
                  </h3>

                  <div className="mt-[24px] grid grid-cols-2 gap-x-[18px] gap-y-[17px]">
                    {specs.map((spec, index) => {
                      const Icon = specIcons[index];

                      return (
                        <div
                          key={spec}
                          className="flex min-w-0 items-center gap-[10px]"
                        >
                          <Icon
                            aria-hidden="true"
                            className="h-[18px] w-[18px] shrink-0 text-[#e54b2b]"
                            strokeWidth={1.9}
                          />
                          <span className="min-w-0 font-body text-[14px] leading-[1.25] font-medium text-[#aaa3a1] sm:text-[15px]">
                            {spec}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-auto grid grid-cols-3 gap-[10px] pt-[30px]">
                    {actions.map(({ label, icon: Icon }) => (
                      <button
                        key={label}
                        type="button"
                        className="group/action flex h-[46px] min-w-0 items-center justify-center gap-[7px] border border-[#e54b2b] bg-transparent px-[8px] font-body text-[12px] leading-none font-bold text-[#e54b2b] transition duration-300 hover:bg-[#e54b2b] hover:text-white sm:text-[13px]"
                      >
                        <Icon
                          aria-hidden="true"
                          className="h-[15px] w-[15px] shrink-0 text-[#e54b2b] transition duration-300 group-hover/action:text-white"
                          strokeWidth={2}
                        />
                        <span className="truncate">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
