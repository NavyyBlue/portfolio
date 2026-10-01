## Context

Ver `proposal.md` para motivación y `specs/portfolio-home/spec.md`, `specs/theme-system/spec.md` y `specs/project-presentation/spec.md` para el comportamiento requerido. El repositorio solo tiene una página Astro mínima; las carpetas de componentes, datos, layouts y estilos están vacías. Astro ya genera salida estática y no hay capabilities funcionales previas ni dependencias de UI.

## Goals / Non-Goals

**Goals:**

- Convertir la página raíz en una composición Astro legible, preparada para contenido estructurado y placeholders neutrales.
- Centralizar el lenguaje visual en CSS Custom Properties y mantener el render estático.
- Limitar JavaScript cliente al cambio de tema y conservar el funcionamiento con datos vacíos.
- Dejar la plantilla de detalle conectada al modelo de proyectos sin publicar case studies inventados.

**Non-Goals:**

- Añadir contenido biográfico, experiencia, proyectos, imágenes, enlaces o datos de contacto no confirmados.
- Crear un sistema genérico de componentes, CMS, formularios, analytics, backend, deployment o soporte de múltiples idiomas.
- Incorporar frameworks de UI, frameworks CSS, fuentes remotas o dependencias adicionales.

## Decisions

1. **Componer la página con Astro y componentes de responsabilidad clara.** `src/pages/index.astro` orquesta el contenido; un layout común resuelve documento, metadata y tema. Header con su control de tema, Hero, timeline, showcases, Skills, Contact y Footer pueden ser componentes Astro acotados. About y las secciones sencillas pueden usar una primitiva de sección en vez de crear un componente por cada elemento. Esto mantiene separación sin fragmentar el proyecto.

2. **Separar datos de presentación.** Los módulos tipados en `src/data/` serán la fuente de identidad provista y de las colecciones de experiencia, proyectos, skills y contacto. Las colecciones profesionales comienzan vacías. Las vistas mostrarán un placeholder neutral claramente identificado cuando sea útil para revisar la composición; las colecciones vacías no generarán tarjetas o enlaces falsos. Los tipos de proyecto contemplarán slug, nombre, descripción, tecnologías, imagen con texto alternativo, enlaces opcionales y los campos que puede usar un detalle.

3. **Usar tokens pequeños por rol, no valores repetidos por componente.** Una hoja de tokens define superficies, foregrounds, texto secundario, bordes, acento navy, spacing, radius, tipografía y motion. El tema claro usa un canvas cálido claro; el oscuro usa carbón y superficies escalonadas. El navy queda reservado para acciones o énfasis puntuales. La tipografía será una stack sans-serif del sistema. Las decisiones de contraste se verifican para mantener 4.5:1 en texto normal y 3:1 en texto grande.

4. **Resolver el tema con un atributo en el documento y un script temprano pequeño.** El layout aplica `data-theme` al elemento raíz antes del primer render visible: prioriza una elección `light` o `dark` de `localStorage`, y si no existe consulta `prefers-color-scheme`. CSS define el fallback del sistema para el caso en que el script no se ejecute. Un único control nativo alterna el tema, actualiza su nombre accesible y guarda la elección; los accesos a almacenamiento se protegen para que un bloqueo del navegador no rompa la página.

5. **Mantener los anchors siempre disponibles en mobile.** El header sticky mantiene los cuatro enlaces solicitados y el control de tema visibles; en anchos estrechos los enlaces pueden fluir a más de una fila y usan espacios compactos. No se ocultan mediante hover ni se añade un menú colapsable que requiera estado JavaScript. Los targets de scroll tienen separación del header para dejar visible su encabezado.

6. **Aplicar responsive y motion desde CSS mobile-first.** El contenido usa un ancho legible y espaciado fluido. Los puntos de ruptura se eligen cuando la timeline o la composición alterna de showcases necesitan más espacio, no por nombres de dispositivos. La timeline permanece vertical en mobile y puede ampliar su composición en desktop; las imágenes y el texto de proyectos alternan solo cuando el espacio lo permite. Las transiciones de color son breves y `prefers-reduced-motion` elimina el movimiento no esencial.

7. **Preparar detalles estáticos desde la misma colección de proyectos.** `src/pages/projects/[slug].astro` obtiene sus rutas de los slugs publicados mediante `getStaticPaths`. Con la colección vacía devuelve una lista vacía: la plantilla queda compilada, el build permanece válido y no se publican páginas ficticias. Cuando existan proyectos verificados, el modelo admite overview, contexto, problema, solución, rol, tecnologías, decisiones, screenshots y enlaces externos.

8. **Mantener metadata neutral y la salida estática.** El layout acepta title y description, con valores de foundation que no atribuyen logros ni perfil. Canonical, Open Graph y favicon quedan preparados para un change con URL y assets reales. No se incorporan fonts, imágenes remotas, islas de UI ni dependencias; la interacción de tema usa JavaScript del navegador sin framework.

## Risks / Trade-offs

- [El script de tema puede no ejecutarse o el almacenamiento puede estar bloqueado] → Mantener el fallback CSS de `prefers-color-scheme`, proteger `localStorage` y permitir el cambio durante la visita.
- [En mobile el header puede ocupar dos filas] → Conservar anchors y control visibles, ajustar el espacio tipográfico y validar navegación y foco en un viewport estrecho.
- [Las colecciones vacías pueden hacer que algunas secciones parezcan incompletas] → Usar estados neutrales explícitos y evitar elementos que aparenten ser datos reales.
- [El detalle dinámico no emite páginas con la colección vacía] → Validar que la ruta plantilla compila y generar URLs solo desde proyectos con slug y contenido confirmados.
- [El navy o los fondos cambian su contraste entre temas] → Revisar las combinaciones de tokens en light y dark contra los mínimos especificados.

## Migration Plan

1. Crear tokens y estilos globales, layout base y script de tema dentro de Astro.
2. Componer Header, Hero y las secciones de la home con estructuras semánticas y datos neutrales.
3. Añadir los modelos de datos, timeline, showcases y plantilla `/projects/[slug]` con colecciones vacías.
4. Ajustar responsive, teclado, contraste y movimiento reducido en mobile, tablet y desktop.
5. Ejecutar `npm run build` y revisar que la salida sea estática y que no existan rutas de proyecto ficticias.

El cambio de implementación puede revertirse con Git; no requiere migrar datos ni ejecutar tareas sobre servicios externos.
