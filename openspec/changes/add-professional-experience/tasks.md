## 1. Datos de Experience

- [ ] 1.1 Completar `src/data/experience.ts` con las cinco entradas, campos y descripciones aprobados en `specs/portfolio-home/spec.md`; verificar cantidad, valores y orden descendente, manteniendo separadas las dos etapas de Jooycar.

## 2. Presentación y alcance

- [ ] 2.1 Verificar que la home consuma la colección mediante la timeline existente y muestre las cinco entradas como lista ordenada semántica, sin el placeholder de Experience ni empleos hardcodeados en markup.
- [ ] 2.2 Revisar la legibilidad de la timeline a 360px, 768px y 1280px en ambos temas; confirmar orden, lectura vertical en mobile y disposición de período y contenido en desktop, ajustando estilos existentes solo si se observa un problema concreto.
- [ ] 2.3 Confirmar que `src/data/projects.ts` sigue vacío, Selected Work conserva su placeholder neutral, no se generan rutas `/projects/*` y Hero, About, Skills, Contact y metadata permanecen sin cambios.

## 3. Validación

- [ ] 3.1 Ejecutar `npm run check`, `npm run build` y `openspec validate add-professional-experience --type change --strict`; verificar que pasen, inspeccionar `dist/index.html` para confirmar las cinco entradas y la ausencia del placeholder de Experience, y confirmar cero rutas de proyectos.
