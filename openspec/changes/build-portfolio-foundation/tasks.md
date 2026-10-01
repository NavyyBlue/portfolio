## 1. Design tokens and theme

- [x] 1.1 Definir los tokens CSS para colores, superficies, foregrounds, navy, bordes, spacing, radius, tipografía y motion, junto con los estilos globales mobile-first; verificar ambos temas y los contrastes mínimos de 4.5:1 para texto normal y 3:1 para texto grande.
- [x] 1.2 Implementar la preferencia inicial de `prefers-color-scheme`, aplicación temprana del tema, control accesible y persistencia manual en `localStorage`; verificar tema de sistema, override tras recargar, operación con teclado y fallback si el almacenamiento falla.

## 2. Home y contenido estructural

- [x] 2.1 Crear el layout Astro base con landmarks, enlaces de salto si se necesitan, title y meta description neutrales; verificar que la home tenga un único `h1` y metadata sin datos profesionales inventados.
- [x] 2.2 Implementar el header sticky, los anchors About, Experience, Projects y Contact y el control de tema; verificar activación con teclado, disponibilidad en mobile y que el header no tape los títulos de destino.
- [x] 2.3 Componer Hero, About y primitivas de sección con el nombre y rol provistos, intro marcada como placeholder, acciones hacia Projects y Contact y estados neutrales; verificar que no haya claims ni enlaces sociales sin confirmar.
- [x] 2.4 Preparar el modelo y timeline de Experience para fechas, empresa, cargo y descripción; verificar los campos soportados y que la colección vacía no renderice entradas profesionales ficticias.
- [x] 2.5 Preparar Skills, Contact y Footer; verificar que las colecciones vacías no muestren rankings, porcentajes, contactos inventados, enlaces rotos ni formularios.

## 3. Presentación y detalle de proyectos

- [x] 3.1 Definir el modelo tipado y la fuente en `src/data/` y crear showcases amplios con imagen, texto, tecnologías y enlaces opcionales; verificar el estado de colección vacía y la compatibilidad de campos sin agregar proyectos de prueba.
- [x] 3.2 Preparar `src/pages/projects/[slug].astro` y su generación estática desde slugs de proyectos; verificar que la colección vacía compile sin publicar detalles y que la plantilla derive sus rutas del dataset tipado, sin crear proyectos ficticios ni rutas de prueba.

## 4. Responsive, accesibilidad y cierre

- [x] 4.1 Ajustar las composiciones en mobile, tablet y desktop; verificar a 360 px, 768 px y 1280 px que navegación y contenido sean legibles, con jerarquía conservada y sin overflow horizontal.
- [x] 4.2 Revisar landmarks, jerarquía de encabezados, nombres accesibles, distinción entre botones y links y foco visible; verificar el recorrido completo con teclado y que ARIA se limite a lo que no expresa HTML semántico.
- [x] 4.3 Implementar transiciones discretas y soporte de `prefers-reduced-motion`; verificar con la preferencia reducida que el movimiento no esencial desaparezca o se reduzca y el contenido siga disponible.
- [x] 4.4 Ejecutar `npm run build` y revisar la salida estática; verificar que no se emitan case studies sin datos, no se hayan añadido frameworks UI/CSS ni dependencias, y que no exista contenido profesional inventado.
