import { Card } from '../components/Card';
import { EntityLogo } from '../components/EntityLogo';
import { SectionHeading } from '../components/SectionHeading';
import { content } from '../data/content';
import './Experience.css';

export function Experience() {
  return (
    <section id="experiencia" className="section" aria-labelledby="experiencia-heading">
      <div className="container">
        <SectionHeading
          id="experiencia-heading"
          title="Experiencia"
        />
        <ol className="experience-list">
          {content.experience.map((item) => (
            <li key={item.id} className="reveal">
              <Card className="experience-card">
                <div className="experience-card__header">
                  <h3 className="experience-card__center">{item.center}</h3>
                  <span className="experience-card__area">{item.area}</span>
                </div>
                <p className="experience-card__meta">
                  {item.city} · {item.dateRange}
                </p>
                <p className="experience-card__description">{item.description}</p>
                <ul className="bullet-list experience-card__learnings">
                  {item.learnings.map((learning) => (
                    <li key={learning}>{learning}</li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ol>

        {content.complementaryExperience.length > 0 && (
          <div className="experience-complementary">
            <h3 className="experience-complementary__title">Experiencia complementaria</h3>
            <p className="experience-complementary__intro">
              Otras experiencias que también aportan habilidades útiles para mi trabajo como
              fisioterapeuta.
            </p>
            <ul className="experience-complementary__list">
              {content.complementaryExperience.map((item) => (
                <li key={item.id} className="reveal">
                  <Card className="complementary-card">
                    <EntityLogo
                      src={item.logoUrl}
                      alt={item.logoAlt}
                      name={item.context}
                      className="complementary-card__logo"
                    />
                    <h4 className="complementary-card__role">{item.role}</h4>
                    <p className="complementary-card__context">{item.context}</p>
                    <p className="complementary-card__meta">
                      {item.city} · {item.dateRange}
                    </p>
                    <p className="complementary-card__description">{item.description}</p>
                    <ul className="complementary-card__skills">
                      {item.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
