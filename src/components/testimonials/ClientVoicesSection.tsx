import { Star } from 'lucide-react';

import quoteIcon from '@/assets/ri_double-quotes-r.svg';

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
    <section
      id="testimonials"
      className="mx-auto w-full max-w-[1440px] bg-[#171414] px-[24px] py-[56px] md:px-[32px]"
    >
      <div className="mx-auto max-w-[760px] text-center">
        <p className="font-body text-[13px] leading-none font-medium tracking-[0.28em] text-[#ef4e3a]">
          Client Voices
        </p>
        <h2 className="mt-[16px] font-serif text-[34px] leading-[1.05] font-bold tracking-[0] text-[#f4f4f4] md:text-[42px]">
          Trusted by Dubai&apos;s{' '}
          <span className="text-[#ef4e3a] italic">Finest</span>
        </h2>
        <p className="mx-auto mt-[20px] max-w-[620px] font-body text-[15px] leading-[1.45] font-normal text-[#bdb7b5]">
          Hear from the executives, dignitaries, and event professionals who
          rely on us every day.
        </p>
      </div>

      <div className="mx-auto mt-[34px] grid max-w-[1080px] grid-cols-1 gap-[16px] md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="flex h-auto min-h-[250px] flex-col border border-white/[0.08] bg-[#151313] p-[24px] shadow-[0_18px_28px_rgba(0,0,0,0.18)] transition duration-300 hover:border-[#e75041]"
          >
            <div className="mb-7">
              <img
                src={quoteIcon}
                alt=""
                aria-hidden="true"
                className="h-[32px] w-[32px]"
              />

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

            <p className="font-body text-[14.5px] leading-[1.35] font-normal text-[#e0dddd] italic">
              {testimonial.quote}
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

