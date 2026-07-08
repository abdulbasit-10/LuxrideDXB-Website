import { useState, type MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Logo } from '@/components/common/Logo';
import { mainNavLinks } from '@/data/siteConfig';
import { scrollToId } from '@/lib/scroll';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    <header className="sticky top-0 z-50 bg-brand-black">
      <Container className="relative flex h-20 items-center justify-between lg:h-24">
        <div className="hidden shrink-0 lg:block lg:w-[278px]" aria-hidden="true" />
        <Logo size="hero" />

        <nav className="hidden items-center gap-10 lg:flex">
          {mainNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                activeHash === link.href
                  ? 'text-brand-red'
                  : 'text-brand-white hover:text-brand-red'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          as="a"
          href="#contact"
          onClick={(event: MouseEvent<HTMLAnchorElement>) =>
            handleNavClick(event, '#contact')
          }
          className="hidden lg:inline-flex"
        >
          Book Now
        </Button>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-brand-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </Container>

      {isMenuOpen && (
        <div className="border-t border-brand-black-soft bg-brand-black lg:hidden">
          <Container className="flex flex-col gap-6 py-8">
            {mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`text-sm font-semibold uppercase tracking-wider ${
                  activeHash === link.href
                    ? 'text-brand-red'
                    : 'text-brand-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href="#contact"
              onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                handleNavClick(event, '#contact')
              }
              className="w-full"
            >
              Book Now
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
