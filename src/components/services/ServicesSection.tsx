import {
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  Heart,
  Map,
  PlaneTakeoff,
  Shield,
  Star,
} from 'lucide-react';

const services = [
  {
    title: 'Airport Transfers',
    description:
      'Seamless arrivals and departures from DXB, AUH, SHJ and DWC tracked in real time.',
    icon: PlaneTakeoff,
  },
  {
    title: 'VIP Events',
    description:
      'Red-carpet arrivals for galas, award nights, private receptions & other vip events.',
    icon: Star,
  },
  {
    title: 'Corporate Transport',
    description:
      'Discreet, reliable transport for executives, delegations, and roadshows.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Weddings',
    description:
      'Unforgettable wedding car arrangements tailored to your perfect day.',
    icon: Heart,
  },
  {
    title: 'Hourly Chauffeur',
    description: 'Full flexibility — book your chauffeur by the hour across Dubai.',
    icon: Clock3,
  },
  {
    title: 'Private Luxury',
    description:
      'The ultimate bespoke journey — curated, confidential, and flawless.',
    icon: Shield,
  },
  {
    title: 'Roadshows',
    description:
      'Multi-stop investor and media roadshows coordinated to the minute.',
    icon: Map,
  },
  {
    title: 'Full-Day Hire',
    description:
      'Dedicated chauffeur from sunrise to midnight for business or leisure.',
    icon: CalendarDays,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto flex w-full max-w-[1440px] justify-center bg-[#171515] px-[16px] pt-[56px] pb-[24px] lg:px-0"
      aria-label="Our services"
    >
      <div className="w-full max-w-[1192px]">
        <div className="text-center">
          <h2 className="font-serif text-[38px] leading-[1.08] font-bold tracking-[0] text-white sm:text-[50px] lg:text-[46px]">
            A Service for{' '}
            <span className="text-[#e54b2b] italic">Every Journey</span>
          </h2>
          <p className="mx-auto mt-[24px] max-w-[650px] font-body text-[15px] leading-[1.28] font-medium tracking-[0] text-[#b8b2b1] sm:text-[17px]">
            From airport runs to week-long roadshows — every service is
            delivered
            <br className="hidden sm:block" />
            with the same uncompromising standard.
          </p>
        </div>

        <div className="mt-[58px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex h-[226px] flex-col rounded-[3px] border border-[#2d2b2b] bg-[#1b1919] px-[17px] pt-[14px] pb-[18px] transition duration-300 hover:-translate-y-1 hover:border-[#e54b2b]"
              >
                <div className="h-[77px] shrink-0">
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[3px] bg-[#3a211f]">
                    <Icon
                      aria-hidden="true"
                      size={28}
                      strokeWidth={1.8}
                      className="text-[#E24E37]"
                    />
                  </div>
                </div>

                <div className="h-[42px] shrink-0">
                  <h3 className="font-serif text-[19px] leading-[1.08] font-bold tracking-[0] text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-[13px] max-w-[205px] flex-1 font-body text-[15.5px] leading-[1.19] font-medium tracking-[0] text-[#a9a3a2]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
