import { Link } from 'react-router-dom';
import logoSrc from '@/assets/logo.png';
import { siteConfig } from '@/data/siteConfig';

interface LogoProps {
  size?: 'sm' | 'md' | 'header' | 'footer' | 'hero';
  className?: string;
}

const linkSizeStyles: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-12 lg:h-14',
  md: 'h-14 lg:h-16',
  header: 'h-[52px] w-[172px] lg:h-[63px] lg:w-[190px]',
  footer: 'h-[55px] w-[188px] lg:h-[61px] lg:w-[202px]',
  hero: 'h-12 lg:absolute lg:top-[-13px] lg:left-[0px] lg:h-[118px] lg:w-[207px]',
};

const imgSizeStyles: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'w-auto',
  md: 'w-auto',
  header: 'w-full',
  footer: 'w-full',
  hero: 'w-auto lg:w-full',
};

export function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center ${linkSizeStyles[size]} ${className}`}
    >
      <img
        src={logoSrc}
        alt={`${siteConfig.name} — ${siteConfig.tagline}`}
        className={`h-full ${imgSizeStyles[size]} object-contain`}
      />
    </Link>
  );
}
