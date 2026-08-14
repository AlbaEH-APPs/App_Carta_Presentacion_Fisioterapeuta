import { SectionHeading } from '../components/SectionHeading';
import { content } from '../data/content';
import './About.css';

export function About() {
  const { about } = content;

  return (
    <section id="sobre-mi" className="section" aria-labelledby="sobre-mi-heading">
      <div className="container">
        <SectionHeading id="sobre-mi-heading" eyebrow="Sobre mí" title="Quién soy" />
        <div className="about__grid">
          <div className="about__text reveal">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul
            className="about__values bullet-list reveal"
            aria-label="Valores profesionales"
          >
            {about.values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
