import { Button } from '../components/Button';
import { MailIcon, LinkedinIcon, PhoneIcon, PinIcon } from '../components/Icons';
import { SectionHeading } from '../components/SectionHeading';
import { content } from '../data/content';
import './Contact.css';

export function Contact() {
  const { contact } = content;

  return (
    <section id="contacto" className="section section--alt" aria-labelledby="contacto-heading">
      <div className="container">
        <SectionHeading
          id="contacto-heading"
          title="Contacto"
          description="La forma más rápida de contactar conmigo:"
        />

        <p className="contact__location">
          <PinIcon />
          {contact.city}
        </p>

        <div className="contact__actions">
          <Button href={`mailto:${contact.email}`} variant="primary">
            <MailIcon />
            {contact.email}
          </Button>
          <Button href={`tel:${contact.phone}`} variant="secondary">
            <PhoneIcon />
            {contact.phoneDisplay}
          </Button>
          <Button
            href={contact.linkedin}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
