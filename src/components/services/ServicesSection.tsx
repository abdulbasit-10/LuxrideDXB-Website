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
    description: 'Full flexibility book your chauffeur by the hour across Dubai.',
    icon: Clock3,
  },
  {
    title: 'Private Luxury',
    description:
      'The ultimate bespoke journey curated, confidential, and flawless.',
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
      className="mx-auto flex w-full max-w-[1440px] justify-center bg-[#171515] px-[18px] pt-[46px] pb-[30px] lg:px-[24px]"
      aria-label="Our services"
    >
      <div className="w-full max-w-[1080px]">
        <div className="text-center">
          <h2 className="font-serif text-[34px] leading-[1.08] font-bold tracking-[0] text-white sm:text-[42px] lg:text-[42px]">
            A Service for{' '}
            <span className="text-[#e54b2b] italic">Every Journey</span>
          </h2>
          <p className="mx-auto mt-[18px] max-w-[620px] font-body text-[14px] leading-[1.45] font-medium tracking-[0] text-[#b8b2b1] sm:text-[15px]">
            From airport runs to week-long roadshows every service is
            delivered
            <br className="hidden sm:block" />
            with the same uncompromising standard.
          </p>
        </div>

        <div className="mt-[38px] grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex min-h-[178px] flex-col rounded-[6px] border border-white/[0.08] bg-[#1b1919] px-[16px] py-[16px] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:border-[#e54b2b]"
              >
                <div className="mb-[16px] flex items-center justify-between">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[4px] border border-[#e54b2b]/20 bg-[#2b1d1b]">
                    <Icon
                      aria-hidden="true"
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#E24E37]"
                    />
                  </div>
                </div>

                <h3 className="font-serif text-[17px] leading-[1.12] font-bold tracking-[0] text-white">
                  {service.title}
                </h3>

                <p className="mt-[10px] max-w-[220px] font-body text-[13.5px] leading-[1.42] font-normal tracking-[0] text-[#aaa3a2]">
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
