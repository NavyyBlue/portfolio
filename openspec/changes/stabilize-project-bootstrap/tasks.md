## 1. Alinear la versión de Node

- [ ] 1.1 Identificar el gestor de versiones de Node disponible en el equipo y cómo selecciona versiones, sin modificar la instalación; registrar el mecanismo detectado y detenerse para consultar al usuario si no hay uno adecuado.
- [ ] 1.2 Con el mecanismo confirmado, seleccionar Node 22 versión 22.19.0 o posterior antes de instalar dependencias; verificar `node --version` y no cambiar a otra major.
- [ ] 1.3 Declarar `engines.node` como `>=22.19.0 <23` en `package.json` y añadir `.nvmrc` con `22` solo si el gestor detectado lo admite; verificar el valor del manifiesto con `npm pkg get engines.node` y comprobar el archivo de versión cuando aplique.

## 2. Corregir la estructura de assets

- [ ] 2.1 Reubicar el contenido de `public/projects/` bajo `public/images/projects/`, conservar `public/images/` y `public/cv/`, y retirar la carpeta independiente; verificar que exista `public/images/projects/`, que `public/cv/` se conserve y que `public/projects/` ya no exista.

## 3. Validar instalación y build

- [ ] 3.1 Ejecutar `npm install` con Node 22.19.0 o posterior dentro de Node 22, revisar el lockfile actualizado y confirmar que la salida no contiene un warning de engine para `undici@8.11.2`.
- [ ] 3.2 Ejecutar `npm run build` con el runtime compatible y confirmar que el comando termina correctamente.

