# Despliegue en Vercel — Guía paso a paso

Guía para publicar esta web en Vercel y obtener una URL fija que puedas convertir en código QR.

## Requisitos previos

- El repositorio ya está en GitHub: `AlbaEH-APPs/App_Carta_Presentacion_Fisioterapeuta` ✅
- Una cuenta de GitHub (la misma que usas para el repo).
- Los datos reales ya cargados en [`src/data/content.ts`](src/data/content.ts) (si aún tienes placeholders, la web funcionará igual, pero conviene rellenarlos antes de imprimir las tarjetas).

## 1. Crear cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com).
2. Pulsa **Sign Up**.
3. Elige **Continue with GitHub** e inicia sesión con tu cuenta de GitHub (la misma donde está el repositorio). Esto evita crear una contraseña nueva y conecta Vercel con tus repos automáticamente.
4. Autoriza el acceso cuando GitHub te lo pida.

## 2. Importar el proyecto

1. Dentro del panel de Vercel, pulsa **Add New...** → **Project**.
2. En la lista de repositorios busca `App_Carta_Presentacion_Fisioterapeuta` y pulsa **Import**.
   - Si no aparece, pulsa **Adjust GitHub App Permissions** y dale acceso a ese repositorio (o a todos).

## 3. Configurar el proyecto

Vercel detecta automáticamente que es un proyecto **Vite** y rellena solo estos campos:

| Campo | Valor |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

No hace falta tocar nada de esto. Tampoco necesitas añadir variables de entorno para este proyecto.

## 4. Desplegar

1. Pulsa **Deploy**.
2. Vercel instala dependencias, ejecuta el build y publica la web. Tarda entre 30 segundos y 2 minutos.
3. Cuando termine, verás una pantalla de éxito con un botón **Continue to Dashboard** o directamente un botón para visitar la web.

## 5. Obtener la URL definitiva

1. En el dashboard del proyecto, la URL de producción aparece arriba, con formato:
   `https://app-carta-presentacion-fisioterapeuta.vercel.app`
2. Ábrela en el navegador del móvil para comprobar que se ve bien.
3. **Esta URL es fija**: mientras no cambies el nombre del proyecto en Vercel, seguirá siendo la misma aunque hagas cambios y despliegues nuevos en el futuro. Es la que debes usar para el QR.

## 6. Generar el código QR

1. Copia la URL de producción.
2. Usa cualquier generador de QR (por ejemplo [qr-code-generator.com](https://www.qr-code-generator.com) o [qrcode-monkey.com](https://www.qrcode-monkey.com)), pega la URL y descarga la imagen en PNG o SVG (SVG es mejor para imprimir, no pierde calidad).
3. Incluye esa imagen en el diseño de la tarjeta.

## 7. Cómo actualizar la web después

Cada vez que quieras cambiar algo (datos, foto, textos):

1. Edita los archivos en local (por ejemplo `src/data/content.ts`).
2. Guarda los cambios con git:
   ```bash
   git add .
   git commit -m "Actualiza datos de contacto"
   git push
   ```
3. Vercel detecta el `push` a la rama `master` automáticamente, reconstruye la web y actualiza la misma URL de producción en 1-2 minutos.
4. El QR ya impreso **no necesita regenerarse** — sigue apuntando a la misma dirección.

## 8. (Opcional) Dominio personalizado

Si más adelante quieres algo como `www.tunombre.com` en vez de `...vercel.app`:

1. Compra un dominio en cualquier proveedor (Namecheap, GoDaddy, Google Domains, etc.).
2. En Vercel: **Project → Settings → Domains → Add**.
3. Sigue las instrucciones para apuntar los DNS del dominio hacia Vercel.

No es necesario para que las tarjetas funcionen — el dominio `.vercel.app` gratuito es igual de estable y válido para el QR.
