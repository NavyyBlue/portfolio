## 1. Design tokens and theme

- [ ] 1.1 Definir los tokens CSS para colores, superficies, foregrounds, navy, bordes, spacing, radius, tipografía y motion, junto con los estilos globales mobile-first; verificar ambos temas y los contrastes mínimos de 4.5:1 para texto normal y 3:1 para texto grande.
- [ ] 1.2 Implementar la preferencia inicial de `prefers-color-scheme`, aplicación temprana del tema, control accesible y persistencia manual en `localStorage`; verificar tema de sistema, override tras recargar, operación con teclado y fallback si el almacenamiento falla.

## 2. Home y contenido estructural

- [ ] 2.1 Crear el layout Astro base con landmarks, enlaces de salto si se necesitan, title y meta description neutrales; verificar que la home tenga un único `h1` y metadata sin datos profesionales inventados.
- [ ] 2.2 Implementar el header sticky, los anchors About, Experience, Projects y Contact y el control de tema; verificar activación con teclado, disponibilidad en mobile y que el header no tape los títulos de destino.
- [ ] 2.3 Componer Hero, About y primitivas de sección con el nombre y rol provistos, intro marcada como placeholder, acciones hacia Projects y Contact y estados neutrales; verificar que no haya claims ni enlaces sociales sin confirmar.
- [ ] 2.4 Preparar el modelo y timeline de Experience para fechas, empresa, cargo y descripción; verificar la colección vacía sin entradas ficticias y una secuencia de prueba local con datos temporales no persistidos.
- [ ] 2.5 Preparar Skills, Contact y Footer; verificar que las colecciones vacías no muestren rankings, porcentajes, contactos inventados, enlaces rotos ni formularios.

## 3. Presentación y detalle de proyectos

- [ ] 3.1 Definir el modelo tipado y la fuente en `src/data/` y crear showcases amplios con imagen, texto, tecnologías y enlaces opcionales; verificar la composición sin proyectos y con una entrada de prueba local, sin dejar contenido ficticio en el repositorio.
- [ ] 3.2 Preparar `src/pages/projects/[slug].astro` y su generación estática desde slugs de proyectos; verificar que una colección vacía compile sin publicar detalles y que una entrada local temporal genere la ruta esperada con los campos de detalle disponibles.

## 4. Responsive, accesibilidad y cierre

- [ ] 4.1 Ajustar las composiciones en mobile, tablet y desktop; verificar a 360 px, 768 px y 1280 px que navegación y contenido sean legibles, con jerarquía conservada y sin overflow horizontal.
- [ ] 4.2 Revisar landmarks, jerarquía de encabezados, nombres accesibles, distinción entre botones y links y foco visible; verificar el recorrido completo con teclado y que ARIA se limite a lo que no expresa HTML semántico.
- [ ] 4.3 Implementar transiciones discretas y soporte de `prefers-reduced-motion`; verificar con la preferencia reducida que el movimiento no esencial desaparezca o se reduzca y el contenido siga disponible.
- [ ] 4.4 Ejecutar `npm run build` y revisar la salida estática; verificar que no se emitan case studies sin datos, no se hayan añadido frameworks UI/CSS ni dependencias, y que no exista contenido profesional inventado.
