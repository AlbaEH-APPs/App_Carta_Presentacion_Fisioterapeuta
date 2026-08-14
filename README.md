# Carta de presentación digital — Fisioterapeuta

Web de una sola página (React + Vite + TypeScript) que sirve como carta de presentación profesional. Pensada para abrirse principalmente desde un código QR en móvil.

## Desarrollo

```bash
npm install
npm run dev
```

## Cómo sustituir los datos placeholder

Todo el contenido editable vive en **un único archivo**:

- [`src/data/content.ts`](src/data/content.ts) — nombre, apellidos, frase de presentación, formación, experiencia, áreas de interés, vídeos y datos de contacto.

Busca los valores entre corchetes (`[NOMBRE]`, `[EMAIL]`, etc.) y sustitúyelos por los datos reales. No hace falta tocar ningún componente ni fichero de estilos.

Además, actualiza a mano (están sincronizados con `content.ts` pero no se generan automáticamente):

- [`index.html`](index.html) — `<title>`, meta `description` y etiquetas Open Graph (`og:title`, `og:description`).

## Foto de perfil

Coloca el archivo de la foto profesional en `public/` (por ejemplo `public/foto-perfil.jpg`) y actualiza `profile.photoUrl` en `content.ts` con la ruta (`/foto-perfil.jpg`). Mientras `photoUrl` esté vacío, la web muestra un marcador visual en su lugar — no rompe el build.

## CV en PDF

Coloca el archivo en `public/cv.pdf`. El botón "Descargar CV" ya apunta a `/cv.pdf` (`profile.cvUrl` en `content.ts`); no hace falta ningún otro cambio.

## Imagen para redes sociales (Open Graph)

Añade una imagen en `public/og-image.jpg` (1200×630 px recomendado) para que los enlaces compartidos en redes sociales/WhatsApp muestren una vista previa. Mientras no exista, la web funciona igual, simplemente no se mostrará esa vista previa.

## Vídeos

Los vídeos no se alojan en este repositorio. En `content.ts`, cada entrada de `videos` lleva una `videoUrl` que debe apuntar al vídeo ya subido a YouTube, Vimeo, etc.

## Estructura del proyecto

```
src/
  components/   componentes reutilizables (Button, Nav, Card, iconos...)
  sections/     una sección de la landing por archivo (Hero, About, Contact...)
  data/         content.ts — todo el contenido editable
  styles/       tokens.css (paleta, tipografía, espaciados) y global.css
public/         favicon, cv.pdf y foto de perfil (añadir aquí)
```

## Despliegue en Vercel

El proyecto no necesita configuración adicional: importa el repositorio en Vercel, framework "Vite", y usa los comandos por defecto (`npm run build`, carpeta de salida `dist`).
