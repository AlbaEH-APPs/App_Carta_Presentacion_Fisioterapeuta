import { Button } from '../components/Button';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { content } from '../data/content';
import './Hero.css';

export function Hero() {
  const { profile } = content;

  return (
    <section id="inicio" className="hero" aria-label="Presentación">
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <p className="hero__role">{profile.role}</p>
          <h1 className="hero__name">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__ctas">
            <Button href="#sobre-mi" variant="primary">
              Conoce mi perfil
            </Button>
            <Button href={profile.cvUrl} variant="secondary" download>
              Descargar CV
            </Button>
          </div>
        </div>
        <div className="hero__media reveal">
          <ProfilePhoto src={profile.photoUrl} alt={profile.photoAlt} />
        </div>
      </div>
    </section>
  );
}
