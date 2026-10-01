## Why

La home conserva placeholders para la introducción, About, Skills, Contact y metadata aunque ya existe información profesional explícita y verificada para reemplazarlos. Este cambio define cómo presentar esos datos en la home sin inventar afirmaciones ni alterar el resto de la foundation.

## What Changes

- Reemplazar la introducción pendiente del Hero con copy breve en español basado únicamente en la información profesional suministrada, preservando identidad y acciones actuales.
- Incorporar en About un resumen profesional verificado y mantener el contenido editorial conectado a los módulos de datos existentes.
- Completar `src/data/skills.ts` con los seis grupos y las tecnologías/prácticas proporcionadas, sin niveles, porcentajes ni rankings.
- Completar `src/data/contact.ts` con el email y GitHub confirmados; mantener LinkedIn y CV ausentes hasta contar con una URL verificada y un archivo real.
- Actualizar title y meta description de Home con datos verificados.
- Mantener Experience y Projects vacíos, con sus estados neutrales actuales. Preservar diseño, theme system, navegación y stack.

## Capabilities

### New Capabilities

Ninguna. El comportamiento pertenece a la home existente.

### Modified Capabilities

- `portfolio-home`: reemplazar placeholders principales por perfil, capacidades, contacto y metadata verificados, sin inventar datos ni poblar Experience o Projects.

## Impact

La futura implementación afectará `src/data/profile.ts`, `src/data/skills.ts`, `src/data/contact.ts`, la página Home y el consumo de metadata en el layout. No requiere dependencias nuevas ni cambia las capabilities `theme-system`, `project-presentation` o `project-quality-gates`.
