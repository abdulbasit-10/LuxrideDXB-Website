import { useEffect, useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        (currentIndex + 1) % testimonials.length,
      );
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full bg-[#171414] px-[24px] py-[56px] md:px-[32px]"
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

      <div
        className="mx-auto mt-[34px] max-w-[1080px] overflow-hidden md:overflow-visible"
        aria-live="polite"
      >
        <div
          className="flex translate-x-[var(--testimonial-offset)] transition-transform duration-500 ease-out motion-reduce:transition-none md:grid md:translate-x-0 md:grid-cols-2 md:gap-[16px] xl:grid-cols-3"
          style={
            {
              '--testimonial-offset': `-${activeIndex * 100}%`,
            } as React.CSSProperties
          }
        >
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={testimonial.name}
                aria-current={isActive ? 'true' : undefined}
                className={`flex min-h-[270px] w-full shrink-0 flex-col border p-[24px] transition-all duration-500 md:min-h-[250px] md:min-w-0 md:shrink md:hover:-translate-y-1 md:hover:border-[#e75041] ${
                  isActive
                    ? 'border-[#e75041] bg-[#1d1716] shadow-[0_18px_38px_rgba(231,80,65,0.18)] md:-translate-y-1'
                    : 'border-white/[0.08] bg-[#151313] shadow-[0_18px_28px_rgba(0,0,0,0.18)] md:opacity-75'
                }`}
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
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
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
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-[22px] flex max-w-[1080px] items-center justify-center md:mt-[28px]">
        <div className="flex items-center gap-[8px]" aria-label="Choose testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={`h-[7px] rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e75041] ${
                index === activeIndex
                  ? 'w-[24px] bg-[#e75041]'
                  : 'w-[7px] bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
