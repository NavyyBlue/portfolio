## Why

La home todavía especifica que Experience debe permanecer vacía, aunque ya se proporcionaron cinco experiencias profesionales verificadas. Este cambio actualiza el comportamiento documentado para mostrar esas entradas y conservar Selected Work vacío mientras no haya proyectos confirmados.

## What Changes

- Incorporar a Experience las cinco entradas verificadas, ordenadas de la más reciente a la más antigua y con descripciones editoriales breves en español.
- Mantener independientes los dos períodos de Jooycar y mostrar la relación `Encora — Interbank`.
- Retirar para la home poblada el estado pendiente de Experience, manteniendo el estado neutral de Selected Work.
- Preservar el perfil, las secciones restantes, la presentación visual existente, la semántica accesible y el stack del proyecto.
- Validar contenido, orden, adaptación responsive, ausencia de rutas de proyectos y los quality gates existentes.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `portfolio-home`: actualizar las reglas de Experience para mostrar las cinco entradas verificadas y mantener Selected Work sin proyectos y con su estado neutral.

## Impact

La implementación futura afectará los datos de Experience y su presentación en la home, reutilizando el modelo y la timeline existentes. No se esperan cambios en otras capabilities, dependencias, configuración del stack ni en las secciones Hero, About, Skills, Contact o metadata.
