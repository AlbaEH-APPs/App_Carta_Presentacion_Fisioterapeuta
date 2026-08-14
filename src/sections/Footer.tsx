import { content } from '../data/content';
import './Footer.css';

export function Footer() {
  const { profile } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">
          {profile.firstName} {profile.lastName} · {profile.role}
        </p>
        <p className="footer__copyright">© {year} — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
