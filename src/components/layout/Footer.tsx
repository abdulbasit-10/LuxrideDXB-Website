import type { IconType } from 'react-icons';
import { FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Logo } from '@/components/common/Logo';
import {
  contactDetails,
  footerLegalLinks,
  footerServiceLinks,
  siteConfig,
  socialLinks,
} from '@/data/siteConfig';

const socialIcons: Record<string, IconType> = {
  youtube: FaYoutube,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
};

const contactIcons: Record<string, IconType> = {
  phone: FiPhone,
  email: FiMail,
  location: FiMapPin,
};

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-gray">
      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
        <div className="lg:mr-6">
          <Logo size="sm" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-brand-gray/40 text-brand-gray transition-colors duration-200 hover:border-brand-red hover:text-brand-red"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:ml-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-white">
            Services
          </h3>
          <ul className="mt-6 space-y-4">
            {footerServiceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-brand-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-white">
            Contact
          </h3>
          <ul className="mt-6 space-y-4">
            {contactDetails.map((detail) => {
              const Icon = contactIcons[detail.icon];
              return (
                <li key={detail.label}>
                  <a
                    href={detail.href}
                    className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-brand-red"
                  >
                    <Icon className="shrink-0 text-brand-red" size={18} />
                    {detail.value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="border-t border-brand-black-soft">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="underline decoration-brand-gray/40 underline-offset-4 transition-colors duration-200 hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
