import { useEffect, useState, type MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo } from '@/components/common/Logo';
import { mainNavLinks } from '@/data/siteConfig';
import { scrollToId } from '@/lib/scroll';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHash('');
      return;
    }

    const sectionTargets = [
      { id: 'home', activeHash: '#home' },
      { id: 'fleet', activeHash: '#fleet' },
      { id: 'services', activeHash: '#services' },
      { id: 'about', activeHash: '#about' },
      { id: 'mission', activeHash: '#about' },
      { id: 'testimonials', activeHash: '#about' },
      { id: 'contact', activeHash: '#contact' },
    ];

    function updateActiveSection() {
      const scrollTarget = 140;
      let currentHash = '#home';

      sectionTargets.forEach((target) => {
        const section = document.getElementById(target.id);

        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();

        if (rect.top <= scrollTarget) {
          currentHash = target.activeHash;
        }
      });

      setActiveHash(currentHash);
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [location.pathname]);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setIsMenuOpen(false);
    setActiveHash(href);
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
      <div className="relative mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-8 md:px-12 lg:h-[84px] lg:pr-[32px] lg:pl-[8px]">
        <Logo size="hero" />

        <nav className="hidden items-center gap-[28px] lg:absolute lg:right-[18px] lg:top-[24px] lg:flex">
          {mainNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className={`flex h-[42px] items-start justify-center px-[2px] py-[6px] font-figma-nav text-[20px] font-medium uppercase leading-normal tracking-normal transition-colors duration-200 ${
                activeHash === link.href
                  ? 'text-[#e75041]'
                  : 'text-brand-gray-light hover:text-[#e75041]'
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
                    ? 'text-[#e75041]'
                    : 'text-brand-gray-light hover:text-[#e75041]'
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
