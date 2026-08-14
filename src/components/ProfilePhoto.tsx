import { UserIcon } from './Icons';
import './ProfilePhoto.css';

interface ProfilePhotoProps {
  src: string;
  alt: string;
}

/**
 * Muestra la foto profesional real cuando exista `src`. Si el archivo aún
 * no se ha colocado en /public, se renderiza un marcador visual en lugar de
 * un <img> roto, para que el build nunca dependa de un fichero ausente.
 */
export function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  if (!src) {
    return (
      <div className="profile-photo profile-photo--placeholder" role="img" aria-label={alt}>
        <UserIcon className="profile-photo__icon" />
        <span className="profile-photo__badge">Foto pendiente</span>
      </div>
    );
  }

  return <img className="profile-photo" src={src} alt={alt} />;
}
