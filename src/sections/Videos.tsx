import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { PlayIcon } from '../components/Icons';
import { SectionHeading } from '../components/SectionHeading';
import { content } from '../data/content';
import './Videos.css';

export function Videos() {
  return (
    <section id="videos" className="section" aria-labelledby="videos-heading">
      <div className="container">
        <SectionHeading
          id="videos-heading"
          eyebrow="Vídeos"
          title="Vídeos"
          description="Presentación personal, explicación de ejercicios y contenido relacionado con fisioterapia."
        />
        <ul className="videos-grid">
          {content.videos.map((video) => (
            <li key={video.id} className="reveal">
              <Card className="video-card">
                <div className="video-card__thumb">
                  {video.thumbnailUrl ? (
                    <img src={video.thumbnailUrl} alt="" />
                  ) : (
                    <span className="video-card__thumb-placeholder">{video.platform}</span>
                  )}
                  <span className="video-card__play" aria-hidden="true">
                    <PlayIcon />
                  </span>
                </div>
                <h3 className="video-card__title">{video.title}</h3>
                <p className="video-card__description">{video.description}</p>
                <Button
                  href={video.videoUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver vídeo
                </Button>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
