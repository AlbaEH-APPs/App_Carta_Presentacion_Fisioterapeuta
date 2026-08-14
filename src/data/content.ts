/**
 * Contenido editable de la web.
 *
 * Este es el ÚNICO archivo que hace falta tocar para sustituir los
 * placeholders por los datos reales. No contiene lógica de presentación.
 *
 * Los campos marcados entre corchetes, ej. "[NOMBRE]", son placeholders
 * pendientes de sustituir por información real. No se ha inventado
 * ningún dato personal, académico ni profesional.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  city: string;
  /** Alt descriptivo de la foto de perfil (editar junto con photoUrl) */
  photoAlt: string;
  /** Ruta de la foto profesional. Colocar el archivo real en /public y actualizar esta ruta. */
  photoUrl: string;
  /** Ruta del CV en PDF. Colocar el archivo en /public/cv.pdf. */
  cvUrl: string;
}

export interface AboutContent {
  /** Párrafos placeholder — sustituir por texto real escrito por el fisioterapeuta */
  paragraphs: string[];
  values: string[];
}

export type EducationType = 'degree' | 'course' | 'certification';

export interface EducationItem {
  id: string;
  type: EducationType;
  title: string;
  institution: string;
  date: string;
}

export interface ExperienceItem {
  id: string;
  center: string;
  city: string;
  dateRange: string;
  area: string;
  description: string;
  learnings: string[];
}

export interface InterestArea {
  id: string;
  title: string;
  description: string;
}

export type VideoPlatform = 'YouTube' | 'Vimeo';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  /** URL de la miniatura. Dejar vacío para usar el marcador visual por defecto. */
  thumbnailUrl: string;
  /** URL del vídeo en YouTube/Vimeo/etc. */
  videoUrl: string;
  platform: VideoPlatform;
}

export interface ContactInfo {
  email: string;
  phone: string;
  /** Teléfono formateado para mostrar en pantalla */
  phoneDisplay: string;
  linkedin: string;
  city: string;
}

export interface SiteContent {
  navLinks: NavLink[];
  profile: Profile;
  about: AboutContent;
  education: EducationItem[];
  experience: ExperienceItem[];
  interests: InterestArea[];
  videos: VideoItem[];
  contact: ContactInfo;
}

export const content: SiteContent = {
  navLinks: [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Intereses', href: '#intereses' },
    { label: 'Vídeos', href: '#videos' },
    { label: 'CV', href: '#cv' },
    { label: 'Contacto', href: '#contacto' },
  ],

  profile: {
    firstName: '[NOMBRE]',
    lastName: '[APELLIDOS]',
    role: 'Fisioterapeuta',
    // TODO: sustituir por una frase de presentación real, breve y propia.
    tagline: '[FRASE DE PRESENTACIÓN BREVE — sustituir por una frase propia]',
    city: '[CIUDAD]',
    photoAlt: '[NOMBRE] [APELLIDOS], fisioterapeuta — foto de perfil pendiente de sustituir',
    photoUrl: '',
    cvUrl: '/cv.pdf',
  },

  about: {
    paragraphs: [
      '[Texto pendiente: quién es — breve presentación personal y profesional.]',
      '[Texto pendiente: por qué eligió la fisioterapia como profesión.]',
      '[Texto pendiente: cómo entiende la profesión y su forma de trabajar con pacientes.]',
    ],
    values: [
      '[VALOR 1 — ej. trato cercano]',
      '[VALOR 2 — ej. rigor y evidencia científica]',
      '[VALOR 3 — ej. aprendizaje continuo]',
    ],
  },

  education: [
    {
      id: 'grado',
      type: 'degree',
      title: 'Grado en Fisioterapia',
      institution: '[UNIVERSIDAD]',
      date: '[FECHA DE FINALIZACIÓN]',
    },
    {
      id: 'curso-1',
      type: 'course',
      title: '[NOMBRE DEL CURSO ADICIONAL]',
      institution: '[ENTIDAD FORMADORA]',
      date: '[FECHA]',
    },
    {
      id: 'certificacion-1',
      type: 'certification',
      title: '[NOMBRE DE LA CERTIFICACIÓN]',
      institution: '[ENTIDAD EMISORA]',
      date: '[FECHA]',
    },
  ],

  // Ejemplo de estructura — sustituir por las prácticas clínicas reales.
  experience: [
    {
      id: 'experiencia-1',
      center: '[CENTRO / CLÍNICA — ejemplo, sustituir]',
      city: '[CIUDAD]',
      dateRange: '[FECHA INICIO] – [FECHA FIN]',
      area: '[ÁREA DE TRABAJO — ej. traumatología]',
      description: '[Breve descripción de las funciones realizadas durante estas prácticas.]',
      learnings: [
        '[Principal aprendizaje 1]',
        '[Principal aprendizaje 2]',
      ],
    },
    {
      id: 'experiencia-2',
      center: '[CENTRO / CLÍNICA — ejemplo, sustituir]',
      city: '[CIUDAD]',
      dateRange: '[FECHA INICIO] – [FECHA FIN]',
      area: '[ÁREA DE TRABAJO — ej. neurología]',
      description: '[Breve descripción de las funciones realizadas durante estas prácticas.]',
      learnings: [
        '[Principal aprendizaje 1]',
        '[Principal aprendizaje 2]',
      ],
    },
  ],

  // IMPORTANTE: estas áreas son un ejemplo de estructura, no las especialidades
  // reales del fisioterapeuta. Sustituir por sus intereses reales.
  interests: [
    {
      id: 'interes-1',
      title: '[ÁREA DE INTERÉS 1 — ej. fisioterapia musculoesquelética]',
      description: '[Breve descripción de este interés — ejemplo, sustituir]',
    },
    {
      id: 'interes-2',
      title: '[ÁREA DE INTERÉS 2 — ej. ejercicio terapéutico]',
      description: '[Breve descripción de este interés — ejemplo, sustituir]',
    },
    {
      id: 'interes-3',
      title: '[ÁREA DE INTERÉS 3 — ej. rehabilitación deportiva]',
      description: '[Breve descripción de este interés — ejemplo, sustituir]',
    },
    {
      id: 'interes-4',
      title: '[ÁREA DE INTERÉS 4 — ej. prevención de lesiones]',
      description: '[Breve descripción de este interés — ejemplo, sustituir]',
    },
  ],

  // Vídeos alojados externamente (YouTube/Vimeo). Sustituir videoUrl cuando existan.
  videos: [
    {
      id: 'video-1',
      title: '[Título del vídeo de presentación]',
      description: '[Breve descripción del vídeo — ejemplo, sustituir]',
      thumbnailUrl: '',
      videoUrl: '[URL_VIDEO_1]',
      platform: 'YouTube',
    },
    {
      id: 'video-2',
      title: '[Título del vídeo de ejercicio explicado]',
      description: '[Breve descripción del vídeo — ejemplo, sustituir]',
      thumbnailUrl: '',
      videoUrl: '[URL_VIDEO_2]',
      platform: 'YouTube',
    },
  ],

  contact: {
    email: '[EMAIL]',
    phone: '[TELÉFONO]',
    phoneDisplay: '[TELÉFONO]',
    linkedin: '[LINKEDIN]',
    city: '[CIUDAD]',
  },
};
