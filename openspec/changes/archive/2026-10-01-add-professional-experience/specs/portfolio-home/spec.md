## MODIFIED Requirements

### Requirement: Las secciones de contenido no inventan información profesional
About MUST presentar un resumen en español basado solo en el perfil verificado: más de 4 años de experiencia en desarrollo móvil para Android, iOS y entornos multiplataforma; trabajo con Kotlin, Java, Swift, SwiftUI y Flutter; participación en desarrollo, mantenimiento, migraciones, procesos de release y gestión de dependencias; y enfoque en soluciones mantenibles y escalables, principios de arquitectura y calidad durante el ciclo de vida del producto. Experience MUST presentar las cinco entradas profesionales verificadas definidas en el requisito `Experience admite una timeline vertical estructurada`, sin mostrar el estado pendiente cuando esas entradas estén presentes. Selected Work MUST permanecer sin entradas mientras no se proporcionen proyectos verificados y MUST conservar su estado neutral, identificado como placeholder. La página MUST NOT inventar empleadores, clientes, fechas, cargos, logros, proyectos, educación, certificaciones, idiomas ni otros claims profesionales; únicamente puede presentar para Experience los datos expresamente aprobados en esta especificación.

#### Scenario: About usa únicamente información confirmada
- **WHEN** la home presenta About
- **THEN** la sección muestra la introducción profesional verificada y no atribuye empleadores, logros, clientes o proyectos no proporcionados

#### Scenario: Secciones sin datos confirmados
Nombre heredado del escenario previo; el WHEN/THEN describen el estado vigente con Experience confirmada y Selected Work sin proyectos.
- **WHEN** la home se genera con las cinco entradas verificadas de Experience y sin entradas de proyectos verificadas
- **THEN** Experience muestra las cinco entradas sin el estado pendiente, mientras Selected Work no muestra proyectos y conserva únicamente su estado neutral claramente identificado como placeholder

#### Scenario: Experience y Selected Work continúan vacías
Nombre conservado por continuidad del identificador OpenSpec; el resultado vigente no deja Experience vacía.
- **WHEN** se presenta la home después de incorporar las cinco experiencias verificadas y antes de incorporar proyectos verificados
- **THEN** Experience muestra las cinco entradas aprobadas y Selected Work continúa sin entradas con su estado neutral claramente identificado como placeholder

#### Scenario: Selected Work continúa sin entradas verificadas
- **WHEN** no hay proyectos confirmados
- **THEN** Selected Work permanece estructuralmente disponible, no muestra entradas y conserva su estado neutral claramente identificado como placeholder

### Requirement: Experience admite una timeline vertical estructurada
Experience MUST mostrar exactamente las siguientes cinco entradas verificadas, desde la más reciente a la más antigua, conservando sus períodos como etapas independientes:

1. `May. 2026 – Actualidad` — `Globant` — `Android Mobile Developer Ssr` — “Desarrollo y mantengo funcionalidades Android nativas con Kotlin y Jetpack Compose, aplicando MVI y Clean Architecture. Integré Google Pay y lideré la migración del flujo de aprovisionamiento de tarjetas a Unified Push Provisioning (UPP).”
2. `Dic. 2025 – Mar. 2026` — `Jooycar` — `Mobile Developer` — “Desarrollé y mantuve aplicaciones móviles con personalizaciones específicas por cliente, implementando funcionalidades y resolviendo incidencias en Android. También contribuí en iOS con Swift y SwiftUI y participé en procesos de release.”
3. `Abr. 2025 – Dic. 2025` — `Encora — Interbank` — `iOS Developer` — “Participé en el mantenimiento y evolución de la aplicación iOS de Interbank, incorporando mejoras funcionales y correcciones de incidencias. También contribuí a optimizar los tiempos de carga iniciales de la aplicación.”
4. `Dic. 2024 – Mar. 2025` — `Jooycar` — `Mobile Developer` — “Contribuí a la migración de una aplicación nativa a Flutter y diseñé e implementé un framework interno para la gestión desacoplada de servicios con Clean Architecture. También participé en mejoras de rendimiento y estabilidad.”
5. `Oct. 2023 – Dic. 2024` — `HIPER S.A` — `Android Developer` — “Mantuve y evolucioné aplicaciones Android transaccionales para dispositivos POS con Java y Android SDK. Optimicé actualizaciones de interfaz y descargas en entornos de baja conectividad y apoyé despliegues productivos.”

Cada entrada MUST presentar período, empresa, cargo y descripción en español de uno o dos enunciados. La secuencia MUST conservarse como lista ordenada semántica (`<ol>` con `<li>` por entrada). La timeline MUST mantener lectura vertical legible en mobile y una composición de período y contenido que aproveche el espacio disponible en desktop. Las dos etapas de Jooycar MUST permanecer separadas. El contenido MUST NOT agregar métricas, clientes, logros, tecnologías ni otros datos no aprobados, ni reinterpretar períodos o fusionar entradas.

#### Scenario: Las cinco experiencias aparecen en orden cronológico inverso
- **WHEN** una persona abre la home con la experiencia profesional verificada
- **THEN** encuentra exactamente cinco entradas en este orden: Globant, Jooycar de Dic. 2025–Mar. 2026, Encora — Interbank, Jooycar de Dic. 2024–Mar. 2025 e HIPER S.A

#### Scenario: Timeline sin experiencias cargadas
Nombre heredado del escenario previo; para este change, el estado esperado es la timeline cargada con los cinco registros verificados.
- **WHEN** la home se genera con las cinco experiencias aprobadas en la colección
- **THEN** Experience presenta esas cinco entradas y no muestra el estado pendiente ni posiciones, empresas o fechas ficticias

#### Scenario: Timeline con datos confirmados
- **WHEN** hay entradas verificadas de experiencia en la home
- **THEN** cada entrada presenta período, empresa, cargo y descripción breve en la secuencia cronológica aprobada

#### Scenario: Cada entrada presenta los datos profesionales aprobados
- **WHEN** la timeline muestra una de las cinco experiencias
- **THEN** presenta el período, la empresa, el cargo y su descripción breve aprobada, sin métricas, clientes, logros o tecnologías añadidos

#### Scenario: Las etapas de Jooycar siguen siendo independientes
- **WHEN** la timeline presenta ambas experiencias de Jooycar
- **THEN** muestra dos entradas distintas con sus períodos, cargos y descripciones correspondientes, sin fusionarlas ni cambiar sus fechas

#### Scenario: La timeline conserva semántica y legibilidad responsive
- **WHEN** la home se muestra a 360px, 768px o 1280px de ancho
- **THEN** las cinco entradas mantienen su orden en una lista ordenada accesible y la timeline conserva lectura vertical clara en mobile y una disposición de período y contenido legible en desktop
