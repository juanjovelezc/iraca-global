# Iraca Global — Sitio web

Proyecto Vite + React 18 + TypeScript + Tailwind CSS.

## Arrancar

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # compila a /dist
npm run preview  # sirve /dist localmente
```

## Dónde se edita cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Cualquier texto del sitio | `src/content/site.ts` |
| Correo, teléfono, LinkedIn, endpoint del formulario | `src/content/site.ts` → `company` |
| Colores y tipografías | `tailwind.config.js` |
| Estilos globales y clases `.btn` / `.card` | `src/index.css` |
| Añadir o quitar una sección | `src/App.tsx` + un archivo en `src/components/` |
| Logos y favicon | `public/` |

**Todo el copy vive en `src/content/site.ts`.** No hace falta tocar componentes para
cambiar textos.

## Pendientes antes de publicar

1. **Formulario** — crear cuenta en Formspree y reemplazar `formEndpoint` en `site.ts`.
2. **Biografías del equipo** — los campos `bio` de `team.members` están marcados `[PENDIENTE]`.
3. **Fotos del equipo** — poner los archivos en `public/` y rellenar `photo` (ej. `'/paulina.jpg'`).
   Si se dejan vacíos, se muestran las iniciales sobre degradé.
4. **Correo corporativo** — sustituir el Gmail por uno del dominio.
5. **Logo vectorial** — reemplazar los PNG de `public/` por SVG cuando estén disponibles.
6. **Revisar los compromisos** — `commitments.items` contiene promesas públicas
   (10 días hábiles, garantía de 90 días). Confirmar que son sostenibles.

## Versión en español

Duplicar `src/content/site.ts` como `site.es.ts`, traducir, y seleccionar el archivo
según idioma en `App.tsx`. La estructura de componentes ya está desacoplada del texto.

## Desplegar

Cualquier hosting estático sirve. Netlify, Vercel o Cloudflare Pages detectan Vite
automáticamente: build `npm run build`, carpeta de salida `dist`.
