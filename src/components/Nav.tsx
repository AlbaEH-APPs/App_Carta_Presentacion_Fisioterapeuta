import { useState } from 'react';
import { content } from '../data/content';
import { CloseIcon, MenuIcon } from './Icons';
import './Nav.css';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

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
          <ul>
            {content.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
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
