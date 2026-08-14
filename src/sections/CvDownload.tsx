import { Button } from '../components/Button';
import { DownloadIcon } from '../components/Icons';
import { content } from '../data/content';
import './CvDownload.css';

export function CvDownload() {
  const { profile } = content;

  return (
    <section id="cv" className="cv-download" aria-labelledby="cv-heading">
      <div className="container cv-download__inner">
        <h2 id="cv-heading" className="cv-download__title">
          Curriculum Vitae
        </h2>
        <p className="cv-download__text">
          Descarga mi CV en PDF con el detalle completo de mi formación y experiencia.
        </p>
        <Button href={profile.cvUrl} variant="primary" className="cv-download__button" download>
          <DownloadIcon />
          Descargar CV
        </Button>
      </div>
    </section>
  );
}
