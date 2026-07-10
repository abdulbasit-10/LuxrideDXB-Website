import { FiMail, FiMapPin, FiMessageSquare, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import contactImage from '@/assets/contact.png';

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    label: 'Location',
    value: 'Dubai, UAE',
    href: 'https://www.google.com/maps/search/?api=1&query=Dubai%2C%20UAE',
    icon: FiMapPin,
    external: true,
  },
  {
    label: 'Email',
    value: 'luxridedxb@gmail.com',
    href: 'mailto:luxridedxb@gmail.com',
    icon: FiMail,
  },
  {
    label: 'Phone',
    value: '+971 52 369 5478',
    href: 'tel:+971523695478',
    icon: FiPhone,
  },
  {
    label: 'Whatsapp',
    value: '24/7 Available',
    href: 'https://wa.me/971523695478',
    icon: FiMessageSquare,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 bg-[#121212] px-[32px] py-[80px] lg:scroll-mt-[108px]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-y-[40px] md:grid-cols-[calc(68%-20px)_calc(32%-20px)] md:items-stretch md:gap-x-[40px] md:gap-y-0 lg:grid-cols-[calc(68%-20px)_calc(32%-20px)]">
        <div className="w-full">
          <p className="mb-[16px] font-body text-[13px] leading-none tracking-[4px] text-[#FF2A2A] uppercase">
            GET IN TOUCH
          </p>

          <h2
            id="contact-heading"
            className="mb-[28px] font-serif text-[38px] leading-[1.05] font-bold text-white sm:text-[46px] md:text-[50px] lg:text-[62px]"
          >
            <span className="block whitespace-nowrap">
              We&apos;re Available{' '}
              <span className="text-[#FF2A2A] italic">Around</span>
            </span>
            <span className="block text-[#FF2A2A] italic">the Clock</span>
          </h2>

          <p className="mb-[34px] max-w-[390px] font-body text-[18px] leading-[30px] text-[#BDBDBD]">
            Whether you need an airport transfer at 3am or a last-minute VIP
            escort for a special occasion, our team is always ready to serve
            you. Reach us by phone, WhatsApp, or email.
          </p>

          <a
            href="https://wa.me/971523695478"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-[46px] flex h-[52px] w-full items-center justify-center gap-[8px] rounded-[4px] bg-[#25D366] font-body text-[17px] font-medium text-white transition-colors duration-300 hover:bg-[#21bf5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:w-[320px]"
          >
            <FaWhatsapp aria-hidden="true" className="h-[18px] w-[18px]" />
            Chat On Whatsapp
          </a>

          <address className="flex h-[560px] w-full max-w-[390px] flex-col gap-[36px] not-italic">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex w-full items-center gap-[30px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2A2A]"
                >
                  <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center border border-[#FF2A2A] text-[#FF2A2A]">
                    <Icon aria-hidden className="h-[20px] w-[20px]" />
                  </span>
                  <span className="block">
                    <span className="mb-[8px] block font-body text-[13px] leading-none text-[#777777] uppercase">
                      {item.label}
                    </span>
                    <span className="block font-body text-[21px] leading-none font-medium text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </address>
        </div>

        <div className="aspect-[718/860] w-full overflow-hidden md:mt-[44px] md:mr-[8px] md:h-[calc(100%-44px)] md:aspect-auto">
          <img
            src={contactImage}
            alt="Dubai Museum of the Future at night"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
