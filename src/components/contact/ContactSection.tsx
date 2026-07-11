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
      className="w-full scroll-mt-20 bg-[#121212] px-[22px] py-[48px] md:px-[32px] lg:scroll-mt-[84px]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-start gap-y-[32px] md:grid-cols-[calc(62%-16px)_calc(38%-16px)] md:items-stretch md:gap-x-[32px] md:gap-y-0">
        <div className="w-full max-w-[560px] md:pt-[8px]">
          <p className="mb-[14px] font-body text-[12px] leading-none tracking-[3.5px] text-[#e75041] uppercase">
            GET IN TOUCH
          </p>

          <h2
            id="contact-heading"
            className="mb-[18px] max-w-[520px] font-serif text-[31px] leading-[1.05] font-bold text-white sm:text-[38px] md:text-[42px] lg:text-[44px]"
          >
            <span className="block">
              We&apos;re Available{' '}
              <span className="text-[#e75041] italic">Around</span>
            </span>
            <span className="block text-[#e75041] italic">the Clock</span>
          </h2>

          <p className="mb-[24px] max-w-[420px] font-body text-[14px] leading-[1.6] text-[#BDBDBD]">
            Whether you need an airport transfer at 3am or a last-minute VIP
            escort for a special occasion, our team is always ready to serve
            you. Reach us by phone, WhatsApp, or email.
          </p>

          <a
            href="https://wa.me/971523695478"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-[30px] flex h-[43px] w-full items-center justify-center gap-[8px] rounded-[4px] bg-[#25D366] font-body text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#21bf5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:w-[248px]"
          >
            <FaWhatsapp aria-hidden="true" className="h-[16px] w-[16px]" />
            Chat On Whatsapp
          </a>

          <address className="flex w-full max-w-[360px] flex-col gap-[12px] not-italic">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex min-h-[58px] w-full items-center gap-[13px] rounded-[4px] border border-white/[0.07] bg-[#171515] px-[12px] transition duration-200 hover:border-[#e75041]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e75041]"
                >
                  <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[3px] border border-[#e75041]/70 text-[#e75041]">
                    <Icon aria-hidden className="h-[14px] w-[14px]" />
                  </span>
                  <span className="block min-w-0">
                    <span className="mb-[5px] block font-body text-[10px] leading-none tracking-[0.08em] text-[#777777] uppercase">
                      {item.label}
                    </span>
                    <span className="block truncate font-body text-[14px] leading-none font-semibold text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </address>
        </div>

        <div className="aspect-[718/720] w-full overflow-hidden md:mt-[28px] md:mr-[4px] md:h-[calc(100%-28px)] md:aspect-auto">
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
