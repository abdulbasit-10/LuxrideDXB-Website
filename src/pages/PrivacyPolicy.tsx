import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from '@/components/common/Container';

interface PolicySection {
  heading: string;
  intro?: string;
  bullets?: string[];
  paragraph?: string;
}

const lastUpdated = 'August 2025';

const sections: PolicySection[] = [
  {
    heading: '1. Information We Collect',
    intro: 'When you use our services or visit our website, we may collect:',
    bullets: [
      'Your name, email address, and phone number',
      'Pickup and drop-off details for your booking',
      'Payment information (securely processed via trusted gateways)',
      'Ride preferences (e.g., GMC booking near me, best limousine service, luxury SUV, stretch limo)',
      'Browsing behavior on our website to enhance your experience',
    ],
  },
  {
    heading: '2. How We Use Your Information',
    intro:
      'Your data helps us deliver a smooth, personalized, luxury and comfortable ride experience. We use it to:',
    bullets: [
      'Confirm and manage your luxury ride booking in Dubai',
      'Customize your chauffeur experience according to your preferences',
      'Share promotions, updates, and service notifications relevant to your needs',
      'Improve our website and ensure a premium, user-friendly booking process',
    ],
  },
  {
    heading: '3. Data Sharing',
    intro:
      'We value your privacy. We never sell or rent your personal data. Your information may only be shared with:',
    bullets: [
      'Licensed partners and professional chauffeurs (RTA-approved) who help us deliver our services',
      'Legal authorities, when required by law',
    ],
  },
  {
    heading: '4. Cookies & Tracking',
    intro: 'Our website uses cookies to:',
    bullets: [
      'Understand visitor behavior',
      'Optimize site performance for users searching for limousine service in Dubai, luxury pick and drop, or book luxury ride options',
      'Deliver a faster, smoother booking experience',
    ],
  },
  {
    heading: '5. Data Security',
    paragraph:
      'We use advanced encryption, secure payment gateways, and strict access control to protect your information during and after booking.',
  },
  {
    heading: '6. Your Choices',
    intro: 'You have full control over your personal data:',
    bullets: [
      'Opt out of promotional emails anytime',
      'Request access to or deletion of your information',
      'Disable cookies in your browser settings',
    ],
  },
  {
    heading: '7. Policy Updates',
    paragraph:
      'We may update this Privacy Policy to reflect changes in our services or legal requirements. Updates will be posted here with the latest date.',
  },
];

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-black text-brand-gray">
      <Container className="pt-12 pb-16 text-center">
        <div className="text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-brand-red/80"
          >
            <FiArrowLeft />
            Back
          </Link>
        </div>

        <h1 
          style={{
            width: '414px',
            height: '85px',
            fontSize: '64px',
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
          }}
          className="mt-6 font-serif font-bold text-brand-white mx-auto"
        >
          Privacy Policy
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-brand-gray">
          Privacy Policy explains how we collect, use, and protect your
          information when you book or enquire about our luxury rides in
          Dubai, best chauffeur service in Dubai, or any of our premium pick
          and drop services.
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
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-brand-red">
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
              For questions about our privacy practices or to make a request,
              please contact us:
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:luxridedxb@gmail.com"
                className="text-brand-white hover:text-brand-red"
              >
                luxridedxb@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a
                href="tel:+971523695478"
                className="text-brand-white hover:text-brand-red"
              >
                +971 52 369 5478
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
