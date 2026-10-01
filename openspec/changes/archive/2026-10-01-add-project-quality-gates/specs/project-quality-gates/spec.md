## Purpose

Esta capability define un control local, repetible y accesible desde un clone limpio para detectar errores estáticos en plantillas Astro y TypeScript antes de construir el portfolio.

## ADDED Requirements

### Requirement: El proyecto ofrece un chequeo estático reproducible de Astro y TypeScript
El proyecto MUST exponer `npm run check` para validar los archivos `.astro` y `.ts` incluidos en su proyecto TypeScript. El comando MUST usar tooling declarado e instalado localmente por el proyecto, sin requerir instalaciones globales. Los paquetes usados exclusivamente por este chequeo MUST estar declarados como `devDependencies` y quedar registrados en el lockfile.

#### Scenario: Chequeo desde un clone limpio
- **WHEN** una persona ejecuta `npm ci` y luego `npm run check` desde la raíz del repositorio
- **THEN** el chequeo usa dependencias locales, cubre los archivos incluidos en la configuración TypeScript y finaliza con código cero cuando no hay errores

#### Scenario: Error de tipos en una plantilla o archivo TypeScript
- **WHEN** un archivo `.astro` incluido contiene un error de tipo, por ejemplo una prop incompatible, o un archivo `.ts` incluido contiene un error de TypeScript
- **THEN** `npm run check` reporta el diagnóstico y termina con un código distinto de cero

### Requirement: El build estático sigue disponible como validación separada
El proyecto MUST conservar `npm run build` como comando independiente para generar el sitio estático. Añadir el chequeo de tipos MUST NOT eliminar ni reemplazar el build.

#### Scenario: Build del proyecto tras el chequeo
- **WHEN** se ejecutan `npm run check` y `npm run build` en secuencia con las fuentes válidas del proyecto
- **THEN** ambos comandos finalizan correctamente y el build genera el sitio estático

### Requirement: El workflow de validación está documentado
El README MUST documentar el flujo reproducible desde dependencias instaladas mediante `npm ci`, seguido por `npm run check` y `npm run build`, e indicar que el tooling de chequeo proviene de las dependencias del proyecto.

#### Scenario: Una persona prepara un clone nuevo
- **WHEN** una persona sigue la sección de desarrollo del README
- **THEN** puede instalar las dependencias y ejecutar el chequeo y el build sin depender de comandos o instalaciones globales no documentadas
