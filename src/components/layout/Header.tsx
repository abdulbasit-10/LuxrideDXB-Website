import { useState, type MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo } from '@/components/common/Logo';
import { mainNavLinks } from '@/data/siteConfig';
import { scrollToId } from '@/lib/scroll';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navItemWidths: Record<string, string> = {
    '#home': 'w-[101px]',
    '#fleet': 'w-[157px]',
    '#services': 'w-[157px]',
    '#about': 'w-[112px]',
    '#contact': 'w-[195px]',
  };

  const activeHash = location.pathname === '/' ? location.hash || '#home' : '';

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setIsMenuOpen(false);
    const id = href.replace('#', '');

    if (location.pathname !== '/') {
      navigate('/');
      requestAnimationFrame(() => scrollToId(id));
      return;
    }
    scrollToId(id);
  }

  return (
    <header className="sticky top-0 z-50 w-full overflow-visible bg-black">
      <div className="relative flex h-20 items-center justify-between px-8 md:px-12 lg:h-[108px] lg:px-0">
        <Logo size="hero" />

        <nav className="hidden items-center gap-[23px] lg:absolute lg:left-[591px] lg:top-[31px] lg:flex">
          {mainNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className={`flex h-[65px] ${navItemWidths[link.href]} items-start justify-center p-[10px] font-figma-nav text-[26px] font-medium uppercase leading-normal tracking-normal transition-colors duration-200 ${
                activeHash === link.href
                  ? 'text-[#e75041]'
                  : 'text-brand-gray-light hover:text-brand-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-brand-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-brand-black-soft bg-black lg:hidden">
          <div className="flex flex-col gap-6 px-8 py-8 md:px-12">
            {mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`font-display text-xl font-normal uppercase tracking-[0.04em] ${
                  activeHash === link.href
                    ? 'text-brand-gray-light'
                    : 'text-brand-gray-light'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
