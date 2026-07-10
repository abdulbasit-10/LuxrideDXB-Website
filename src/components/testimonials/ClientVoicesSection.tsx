import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'LuxRideDXB has redefined what I expect from a chauffeur service. The discretion, punctuality, and attention to detail are exceptional.',
    name: 'H.E. Khalid Al Rashidi',
    role: 'Senior Partner, Al Tamimi & Company',
  },
  {
    quote:
      "We've used LuxRideDXB for all our VIP hotel arrivals. The fleet is immaculate and the chauffeurs are true professionals.",
    name: 'Sarah Mitchell',
    role: 'Head of Events, IHG Hotels & Resorts',
  },
  {
    quote:
      'From the moment I landed to my final meeting, everything was flawlessly coordinated. A premium service that justifies every dirham.',
    name: 'James Thornton',
    role: 'Managing Director, BlackRock Dubai',
  },
];

export function ClientVoicesSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] bg-[#171414] px-[32px] py-[72px]">
      <div className="mx-auto max-w-[760px] text-center">
        <p className="font-body text-[13px] leading-none font-medium tracking-[0.28em] text-[#ef4e3a]">
          Client Voices
        </p>
        <h2 className="mt-[19px] font-serif text-[40px] leading-[1.05] font-bold tracking-[0] text-[#f4f4f4] md:text-[48px]">
          Trusted by Dubai&apos;s{' '}
          <span className="text-[#ef4e3a] italic">Finest</span>
        </h2>
        <p className="mx-auto mt-[25px] max-w-[650px] font-body text-[17px] leading-[1.25] font-normal text-[#bdb7b5]">
          Hear from the executives, dignitaries, and event professionals who
          rely on us every day.
        </p>
      </div>

      <div className="mx-auto mt-[38px] grid max-w-[1180px] grid-cols-1 gap-[16px] md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="flex h-auto min-h-[284px] flex-col border border-white/[0.08] bg-[#151313] p-[28px] shadow-[0_22px_35px_rgba(0,0,0,0.22)]"
          >
            <div className="mb-7">
              <div className="text-[46px] leading-none font-bold text-[#ef4e3a]">
                &rdquo;
              </div>

              <div
                aria-label="5 star rating"
                className="mt-[14px] flex items-center gap-[4px] text-[#ef4e3a]"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
            </div>

            <p className="font-body text-[15.5px] leading-[1.2] font-normal text-[#e0dddd] italic">
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="mt-auto pt-[28px]">
              <h3 className="font-serif text-[16px] leading-none font-bold text-white">
                {testimonial.name}
              </h3>
              <p className="mt-[12px] font-body text-[13.5px] leading-none font-medium text-[#9f9a9a]">
                {testimonial.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

