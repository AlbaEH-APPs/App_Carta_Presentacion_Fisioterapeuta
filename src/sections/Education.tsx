import { Card } from '../components/Card';
import { SectionHeading } from '../components/SectionHeading';
import { content, type EducationType } from '../data/content';
import './Education.css';

const typeLabels: Record<EducationType, string> = {
  degree: 'Grado',
  course: 'Curso',
  certification: 'Certificación',
};

export function Education() {
  return (
    <section id="formacion" className="section section--alt" aria-labelledby="formacion-heading">
      <div className="container">
        <SectionHeading
          id="formacion-heading"
          eyebrow="Formación"
          title="Formación académica"
        />
        <ol className="education-list">
          {content.education.map((item) => (
            <li key={item.id} className="reveal">
              <Card className="education-card">
                <span className="education-card__type">{typeLabels[item.type]}</span>
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
