## 1. Perfil y metadata

- [x] 1.1 Extender Profile con campos data-driven para About y la descripción de metadata, hacer obligatoria la introducción y poblar únicamente el copy aprobado; verificar que Hero y About consuman esos valores y no muestren sus placeholders anteriores.
- [x] 1.2 Conectar Home con SiteLayout para derivar el título del nombre y rol y entregar la descripción confirmada; verificar el HTML generado para título y meta description, sin indicar contenido en preparación ni añadir metadata de dominio o redes sociales.

## 2. Skills y Contact

- [x] 2.1 Poblar los seis grupos de Skills con las capacidades exactas de la spec; verificar los grupos renderizados y la ausencia de porcentajes, niveles, rankings y tecnologías adicionales.
- [x] 2.2 Poblar Contact con el email y GitHub confirmados; verificar el destino mailto, el enlace normal de GitHub, la navegación por teclado y la ausencia de LinkedIn y CV.

## 3. Preservar la foundation

- [x] 3.1 Mantener vacíos los datos de Experience y Projects y sus estados neutrales identificados como placeholders; verificar que no haya registros ficticios ni rutas de proyecto generadas.
- [x] 3.2 Revisar el contenido integrado en tamaños de pantalla estrechos y amplios sin cambiar la foundation visual; verificar que enlaces y secciones sigan siendo utilizables por teclado y que no se haya alterado navegación, tema o layout.

## 4. Validación

- [x] 4.1 Confirmar que no se agregaron dependencias ni se modificaron manifiestos o lockfile y ejecutar npm run check, npm run build y openspec validate add-profile-content --type change --strict; verificar que los tres comandos finalicen correctamente.
