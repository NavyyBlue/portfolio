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
El Hero MUST dar prioridad visual tipográfica al nombre `Jean Carlo Cárdenas` y al rol `Mobile Developer`. MUST presentar como introducción breve el texto: “Desarrollo experiencias móviles para Android, iOS y entornos multiplataforma, con foco en arquitectura de software, escalabilidad y calidad de código.” La introducción MUST NOT contener placeholders ni afirmaciones fuera de la información verificada. MUST conservar acciones hacia Projects y Contact, MUST NOT añadir una acción de CV mientras no exista un archivo real, y MUST mostrar enlaces sociales solo cuando existan URLs verificadas.

#### Scenario: Hero de foundation sin biografía final
- **WHEN** la home se muestra antes de incorporar cualquier contenido biográfico adicional futuro
- **THEN** presenta el nombre y rol provistos, la introducción profesional aprobada sin placeholder y no presenta enlaces sociales sin destino verificado

#### Scenario: Hero con el perfil profesional verificado
- **WHEN** una persona abre la home después de incorporar el perfil profesional
- **THEN** encuentra el nombre y rol provistos, la introducción aprobada sin placeholder, y las acciones `Ver proyectos` y `Contactar`

### Requirement: Las secciones de contenido no inventan información profesional
About MUST presentar un resumen en español basado solo en el perfil verificado: más de 4 años de experiencia en desarrollo móvil para Android, iOS y entornos multiplataforma; trabajo con Kotlin, Java, Swift, SwiftUI y Flutter; participación en desarrollo, mantenimiento, migraciones, procesos de release y gestión de dependencias; y enfoque en soluciones mantenibles y escalables, principios de arquitectura y calidad durante el ciclo de vida del producto. Experience y Selected Work MUST permanecer vacías y neutrales mientras no se proporcionen registros verificados para ellas. Todo texto neutral que explique esas secciones pendientes MUST identificarse como placeholder. La página MUST NOT inventar empleadores, clientes, fechas, cargos, logros, proyectos, educación, certificaciones, idiomas ni otros claims profesionales.

#### Scenario: Secciones sin datos confirmados
- **WHEN** no hay datos profesionales confirmados para una sección
- **THEN** la sección queda estructuralmente disponible y muestra solo un estado neutral claramente marcado o no muestra entradas

#### Scenario: About usa únicamente información confirmada
- **WHEN** la home presenta About
- **THEN** la sección muestra la introducción profesional verificada y no atribuye empleadores, logros, clientes o proyectos no proporcionados

#### Scenario: Experience y Selected Work continúan vacías
- **WHEN** no se han proporcionado entradas verificadas de experiencia ni proyectos
- **THEN** Experience y Selected Work siguen sin entradas ficticias y conservan estados neutrales claramente identificados

### Requirement: Experience admite una timeline vertical estructurada
Experience MUST poder representar cada entrada con fechas, empresa, cargo y descripción breve. Cuando existan entradas, MUST mantener una timeline vertical legible en mobile y una composición que aproveche el espacio disponible en desktop.

#### Scenario: Timeline sin experiencias cargadas
- **WHEN** la colección de experiencia está vacía
- **THEN** Experience permanece en la página sin mostrar posiciones, empresas ni fechas ficticias

#### Scenario: Timeline con datos confirmados
- **WHEN** hay entradas verificadas de experiencia
- **THEN** cada entrada presenta fechas, empresa, cargo y descripción breve en una secuencia cronológica legible

### Requirement: Skills y Contact evitan indicadores o datos ficticios
Skills MUST presentar las capacidades como texto agrupado usando exactamente estos elementos en cada categoría:

- `Languages`: Kotlin, Java, Swift, Dart, TypeScript.
- `Mobile`: Android SDK, Jetpack Compose, XML, SwiftUI, Flutter.
- `Architecture`: MVI, MVVM, Clean Architecture.
- `Backend & Data`: NestJS, MySQL, PostgreSQL, MongoDB.
- `Tools & Platforms`: Git, Linux, Google Play Console, App Store Connect, Cloudflare.
- `Ways of Working`: Agile, Scrum, Dependency management, REST API integration, Mobile app release process.

Skills MUST NOT usar porcentajes, barras, estrellas, niveles, rankings, años por tecnología ni claims subjetivos de dominio. Contact MUST incluir el email `jeancardenas.dev@gmail.com` como enlace `mailto:` y GitHub como enlace normal a `https://github.com/NavyyBlue`, con texto comprensible y accesible por teclado. LinkedIn MUST permanecer ausente mientras no haya una URL exacta verificada; el enlace de CV MUST permanecer ausente mientras no exista un PDF real. Contact MUST NOT añadir teléfono, dirección, WhatsApp ni formulario que dependa de backend.

La implementación MUST reutilizar el stack y tooling existentes y MUST NOT agregar dependencias.

#### Scenario: Capacidades y contacto pendientes
- **WHEN** todavía no hay datos confirmados de skills o contacto
- **THEN** la estructura permanece disponible sin barras, rankings, enlaces rotos, datos de contacto inventados ni formulario

#### Scenario: Skills aparecen en grupos sin rankings
- **WHEN** la home muestra Skills
- **THEN** presenta únicamente las seis categorías y sus capacidades aprobadas en texto agrupado, sin puntuaciones, niveles ni indicadores visuales de dominio

#### Scenario: Contact presenta solo destinos confirmados
- **WHEN** la home muestra Contact
- **THEN** el email abre un destino `mailto:`, GitHub enlaza al perfil confirmado, y no se muestran LinkedIn ni CV sin sus destinos verificados

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
La página raíz MUST proporcionar el título `Jean Carlo Cárdenas | Mobile Developer` y una meta description en español basada en el perfil confirmado, como `Portfolio de Jean Carlo Cárdenas, Mobile Developer con experiencia en Android, iOS y desarrollo multiplataforma.` La metadata MUST NOT indicar que el contenido está en preparación ni afirmar datos no confirmados. MUST NOT añadir canonical, imagen Open Graph, Twitter Card ni dominio de producción todavía no definidos.

#### Scenario: Metadata de la página inicial
- **WHEN** la página raíz se genera para producción
- **THEN** incluye title y description neutrales, y no publica canonical, imagen social ni perfil inventados

#### Scenario: Metadata de la home con perfil confirmado
- **WHEN** la página raíz se genera para producción
- **THEN** incluye el título y la descripción profesional aprobados, sin frases de contenido en preparación ni metadata social o de dominio no definida
