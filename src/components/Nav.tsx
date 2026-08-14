import { useEffect, useMemo, useState } from 'react';
import { content } from '../data/content';
import { CloseIcon, MenuIcon } from './Icons';
import './Nav.css';

function useActiveSection(hrefs: string[]) {
  const [activeHref, setActiveHref] = useState(hrefs[0] ?? '');

  useEffect(() => {
    const sections = hrefs
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);

    if (!('IntersectionObserver' in window) || sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [hrefs]);

  return activeHref;
}

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navHrefs = useMemo(() => content.navLinks.map((link) => link.href), []);
  const activeHref = useActiveSection(navHrefs);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((open) => !open);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a href="#inicio" className="nav__brand" onClick={close}>
          {content.profile.firstName} {content.profile.lastName}
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={toggle}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
          <span className="visually-hidden">
            {isOpen ? 'Cerrar menú' : 'Abrir menú'}
          </span>
        </button>

        <nav
          id="nav-menu"
          className={`nav__menu ${isOpen ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul className="nav__list">
            {content.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={link.href === activeHref ? 'is-active' : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
