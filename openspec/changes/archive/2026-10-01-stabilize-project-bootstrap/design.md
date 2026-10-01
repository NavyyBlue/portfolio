## Context

Ver propuesta: `proposal.md`. El repositorio declara Node `>=22.12.0`, y el lockfile resuelve `undici@8.11.2` a través de Astro, que requiere `>=22.19.0`. La máquina actual usa Node `22.17.0`; no hay archivo de versión de Node en la raíz. Los assets actuales incluyen `public/images/`, `public/projects/` y `public/cv/`.

## Goals / Non-Goals

**Goals:**

- Declarar soporte solo para Node 22 desde `22.19.0`.
- Dar una selección de versión concisa a gestores compatibles, sin tratar el archivo de versión como mecanismo de instalación.
- Ubicar assets de proyectos bajo `public/images/projects/` y mantener `public/cv/`.
- Validar instalación y build con un Node que cumpla el rango.

**Non-Goals:**

- Cambiar, instalar o actualizar Node local antes de identificar el gestor de versiones disponible.
- Cambiar dependencias de runtime, diseño, contenido o comportamiento del portfolio.
- Configurar servicios, deployment o backend.

## Decisions

1. **Usar `package.json > engines.node` como contrato de soporte:** declarar `>=22.19.0 <23`. El límite inferior representa el mínimo requerido por `undici`; el límite superior mantiene explícitamente el proyecto en Node 22. Se prefiere esto a declarar solo `>=22.19.0`, que también permitiría majors futuras.

2. **Condicionar `.nvmrc` al gestor detectado:** comprobar primero qué gestor está disponible. Si admite `.nvmrc`, añadir el selector `22` para mantenerse dentro de la major mientras `engines` declara el mínimo exacto. Si el gestor no lo consume, omitir el archivo en vez de introducir una convención ignorada. Ninguna de las opciones modifica por sí sola la instalación local.

3. **Mantener el cambio sin capability spec:** este trabajo cambia convenciones del repositorio y configuración de herramientas, pero no comportamiento observable del portfolio. `.openspec.yaml` usa `skip_specs: true` y no se inventan requisitos funcionales.

4. **Reubicar solo la carpeta de assets de proyectos:** mover su contenido existente de `public/projects/` a `public/images/projects/`; conservar `public/images/` y `public/cv/`. No crear otra carpeta de proyectos en la raíz de `public/`.

## Risks / Trade-offs

- [Node local está por debajo del nuevo mínimo] → Antes de cambiarlo, identificar el gestor instalado; si no hay mecanismo disponible, solicitar orientación antes de instalar o modificar Node.
- [Un gestor puede ignorar `.nvmrc`] → `engines` permanece como declaración autoritativa; crear `.nvmrc` solo cuando el gestor detectado lo soporte.
- [La instalación puede fallar por la versión de Node] → Ejecutar `npm install` con Node 22.19.0 o una versión posterior de Node 22 y comprobar que no se emita el warning de engine de `undici`.

## Migration Plan

1. Confirmar el gestor disponible y seleccionar un Node compatible sin modificar la instalación hasta completar esa comprobación.
2. Actualizar `engines.node`; añadir `.nvmrc` solo si aplica según la decisión anterior.
3. Mover la carpeta de proyectos a `public/images/projects/` y retirar `public/projects/`.
4. Ejecutar `npm install`, revisar el lockfile y confirmar que desapareció el warning de engine de `undici`.
5. Ejecutar `npm run build`. Si la validación falla, corregir la causa antes de cerrar el cambio; revertir la declaración o el movimiento de assets solo si se confirma que la solución no puede mantenerse dentro de Node 22.

## Nota de validación final

- `npm ci` y `npm run build` finalizaron correctamente.
- En Windows, `npm ls --depth=0` puede reportar como `extraneous` paquetes opcionales o transitivos relacionados con Sharp/WASM. No se agregaron como dependencias directas y este reporte no bloquea el cambio.
- El aviso `EPERM` de limpieza de `node_modules` corresponde al entorno Windows/OneDrive; no afectó los archivos versionados ni el build.
