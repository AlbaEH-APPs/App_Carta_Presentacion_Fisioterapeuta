import { Card } from '../components/Card';
import { SectionHeading } from '../components/SectionHeading';
import { content } from '../data/content';
import './Interests.css';

export function Interests() {
  return (
    <section id="intereses" className="section section--alt" aria-labelledby="intereses-heading">
      <div className="container">
        <SectionHeading id="intereses-heading" title="Intereses" />
        <ul className="interests-grid">
          {content.interests.map((interest) => (
            <li key={interest.id} className="reveal">
              <Card className="interest-card">
                <h3 className="interest-card__title">{interest.title}</h3>
                <p className="interest-card__description">{interest.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
