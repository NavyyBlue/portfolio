# project-presentation Specification

## Purpose
Define cómo se preparan showcases editoriales de proyectos y páginas estáticas de detalle a partir de datos estructurados, sin publicar proyectos ficticios.

## Requirements

### Requirement: Selected Work usa showcases amplios y data-driven
Los proyectos MUST presentarse como showcases amplios con espacio para imagen principal, nombre, descripción, tecnologías y enlace al detalle; los enlaces externos serán opcionales. MUST NOT representarse como una cuadrícula de pequeñas tarjetas. La composición podrá alternar imagen y texto para dar ritmo editorial. Los datos de proyectos MUST mantenerse separados de componentes de presentación.

#### Scenario: Showcase con un proyecto confirmado
- **WHEN** existe un proyecto con datos confirmados
- **THEN** Selected Work muestra un showcase amplio con sus datos disponibles y enlaces aplicables

#### Scenario: Colección de proyectos vacía
- **WHEN** todavía no hay proyectos confirmados
- **THEN** la sección permanece preparada y no presenta proyectos, imágenes, tecnologías ni enlaces ficticios

### Requirement: Las imágenes y enlaces de proyecto tienen alternativas seguras
Cada imagen informativa de proyecto MUST tener texto alternativo que describa su propósito; una imagen puramente decorativa MUST usar alternativa vacía. Los enlaces a detalle o a sitios externos MUST tener destinos reales y nombres comprensibles sin depender solo del contexto visual.

#### Scenario: Proyecto sin imagen o enlace externo
- **WHEN** un proyecto no tiene imagen o enlaces externos confirmados
- **THEN** el showcase conserva una composición válida sin imagen rota, enlace vacío ni URL inventada

### Requirement: La arquitectura genera detalles estáticos por slug
La foundation MUST preparar el patrón de ruta `/projects/[slug]` para generar una página estática por cada proyecto publicado en los datos estructurados. El modelo de detalle MUST poder representar overview, contexto, problema, solución, rol, tecnologías, decisiones técnicas, screenshots y enlaces externos. Con una colección vacía, el build MUST seguir siendo válido y MUST NOT generar case studies ficticios.

#### Scenario: Build sin proyectos publicados
- **WHEN** la colección estructurada de proyectos está vacía
- **THEN** no se publica ninguna página de detalle ficticia y el build estático termina correctamente

#### Scenario: Generación de un detalle desde datos
- **WHEN** se incorpora un proyecto con slug único y contenido confirmado
- **THEN** se puede generar `/projects/<slug>` desde la misma fuente estructurada y la plantilla puede mostrar los campos disponibles

### Requirement: La presentación de proyectos mantiene el sitio estático
La presentación y los detalles MUST poder generarse como HTML estático en Astro y MUST NOT requerir hidratación cliente para presentar el contenido ni introducir un framework de UI.

#### Scenario: Render estático de un showcase
- **WHEN** se genera el build del sitio
- **THEN** el contenido disponible del showcase se emite como HTML estático sin una isla de framework cliente
