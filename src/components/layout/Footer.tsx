import type { IconType } from 'react-icons';
import { FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
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
    <footer className="relative h-[334px] w-full overflow-hidden bg-brand-black text-brand-gray lg:h-[490px]">
      <div className="grid grid-cols-1 gap-12 px-[27px] pt-[37px] lg:block lg:h-full lg:p-0">
        <div className="w-full max-w-[439px] lg:absolute lg:left-[7px] lg:top-[52px] lg:w-[439px]">
          <div className="relative h-[28px] w-[138px] overflow-visible lg:h-[110px] lg:w-[258.62px]">
            <Logo
              size="footer"
              className="absolute top-0 left-0 !h-[44px] !w-[138px] lg:!h-[147.5px] lg:!w-[270.62px]"
            />
          </div>

          <div className="mt-[27px] w-full max-w-[258px] pb-[34px] lg:mt-[39px] lg:ml-[40px] lg:max-w-none lg:pb-0">
            <p className="max-w-full text-[16px] leading-[1.18] tracking-[-0.01em] sm:max-w-[288px] sm:text-[18px] lg:max-w-[360px] lg:text-[24px] lg:leading-[1.12]">
              {siteConfig.description}
            </p>
            <div className="mt-[23px] flex gap-[18px] lg:mt-[31px] lg:gap-[27px]">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-[34px] w-[34px] items-center justify-center rounded-[3px] border border-brand-gray-light text-brand-gray transition-colors duration-200 hover:border-brand-red hover:text-brand-red lg:h-[51px] lg:w-[51px] lg:rounded-[4px]"
                  >
                    <Icon className="h-[17px] w-[17px] lg:h-[26px] lg:w-[26px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden lg:absolute lg:left-[49.17%] lg:top-[77px] lg:block">
          <h3 className="font-display text-[22px] font-semibold uppercase leading-none tracking-[0.09em] text-brand-white">
            Services
          </h3>
          <ul className="mt-[37px] space-y-[31px]">
            {footerServiceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[24px] leading-none tracking-[-0.01em] transition-colors duration-200 hover:text-brand-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:absolute lg:left-[72.01%] lg:top-[77px] lg:block lg:w-[min(353px,25vw)]">
          <h3 className="font-display text-[22px] font-semibold uppercase leading-none tracking-[0.09em] text-brand-white">
            Contact
          </h3>
          <ul className="mt-[36px] space-y-[30px]">
            {contactDetails.map((detail) => {
              const Icon = contactIcons[detail.icon];
              return (
                <li key={detail.label}>
                  <a
                    href={detail.href}
                    className="flex min-w-0 items-center gap-[17px] text-[clamp(20px,1.67vw,24px)] leading-none tracking-[-0.01em] transition-colors duration-200 hover:text-brand-red"
                  >
                    <Icon className="shrink-0 text-brand-red" size={26} />
                    <span className="min-w-0 truncate">{detail.value}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0">
        <div className="flex flex-col items-start justify-between gap-6 px-[22px] pb-[26px] text-[13px] leading-none sm:flex-row sm:items-end lg:px-[30px] lg:pb-[35px] lg:text-[20px]">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="hidden gap-[45px] lg:flex lg:pr-[50px]">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="underline decoration-brand-gray/80 underline-offset-4 transition-colors duration-200 hover:text-brand-red"
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
