import { Card } from '../components/Card';
import { SectionHeading } from '../components/SectionHeading';
import { content } from '../data/content';
import './Experience.css';

export function Experience() {
  return (
    <section id="experiencia" className="section" aria-labelledby="experiencia-heading">
      <div className="container">
        <SectionHeading
          id="experiencia-heading"
          eyebrow="Experiencia"
          title="Experiencia y prácticas clínicas"
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
      </div>
    </section>
  );
}
