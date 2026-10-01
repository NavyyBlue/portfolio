## Why

El proyecto no tiene hoy un chequeo estático reproducible separado del build, por lo que errores de tipos o de plantillas Astro pueden pasar al workflow de desarrollo sin un diagnóstico explícito. Definir un comando local basado en las herramientas oficiales de Astro permite detectar esos errores desde un clone limpio antes de incorporar más contenido.

## What Changes

- Definir una capability de quality gates para la validación local de Astro y TypeScript.
- Incorporar en la futura implementación un comando `npm run check` y conservar `npm run build` como validaciones separadas y explícitas.
- Usar las versiones compatibles de `@astrojs/check` y TypeScript únicamente como `devDependencies`, con instalación reproducible mediante el lockfile.
- Documentar brevemente en README el flujo `npm ci`, `npm run check` y `npm run build`.

## Capabilities

### New Capabilities
- `project-quality-gates`: contrato del chequeo local reproducible de Astro y TypeScript.

### Modified Capabilities

Ninguna. Las capabilities existentes describen comportamiento del portfolio y no requieren cambios para este workflow de desarrollo.

## Impact

La futura implementación afectará `package.json`, `package-lock.json` y README. Añadirá solo tooling de desarrollo; no cambiará comportamiento visual, datos, runtime, framework ni infraestructura.
