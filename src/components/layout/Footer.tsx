import type { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/common/Logo';
import {
  contactDetails,
  footerLegalLinks,
  footerServiceLinks,
  siteConfig,
  socialLinks,
} from '@/data/siteConfig';

const socialIcons: Record<string, IconType> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
};

const contactIcons: Record<string, IconType> = {
  phone: FiPhone,
  email: FiMail,
  location: FiMapPin,
};

export function Footer() {
  return (
    <footer className="w-full bg-brand-black text-brand-gray">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[34px] px-[22px] py-[42px] md:grid-cols-[1.3fr_0.8fr_1fr] md:px-[32px] lg:gap-[54px] lg:py-[52px] lg:pr-[32px] lg:pl-[8px]">
        <div className="w-full max-w-[390px]">
          <div className="relative h-[42px] w-[150px] overflow-visible lg:h-[58px] lg:w-[190px]">
            <Logo
              size="footer"
              className="absolute top-0 left-0 !h-[42px] !w-[150px] lg:!h-[72px] lg:!w-[190px]"
            />
          </div>

          <div className="mt-[24px] w-full">
            <p className="max-w-[340px] text-[14px] leading-[1.55] tracking-[0] text-[#aaa3a1]">
              {siteConfig.description}
            </p>
            <div className="mt-[22px] flex gap-[12px]">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-[3px] border border-brand-gray-light/70 text-brand-gray transition-colors duration-200 hover:border-[#e75041] hover:text-[#e75041]"
                  >
                    <Icon className="h-[17px] w-[17px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-[15px] font-semibold uppercase leading-none tracking-[0.12em] text-brand-white">
            Services
          </h3>
          <ul className="mt-[18px] space-y-[12px]">
            {footerServiceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[14px] leading-none tracking-[0] transition-colors duration-200 hover:text-[#e75041]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h3 className="font-display text-[15px] font-semibold uppercase leading-none tracking-[0.12em] text-brand-white">
            Contact
          </h3>
          <ul className="mt-[18px] space-y-[13px]">
            {contactDetails.map((detail) => {
              const Icon = contactIcons[detail.icon];
              return (
                <li key={detail.label}>
                  <a
                    href={detail.href}
                    className="flex min-w-0 items-center gap-[10px] text-[14px] leading-none tracking-[0] transition-colors duration-200 hover:text-[#e75041]"
                  >
                    <Icon className="shrink-0 text-[#e75041]" size={16} />
                    <span className="min-w-0 truncate">{detail.value}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-4 px-[22px] py-[18px] text-[12px] leading-none md:grid-cols-[1.3fr_0.8fr_1fr] md:px-[32px] lg:gap-[54px] lg:pr-[32px] lg:pl-[8px]">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="hidden md:block" />
          <div className="flex gap-[18px]">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="underline decoration-brand-gray/70 underline-offset-4 transition-colors duration-200 hover:text-[#e75041]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
