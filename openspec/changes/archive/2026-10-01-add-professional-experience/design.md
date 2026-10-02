## Context

Consulta `proposal.md` para la motivación y `specs/portfolio-home/spec.md` para los datos y el comportamiento requeridos. `src/data/experience.ts` ya exporta `ExperienceEntry` con `period`, `company`, `role` y `description`, además de una colección de solo lectura actualmente vacía. La home ya entrega esa colección a `ExperienceTimeline.astro`; el componente representa entradas no vacías como lista ordenada (`<ol>`/`<li>`) y conserva un estado alternativo para colecciones vacías. Sus estilos ya separan período y contenido en desktop mediante un breakpoint.

## Goals / Non-Goals

**Goals:**

- Usar la colección tipada existente como única fuente de los cinco registros editoriales.
- Reutilizar el consumo y la presentación actuales, verificando el contenido real en los anchos indicados por la especificación.
- Mantener sin cambios los datos del perfil y la colección de proyectos.

**Non-Goals:**

- Ampliar `ExperienceEntry` o crear modelos de presentación adicionales.
- Rediseñar la timeline o alterar temas, spacing, tipografía y estilos responsive sin un problema concreto observado con el contenido aprobado.
- Añadir dependencias, nuevas rutas, enlaces empresariales o transformaciones automáticas de fechas.

## Decisions

### Conservar el modelo `ExperienceEntry`

Se completará cada registro con sus cuatro campos existentes. El modelo ya expresa todos los datos que se muestran; agregar tecnologías, logros, ubicación u otros atributos introduciría información y estructura fuera del alcance. Se descarta extender el tipo o crear un segundo modelo.

### Mantener el orden editorial en los datos

La colección se escribirá directamente en el orden aprobado, de la experiencia más reciente a la más antigua. Los períodos son cadenas editoriales localizadas y no requieren cálculo ni ordenamiento en runtime. Se descarta derivar fechas o inferir períodos mediante un parser, lo que podría cambiar el texto o el orden aprobado.

### Reutilizar la timeline y su estado vacío

La home ya pasa `experience` a `ExperienceTimeline.astro`, que representa cada entrada como elemento de lista ordenada. Se mantendrá esta ruta data-driven y el fallback actual del componente; al contener cinco registros, el fallback no se renderizará. Se descarta hardcodear empleos en el markup de la página o del componente. Solo se considerará ajustar estilos existentes si una comprobación con el contenido real evidencia un problema de lectura en los anchos acordados; no se añadirá una UI nueva.

### Preservar Projects y el resto de la home

`src/data/projects.ts` permanecerá vacío y Selected Work conservará el estado neutral actual. Hero, About, Skills, Contact y metadata no se alterarán. No se requieren cambios de dependencias ni rutas.

## Risks / Trade-offs

- [Las descripciones pueden ocupar más líneas que el contenido neutral actual] → Mantener cada copy en uno o dos enunciados y revisar legibilidad en 360px, 768px y 1280px, en ambos temas.
- [El orden podría alterarse al intentar interpretar fechas como cadenas] → Mantener los registros en el orden editorial aprobado, sin ordenamiento automático.
- [Una edición editorial podría introducir datos no confirmados] → Comparar cada campo con el delta de `portfolio-home` y limitar cualquier ajuste a fluidez sin añadir hechos.

## Migration Plan

Durante la implementación, completar la colección existente, revisar la representación de las cinco entradas y confirmar que el fallback de Experience no aparece, que Selected Work sigue neutral y que no se generan rutas de proyectos. Ejecutar `npm run check`, `npm run build` y `openspec validate add-professional-experience --type change --strict`; inspeccionar `dist/index.html` y comprobar la presentación responsive acordada. La reversión consiste en restaurar la colección vacía y revertir el commit de implementación; no hay datos persistentes ni migración de servicio.
