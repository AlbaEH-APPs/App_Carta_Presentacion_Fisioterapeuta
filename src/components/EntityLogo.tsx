import './EntityLogo.css';

interface EntityLogoProps {
  src: string;
  alt: string;
  name: string;
  className?: string;
}

function getInitials(name: string) {
  const letters = name.match(/[A-ZÁÉÍÓÚÑ]/g);
  return letters ? letters.slice(0, 2).join('') : name.slice(0, 2).toUpperCase();
}

/**
 * Logo de una institución/entidad. Si no hay `src` (archivo aún no colocado
 * en /public), muestra un marcador con las iniciales de `name`.
 */
export function EntityLogo({ src, alt, name, className = '' }: EntityLogoProps) {
  return (
    <span className={`entity-logo ${className}`.trim()}>
      {src ? (
        <img src={src} alt={alt || name} />
      ) : (
        <span className="entity-logo__fallback" aria-hidden="true">
          {getInitials(name)}
        </span>
      )}
    </span>
  );
}
