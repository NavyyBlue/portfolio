## Why

El bootstrap declara Node `>=22.12.0`, pero la instalación detectó que la dependencia transitiva `undici@8.11.2` requiere Node `>=22.19.0`. La estructura actual también ubica `public/projects/` fuera de `public/images/`; conviene corregir ambos contratos de infraestructura antes de iniciar features.

## What Changes

- Reubicar el directorio de assets de proyectos en `public/images/projects/` y conservar los archivos de CV bajo `public/cv/`.
- Establecer Node 22 LTS como la única major soportada, con mínimo `22.19.0`, y reflejarlo en la declaración de engines del proyecto.
- Evaluar si `.nvmrc` aporta una selección de versión útil para el gestor disponible; no cambiar la instalación local hasta identificar primero ese gestor.
- Verificar con `npm install` y `npm run build` que no aparezca el warning de engine de `undici` y que el build termine correctamente.
- Mantener el alcance en infraestructura: sin cambios visuales, contenido, dependencias de UI, backend, base de datos ni deployment.

## Capabilities

### New Capabilities

Ninguna. Este cambio estabiliza estructura y herramientas y no introduce comportamiento funcional del portfolio.

### Modified Capabilities

Ninguna.

## Impact

Afecta la organización de `public/`, la declaración de Node en `package.json` y posiblemente el lockfile y un archivo de versión de Node. No cambia rutas o comportamiento de páginas del portfolio.
