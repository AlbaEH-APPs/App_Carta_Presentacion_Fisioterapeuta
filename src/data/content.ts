/**
 * Contenido editable de la web.
 *
 * Este es el ÚNICO archivo que hace falta tocar para sustituir los
 * placeholders por los datos reales. No contiene lógica de presentación.
 *
 * Los campos marcados entre corchetes, ej. "Z", son placeholders
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
  /** Ruta del logo de la institución. Colocar el archivo real en /public/logos y actualizar esta ruta. */
  logoUrl: string;
  /** Alt descriptivo del logo (editar junto con logoUrl) */
  logoAlt: string;
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

/**
 * Experiencia no clínica (ej. entrenador, monitor, voluntariado) que aporta
 * habilidades transferibles a la fisioterapia. Se muestra aparte de las
 * prácticas clínicas para no confundir a quien busca horas de clínica.
 */
export interface ComplementaryExperienceItem {
  id: string;
  role: string;
  context: string;
  city: string;
  dateRange: string;
  description: string;
  skills: string[];
  /** Ruta del logo de la entidad. Colocar el archivo real en /public/logos y actualizar esta ruta. */
  logoUrl: string;
  /** Alt descriptivo del logo (editar junto con logoUrl) */
  logoAlt: string;
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
  complementaryExperience: ComplementaryExperienceItem[];
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
    firstName: 'JAIME',
    lastName: 'GRACIA VILLANUEVA',
    role: 'Fisioterapeuta',
    tagline: 'Apasionado por la fisioterapia y por ayudar a las personas a recuperar su bienestar y calidad de vida. Mi objetivo es ofrecer un trato cercano y personalizado, adaptando cada tratamiento a las necesidades de cada persona.',
    city: 'ZARAGOZA',
    photoAlt: 'JAIME GRACIA VILLANUEVA, fisioterapeuta — foto de perfil pendiente de sustituir',
    photoUrl: '',
    cvUrl: '/cv.pdf',
  },

  about: {
    paragraphs: [
      // '[Texto pendiente: quién es — breve presentación personal y profesional.]',
      // '[Texto pendiente: por qué eligió la fisioterapia como profesión.]',
      // '[Texto pendiente: cómo entiende la profesión y su forma de trabajar con pacientes.]',
      'Soy fisioterapeuta y una persona apasionada por el movimiento, la salud y el bienestar.',
      'Elegí la fisioterapia porque me permite combinar mis conocimientos con algo que considero fundamental: ayudar a las personas a sentirse mejor, recuperar su autonomía y volver a disfrutar de aquello que les gusta hacer.',
      'Entiendo la fisioterapia como mucho más que tratar una lesión. Para mí, cada persona es diferente y necesita un tratamiento adaptado a sus necesidades, objetivos y circunstancias. Por eso, me gusta trabajar desde la cercanía, escuchar y entender a cada paciente, buscando siempre un tratamiento personalizado y basado en la confianza.Mi objetivo es acompañar a cada persona durante su proceso de recuperación, proporcionándole las herramientas necesarias para mejorar, prevenir futuras molestias y cuidar de su salud a largo plazo.'
    ],
    values: [
      '[VALOR 1 — ej. trato cercano]',
      '[VALOR 2 — ej. rigor y evidencia científica]',
      '[VALOR 3 — ej. aprendizaje continuo]',
    ],
  },

  // Logos: colocar el archivo oficial de cada institución en /public/logos
  // (ej. /logos/universidad-zaragoza.png) y actualizar logoUrl. Usar el
  // logotipo oficial en PNG/SVG con fondo transparente. Mientras logoUrl
  // esté vacío se muestra un marcador con las iniciales de la institución.
  education: [
    {
      id: 'grado',
      type: 'degree',
      title: 'Grado en Fisioterapia',
      institution: 'UNIVERSIDAD DE ZARAGOZA',
      date: '2024-2027',
      logoUrl: '/logos/universidad-zaragoza.png',
      logoAlt: 'Logotipo de la Universidad de Zaragoza',
    },
    {
      id: 'curso-1',
      type: 'course',
      title: '[NOMBRE DEL CURSO ADICIONAL]',
      institution: '[ENTIDAD FORMADORA]',
      date: '[FECHA]',
      logoUrl: '',
      logoAlt: '',
    },
    {
      id: 'certificacion-1',
      type: 'certification',
      title: '[NOMBRE DE LA CERTIFICACIÓN]',
      institution: '[ENTIDAD EMISORA]',
      date: '[FECHA]',
      logoUrl: '',
      logoAlt: '',
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

  // Experiencia no clínica que aporta habilidades transferibles (trato con
  // personas, responsabilidad, trabajo en equipo...). Se muestra aparte de
  // las prácticas clínicas. Dejar el array vacío ([]) para ocultar el bloque.
  // Logo: colocar el archivo real en /public/logos (ej. /logos/club-zuera.png)
  // y actualizar logoUrl. Mientras esté vacío se muestra un marcador con iniciales.
  complementaryExperience: [
    {
      id: 'complementaria-1',
      role: 'Entrenador de fútbol',
      context: 'Club Deportivo Zuera',
      city: 'ZUERA, ZARAGOZA',
      dateRange: '2025 – 2026',
      description: '[Breve descripción de la experiencia como entrenador — ejemplo, sustituir]',
      skills: [
        'Trato y comunicación con niños',
        'Trabajo en equipo',
        'Responsabilidad y disciplina',
      ],
      logoUrl: '/logos/club-zuera.png',
      logoAlt: 'Logotipo del Club Deportivo Zuera',
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
    city: 'ZUERA, ZARAGOZA',
  },
};
