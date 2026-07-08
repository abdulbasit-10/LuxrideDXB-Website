import { Link } from 'react-router-dom';
import logoSrc from '@/assets/logo.png';
import { siteConfig } from '@/data/siteConfig';

interface LogoProps {
  size?: 'sm' | 'md' | 'hero';
  className?: string;
}

// "hero" reproduces an exact Width/Height/Top/Left placement (270.61 x 154.34,
// offset -33.34/7) from the reference design, applied from lg: up so it bleeds
// above the header bar without disturbing the mobile layout.
const linkSizeStyles: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-12 lg:h-14',
  md: 'h-14 lg:h-16',
  hero: 'h-12 lg:absolute lg:top-[-33.34px] lg:left-[7px] lg:h-[154.34px] lg:w-[270.61px]',
};

const imgSizeStyles: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'w-auto',
  md: 'w-auto',
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
