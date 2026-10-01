## Why

El repositorio parte de una página mínima y todavía no define la estructura ni el lenguaje visual del portfolio. Esta foundation establece una home editorial, responsive y accesible, con temas claros y oscuros y una arquitectura estática preparada para contenido estructurado, sin inventar información profesional.

## What Changes

- Preparar la home one-page con las secciones Header, Hero, About, Experience, Selected Work, Skills, Contact y Footer, en ese orden.
- Definir una identidad visual sobria y editorial mediante CSS nativo, tipografía de sistema, tokens reutilizables, superficies neutrales y acento navy moderado.
- Incorporar temas claro y oscuro; la primera visita respetará la preferencia del sistema y una elección manual se persistirá entre visitas.
- Añadir navegación sticky por anchors, usable con teclado y adaptable a pantallas pequeñas.
- Preparar estructuras reutilizables y datos separados para timeline de experiencia, showcases de proyectos, skills y contacto, sin contenido profesional real.
- Preparar el patrón estático `/projects/[slug]` para futuras páginas de detalle generadas desde datos estructurados.
- Incorporar semántica, foco visible, contraste, soporte de movimiento reducido y metadata básica, manteniendo el sitio estático y sin dependencias nuevas.

## Capabilities

### New Capabilities

- `portfolio-home`: estructura one-page, navegación, secciones, layouts responsive y contenido neutral de foundation.
- `theme-system`: tokens visuales, temas claro/oscuro, preferencia del sistema, persistencia manual y control accesible.
- `project-presentation`: showcases amplios basados en datos y foundation para rutas estáticas de detalle por slug.

### Modified Capabilities

Ninguna. El repositorio todavía no tiene capabilities funcionales existentes.

## Impact

Afecta la página Astro, layouts, componentes, estilos y módulos de datos en `src/`; puede añadir la ruta dinámica estática `src/pages/projects/[slug].astro`. No cambia APIs externas ni añade dependencias. La salida seguirá siendo estática y la interactividad cliente se limitará al cambio de tema y, solo si resulta necesario, a la navegación responsive.
