## Context

La home ya consume módulos de datos para el perfil, Skills, Contact, Experience y Projects. El modelo Profile actual contiene nombre, rol e introducción nullable; Skills usa grupos con nombre e items; Contact admite destinos opcionales. La composición existente incluye Hero, About, Skills, Contact y SiteLayout. Consulta proposal.md para la motivación y specs/portfolio-home/spec.md para el contenido y comportamiento requeridos.

## Goals / Non-Goals

**Goals:**

- Mantener el contenido aprobado en los módulos de datos existentes y conectar esos datos a las secciones y metadata de la home.
- Conservar los modelos de presentación existentes cuando cubran el requerimiento y extender solo Profile para About, texto del Hero y descripción de metadata.
- Mantener vacíos Experience y Projects sin introducir datos de ejemplo.

**Non-Goals:**

- Rediseñar componentes, navegación, tema, layout o estilos.
- Añadir modelos para empleadores, proyectos, educación u otras secciones aún sin información verificada.
- Incorporar dependencias, nuevas rutas o lógica de backend.

## Decisions

### Mantener los textos editoriales en Profile

Profile será la fuente de verdad para nombre, rol, introducción breve del Hero, resumen de About y descripción de metadata. La implementación hará la introducción no nullable, añadirá campos de texto para About y metadata, y conservará el nombre y rol existentes. El título de Home se derivará del nombre y rol para no duplicarlos.

Alternativas consideradas: dejar los textos en el markup de Home o en los componentes. Se elige Profile porque ya contiene la identidad del sitio y la home debe consumir datos, no replicar copy en la capa de presentación. Un modelo separado para About añadiría estructura sin aportar una necesidad actual.

El resumen inicial de About será: “Soy Mobile Developer con más de 4 años de experiencia desarrollando y evolucionando aplicaciones para Android, iOS y entornos multiplataforma. He trabajado con Kotlin, Java, Swift, SwiftUI y Flutter, participando en desarrollo, mantenimiento, migraciones, releases y gestión de dependencias. Mi enfoque está en construir soluciones móviles mantenibles y escalables, aplicando principios de arquitectura de software y buenas prácticas de calidad durante el ciclo de vida del producto.” Solo se permiten ajustes editoriales mínimos que mantengan los mismos hechos.

### Reutilizar las estructuras existentes para Skills y Contact

Skills conservará SkillGroup y sus seis grupos aprobados, sin añadir propiedades de nivel o ranking. Contact conservará ContactDetails; se completarán email y GitHub, mientras los campos opcionales de LinkedIn y CV seguirán sin valor. La vista seguirá usando los componentes actuales y sus patrones de enlaces.

Alternativas consideradas: crear esquemas distintos para cada grupo o hacer obligatorios todos los campos de contacto. Se descartan porque el modelo actual ya expresa grupos y destinos opcionales, y los datos de LinkedIn y CV no están confirmados.

### Pasar metadata explícita desde Home

Home entregará el título derivado del perfil y la descripción confirmada al SiteLayout mediante su API existente o una extensión mínima compatible con ella. La metadata de otras páginas queda fuera del cambio. No se añadirán canonical, tarjetas sociales ni un dominio.

Alternativas consideradas: reemplazar los valores por defecto globales del layout o construir metadata en una capa SEO nueva. Se elige configurar explícitamente la ruta Home para cumplir el requisito sin ampliar el comportamiento de otras rutas ni crear abstracciones.

### Preservar neutralidad de secciones aún vacías

No se añadirán registros a Experience ni Projects. Se conservarán sus estados neutrales actuales y se identificará como placeholder cualquier texto que indique que esas secciones están pendientes. La navegación y los componentes actuales se mantienen.

Alternativas consideradas: ocultar las secciones o rellenarlas con ejemplos. Se descartan porque el requerimiento preserva secciones vacías y prohíbe contenido inventado.

## Risks / Trade-offs

- [El copy aprobado puede quedar repetido entre varios módulos si se vuelve a escribir en markup] → Mantenerlo en Profile y derivar el título desde name y role.
- [Los grupos de Skills o los enlaces pueden no ajustarse a los componentes actuales] → Reutilizar SkillGroup y ContactDetails; comprobar renderizado, teclado y destinos durante la implementación sin añadir indicadores nuevos.
- [Los textos pueden ocupar más líneas en pantallas estrechas] → Conservar los estilos responsive existentes y revisar la home en tamaños estrechos durante la validación visual del cambio.
- [Los datos profesionales requieren exactitud] → Limitarse al copy y a las capacidades listadas en la spec, sin completar huecos por inferencia.

## Migration Plan

No hay migración de datos persistentes ni servicio que desplegar. En una implementación futura, actualizar los módulos de datos existentes, conectar Profile con Home y SiteLayout, y poblar Skills y Contact; después ejecutar los quality gates existentes y revisar que Experience y Projects sigan vacíos. La reversión consiste en revertir el commit de implementación, sin pasos de limpieza de datos.
