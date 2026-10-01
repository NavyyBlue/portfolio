## Purpose

Define la identidad visual compartida y el comportamiento de los temas claro y oscuro, incluida la preferencia del sistema, la elección manual accesible y el movimiento reducido.

## ADDED Requirements

### Requirement: Los temas usan una paleta editorial sobria
La interfaz MUST ofrecer un tema claro de fondo blanco cálido o gris muy claro, texto casi negro y superficies discretas, y un tema oscuro de fondo carbón profundo distinto del negro puro, texto claro y superficies ligeramente diferenciadas. El navy MUST usarse como acento moderado, no como color dominante de toda la página.

#### Scenario: Apariencia en tema claro
- **WHEN** el tema activo es claro
- **THEN** el contenido se muestra sobre fondos cálidos claros, con texto de alto contraste y superficies discretas

#### Scenario: Apariencia en tema oscuro
- **WHEN** el tema activo es oscuro
- **THEN** el contenido se muestra sobre carbón profundo, con texto claro, superficies diferenciadas y sin usar negro puro como fondo principal

### Requirement: La primera visita respeta la preferencia del sistema
Cuando no hay una elección manual guardada, el sistema MUST seleccionar el tema que corresponda a `prefers-color-scheme`.

#### Scenario: Primera visita con preferencia oscura
- **WHEN** no existe preferencia manual y el dispositivo solicita tema oscuro
- **THEN** la página inicia en tema oscuro

#### Scenario: Primera visita con preferencia clara
- **WHEN** no existe preferencia manual y el dispositivo solicita tema claro
- **THEN** la página inicia en tema claro

### Requirement: La elección manual es accesible y persistente
La interfaz MUST ofrecer un control de tema operable con teclado, cuyo nombre accesible comunique la acción disponible o el estado de forma inequívoca. Al cambiar el tema manualmente, MUST guardar la preferencia en `localStorage` y MUST respetarla en las visitas siguientes, incluso si difiere de la preferencia del sistema. Si el almacenamiento no está disponible, el control MUST seguir cambiando el tema durante la visita sin romper la página.

#### Scenario: Cambiar y recordar el tema
- **WHEN** la persona cambia manualmente el tema y vuelve a abrir el sitio
- **THEN** el tema elegido se restaura y prevalece sobre `prefers-color-scheme`

#### Scenario: Cambiar el tema sin almacenamiento disponible
- **WHEN** `localStorage` no puede leerse o escribirse
- **THEN** la persona puede cambiar el tema durante la visita y la página sigue funcionando

### Requirement: El tema correcto se aplica al iniciar sin un flash evitable
La página MUST aplicar la preferencia guardada o la del sistema antes de mostrar el contenido cuando sea razonablemente posible, y MUST conservar un fallback de CSS para `prefers-color-scheme` si el script temprano no se ejecuta.

#### Scenario: Visita con una elección guardada
- **WHEN** una persona con tema oscuro guardado carga una página
- **THEN** la primera presentación visible usa el tema oscuro sin mostrar primero el tema claro

### Requirement: Los estilos se basan en tokens nativos
Los estilos MUST definir CSS Custom Properties para roles de color y superficie, foregrounds, acento, bordes, spacing, radius, tipografía y transiciones o motion. Los tokens MUST cubrir ambos temas y evitar repetir valores de diseño sin necesidad. La tipografía principal MUST ser una sans-serif de sistema sobria y legible.

#### Scenario: Cambio de tema mediante tokens
- **WHEN** cambia el tema activo
- **THEN** fondos, texto, bordes y acentos cambian usando los tokens del tema, sin depender de un framework CSS

### Requirement: El movimiento respeta la preferencia de accesibilidad
Las transiciones o animaciones MUST ser cortas y discretas. Con `prefers-reduced-motion: reduce`, el sitio MUST eliminar o reducir el movimiento no esencial y MUST NOT depender de animación para comunicar información.

#### Scenario: Movimiento reducido solicitado
- **WHEN** el dispositivo solicita movimiento reducido
- **THEN** las animaciones y transiciones no esenciales se desactivan o reducen y todo el contenido sigue disponible
