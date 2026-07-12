import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from '@/components/common/Container';

interface TermsSection {
  heading: string;
  intro?: string;
  bullets?: string[];
  paragraph?: string;
}

const lastUpdated = 'August 2025';

const sections: TermsSection[] = [
  {
    heading: '1. Booking & Confirmation',
    bullets: [
      'All bookings must be made through our official website, WhatsApp, email, or customer support number.',
      'Reservations for premium vehicles, such as our best limousine service or luxury and comfortable rides, are subject to availability.',
      'Once confirmed, you will receive a booking email with pickup details, vehicle type, and total charges.',
    ],
  },
  {
    heading: '2. Payment Terms',
    bullets: [
      'Full payment must be made AFTER the completion of your service.',
      'We accept secure online payments via card or bank transfer.',
      'Rates are clearly stated for each service (e.g., luxury pick and drop, corporate limousine bookings) and may vary based on vehicle type, duration, and location.',
    ],
  },
  {
    heading: '3. Cancellation & Refund Policy',
    bullets: [
      'Cancellations made more than 24 hours before your scheduled pickup will receive a full refund.',
      'Cancellations within 24 hours of pickup will incur a 50% charge.',
      'No-shows or last-minute cancellations for premium bookings (e.g., wedding limousine hire, VIP event transfers) are non-refundable.',
    ],
  },
  {
    heading: '4. Client Responsibilities',
    bullets: [
      'Clients must provide accurate personal and pickup/drop-off details.',
      'Smoking, illegal activities, or misuse of the vehicle is strictly prohibited.',
      'Any damage to the vehicle caused by the client will be charged accordingly.',
    ],
  },
  {
    heading: '5. Vehicle Use & Conditions',
    bullets: [
      'All our vehicles are maintained to the highest industry standards and inspected before and after every ride.',
      'LuxRideDXB reserves the right to upgrade or replace a vehicle when required, ensuring you always enjoy a luxury and comfortable ride.',
    ],
  },
  {
    heading: '6. Chauffeur Conduct',
    bullets: [
      'All chauffeurs are licensed, highly trained, and RTA-approved.',
      'Clients are expected to treat chauffeurs and staff with respect. Misconduct may result in service termination without refund.',
    ],
  },
  {
    heading: '7. Delays & External Factors',
    bullets: [
      'While we aim for absolute punctuality, LuxRideDXB is not liable for delays due to traffic, road closures, or external events beyond our control.',
      'For VIP events, corporate roadshows, or airport transfers, we recommend booking extra buffer time.',
    ],
  },
  {
    heading: '8. Intellectual Property',
    bullets: [
      'All branding, content, images, and designs on the LuxRideDXB website are protected by copyright.',
      'Unauthorized use or reproduction is strictly prohibited.',
    ],
  },
  {
    heading: '9. Limitation of Liability',
    bullets: [
      'LuxRideDXB is not responsible for any loss or damage to personal belongings.',
      'We are not liable for indirect or consequential damages arising from the use of our services.',
    ],
  },
  {
    heading: '10. Governing Law',
    bullets: [
      'These terms are governed by the laws of the United Arab Emirates.',
      'Any disputes will be resolved under Dubai jurisdiction.',
    ],
  },
];

export function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-black text-brand-gray">
      <Container className="pt-12 pb-16 text-center">
        <div className="text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-[4px] border border-[#e75041] px-[14px] py-[9px] text-sm font-bold text-[#e75041] transition-colors hover:bg-[#e75041] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e75041]"
          >
            <FiArrowLeft />
            Back
          </Link>
        </div>

        <h1
          className="mx-auto mt-8 font-serif text-[38px] leading-none font-bold text-brand-white sm:text-[50px] lg:text-[64px]"
        >
          Terms & Conditions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-brand-gray">
          By accessing our website or booking any of our premium services,
          such as the best chauffeur service in Dubai, luxury rides in Dubai,
          GMC booking near me, or limousine service in Dubai, you agree to
          the following Terms & Conditions.
        </p>
      </Container>

      <div className="border-t border-brand-black-soft">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
          <p className="text-sm text-brand-gray/80">
            Last Updated: {lastUpdated}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="mt-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl font-bold text-brand-white">
                  {section.heading}
                </h2>
                {section.intro && (
                  <p className="mt-4 leading-relaxed">{section.intro}</p>
                )}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#e75041]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {section.paragraph && (
                  <p className="mt-4 leading-relaxed">{section.paragraph}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-1 text-sm text-left">
            <p>
              For questions or clarifications regarding these Terms &
              Conditions, please contact:
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:luxridedxb@gmail.com"
                className="text-brand-white transition-colors hover:text-[#e75041]"
              >
                luxridedxb@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a
                href="tel:+971523695478"
                className="text-brand-white transition-colors hover:text-[#e75041]"
              >
                +971 52 369 5478
              </a>
            </p>
            <p className="pt-2">
              Thank you for choosing LuxRideDXB, where every journey is a
              statement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
