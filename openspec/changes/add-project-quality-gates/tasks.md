## 1. Configurar el chequeo estático

- [x] 1.1 Declarar `@astrojs/check@^0.9.10` y `typescript@^6.0.3` en `devDependencies` y actualizar `package-lock.json`; verificar que ambos paquetes aparecen en las dependencias de desarrollo y que el lockfile registra sus versiones.
- [x] 1.2 Añadir `npm run check` como `astro check`; verificar que pasa con las fuentes actuales, que un error temporal de tipos en una fuente incluida provoca código distinto de cero y que, tras retirar el error, el check vuelve a pasar.

## 2. Documentar y validar el workflow

- [x] 2.1 Documentar en README los comandos `npm ci`, `npm run check` y `npm run build`; verificar que la secuencia coincide con los scripts y el lockfile del proyecto.
- [x] 2.2 Ejecutar `npm ci`, `npm run check` y `npm run build` en ese orden; verificar éxito desde la instalación limpia y confirmar que no se añadieron frameworks ni tooling fuera del alcance.
