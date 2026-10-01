# portfolio-home Specification

## Purpose
Define la estructura y el comportamiento accesible de la home one-page del portfolio, con contenido profesional verificable y sin datos inventados.

## Requirements

### Requirement: La home presenta las secciones base en orden editorial
La página raíz MUST mostrar Header, Hero, About, Experience, Selected Work, Skills, Contact y Footer en ese orden, con encabezados y landmarks semánticos que permitan recorrer el contenido.

#### Scenario: Recorrido de la página principal
- **WHEN** una persona abre la ruta raíz del sitio
- **THEN** encuentra las ocho regiones en el orden definido, dentro de un único flujo de página y con un solo encabezado principal

### Requirement: La navegación enlaza a secciones de la home
El header MUST ofrecer los enlaces `About`, `Experience`, `Projects` y `Contact`, dirigidos a anchors de la página, y MUST permanecer disponible mientras se desplaza por la página. La navegación MUST poder usarse con teclado y en mobile sin depender de hover, sin cubrir el encabezado de destino.

#### Scenario: Navegación mediante anchors y teclado
- **WHEN** una persona activa cualquiera de los cuatro enlaces con teclado o puntero
- **THEN** la página se desplaza a la sección correspondiente y su título queda visible debajo del header sticky

#### Scenario: Navegación en una pantalla estrecha
- **WHEN** la home se muestra en una pantalla mobile
- **THEN** los cuatro enlaces siguen disponibles, se pueden activar sin hover y no causan overflow horizontal

### Requirement: El hero usa la identidad provista y mantiene neutrales los textos pendientes
El Hero MUST dar prioridad visual tipográfica al nombre `Jean Carlo Cárdenas` y al rol `Mobile Developer`, con una introducción breve marcada explícitamente como placeholder hasta que se provea el texto final. MUST ofrecer acciones hacia Projects y Contact. MUST mostrar enlaces a GitHub o LinkedIn solo cuando existan URLs verificadas y MUST NOT fabricar enlaces ni afirmaciones profesionales.

#### Scenario: Hero de foundation sin biografía final
- **WHEN** la home se muestra antes de incorporar la biografía definitiva
- **THEN** presenta el nombre y rol provistos, identifica la introducción como pendiente y no presenta enlaces sociales sin destino verificado

### Requirement: Las secciones de contenido no inventan información profesional
About, Experience, Selected Work, Skills y Contact MUST admitir contenido vacío mientras se prepara la información real. Todo texto neutral visible para explicar una sección pendiente MUST identificarse como placeholder. La página MUST NOT inventar empleadores, fechas, logros, proyectos, tecnologías dominadas, enlaces, email ni datos de CV.

#### Scenario: Secciones sin datos confirmados
- **WHEN** no hay datos profesionales confirmados para una sección
- **THEN** la sección queda estructuralmente disponible y muestra solo un estado neutral claramente marcado o no muestra entradas

### Requirement: Experience admite una timeline vertical estructurada
Experience MUST poder representar cada entrada con fechas, empresa, cargo y descripción breve. Cuando existan entradas, MUST mantener una timeline vertical legible en mobile y una composición que aproveche el espacio disponible en desktop.

#### Scenario: Timeline sin experiencias cargadas
- **WHEN** la colección de experiencia está vacía
- **THEN** Experience permanece en la página sin mostrar posiciones, empresas ni fechas ficticias

#### Scenario: Timeline con datos confirmados
- **WHEN** hay entradas verificadas de experiencia
- **THEN** cada entrada presenta fechas, empresa, cargo y descripción breve en una secuencia cronológica legible

### Requirement: Skills y Contact evitan indicadores o datos ficticios
Skills MUST poder listar capacidades o tecnologías en texto agrupado, sin porcentajes, barras de progreso ni rankings. Contact MUST estar preparado para email, LinkedIn, GitHub y descarga de CV, pero MUST mostrar enlaces solo cuando se hayan proporcionado destinos reales y MUST NOT incluir un formulario que dependa de backend.

#### Scenario: Capacidades y contacto pendientes
- **WHEN** todavía no hay datos confirmados de skills o contacto
- **THEN** la estructura permanece disponible sin barras, rankings, enlaces rotos, datos de contacto inventados ni formulario

### Requirement: La home se adapta sin perder jerarquía ni legibilidad
La composición MUST seguir un enfoque mobile-first y MUST conservar navegación, orden de contenido, jerarquía de títulos y legibilidad en mobile, tablet y desktop. MUST NOT provocar overflow horizontal en los anchos de validación acordados para esas clases de viewport.

#### Scenario: Presentación en distintos tamaños
- **WHEN** la home se muestra en mobile, tablet o desktop
- **THEN** las secciones conservan su orden y legibilidad, la navegación cabe en el viewport y no aparece desplazamiento horizontal

### Requirement: La página ofrece navegación y contenido semánticamente accesibles
La home MUST usar landmarks HTML, jerarquía de encabezados, enlaces distinguibles de botones y foco visible al navegar con teclado. El contraste de texto normal MUST ser al menos 4.5:1 y el de texto grande al menos 3:1 contra su fondo. MUST usar ARIA solo cuando HTML semántico no comunique el propósito o estado.

#### Scenario: Recorrido con teclado
- **WHEN** una persona recorre la home solo con teclado
- **THEN** puede alcanzar y activar la navegación, las acciones y el selector de tema, y el foco actual es visible

#### Scenario: Lectura con tecnologías de asistencia
- **WHEN** un lector de pantalla interpreta la home
- **THEN** expone header, navegación, contenido principal, secciones con encabezados y footer mediante estructura semántica

### Requirement: La home expone metadata básica sin inventar perfil
La página raíz MUST proporcionar un título de documento y una meta description neutrales. La metadata MUST NOT afirmar datos profesionales que no estén confirmados; canonical, Open Graph y favicon deben poder incorporarse después sin exigir valores finales en esta foundation.

#### Scenario: Metadata de la página inicial
- **WHEN** la página raíz se genera para producción
- **THEN** incluye title y description neutrales, y no publica canonical, imagen social ni perfil inventados
