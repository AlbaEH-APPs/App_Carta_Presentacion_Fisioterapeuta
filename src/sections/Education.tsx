import { Card } from '../components/Card';
import { EntityLogo } from '../components/EntityLogo';
import { SectionHeading } from '../components/SectionHeading';
import { content } from '../data/content';
import './Education.css';

export function Education() {
  return (
    <section id="formacion" className="section section--alt" aria-labelledby="formacion-heading">
      <div className="container">
        <SectionHeading
          id="formacion-heading"
          title="Formación"
        />
        <ol className="education-list">
          {content.education.map((item) => (
            <li key={item.id} className="reveal">
              <Card className="education-card">
                <EntityLogo
                  src={item.logoUrl}
                  alt={item.logoAlt}
                  name={item.institution}
                  className="education-card__logo"
                />
                <h3 className="education-card__title">{item.title}</h3>
                <p className="education-card__institution">{item.institution}</p>
                <p className="education-card__date">{item.date}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
