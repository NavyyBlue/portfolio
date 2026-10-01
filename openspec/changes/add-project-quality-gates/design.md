## Context

Ver `proposal.md` - Why. El proyecto usa Astro 7.3.5, `tsconfig.json` ya extiende `astro/tsconfigs/strict`, incluye `.astro/types.d.ts` y los archivos del proyecto, y excluye `dist`. `package.json` aún no tiene un script de typecheck. La ayuda local de `astro check` solicita `@astrojs/check` y `typescript`; la documentación de Astro indica que el comando diagnostica los archivos Astro y TypeScript del proyecto y termina con error cuando encuentra errores, mientras que `astro build` transpila sin hacer ese typecheck.

## Goals / Non-Goals

**Goals:**
- Dar al equipo un chequeo local que use herramientas del repositorio y que pueda ejecutarse de forma reproducible con `npm ci`.
- Mantener el typecheck y el build como pasos separados, fáciles de ejecutar y diagnosticar.
- Alinear las versiones de TypeScript con el rango peer que declara el checker.

**Non-Goals:**
- Añadir linting, formato automático, hooks Git, pruebas unitarias o E2E, CI/CD, GitHub Actions o deployment.
- Cambiar el `tsconfig.json`, agregar frameworks o alterar la aplicación.
- Prometer cobertura de errores de runtime, navegador, accesibilidad visual o exactitud del contenido profesional.

## Decisions

1. **Tooling y versiones.** Agregar como `devDependencies` `@astrojs/check` con rango `^0.9.10` y `typescript` con rango `^6.0.3`, y registrar la resolución elegida en `package-lock.json`. La CLI local de Astro 7.3.5 pide ambas dependencias para `astro check`. La metadata consultada de `@astrojs/check@0.9.10` declara el peer `typescript: ^5.0.0 || ^6.0.0`; TypeScript 6.0.3 está publicado y declara Node `>=14.17`, compatible con el rango Node 22 del proyecto. Aunque el último TypeScript publicado consultado es 7.0.2, queda fuera del peer del checker y no se propone. Mantener el rango de dependencias acotado y el lockfile comprometido permite instalación repetible sin fijar una instalación global.

2. **Comandos npm.** Añadir solamente `"check": "astro check"`. Mantener `"build": "astro build"` sin cambios. No añadir `npm run validate`: sería un alias de `npm run check && npm run build`, duplicaría una secuencia que README y automatizaciones futuras pueden ejecutar directamente y ocultaría qué paso falló tras el primer error. El flujo documentado será `npm ci`, `npm run check`, `npm run build`. Astro documenta que el check cubre los archivos del proyecto TypeScript y que los errores producen código de salida 1; también sincroniza los tipos Astro al ejecutarse.

3. **Configuración TypeScript.** Reutilizar el `tsconfig.json` estricto actual, que incluye las fuentes del proyecto y excluye `dist`; no introducir cambios de configuración sin un diagnóstico que los exija. Así el checker considera tipos de páginas, props Astro y módulos TypeScript incluidos en ese proyecto.

4. **Documentación mínima.** Añadir a README los tres comandos del flujo desde un clone, diferenciando chequeo estático y build. No documentar capacidades que no existen.

Fuentes técnicas consultadas durante la propuesta:
- Documentación TypeScript de Astro: https://docs.astro.build/en/guides/typescript/
- Referencia CLI de Astro: https://docs.astro.build/en/reference/cli-reference/#astro-check
- Metadata de `@astrojs/check@0.9.10`: https://www.npmjs.com/package/@astrojs/check/v/0.9.10
- Metadata de `typescript@6.0.3`: https://www.npmjs.com/package/typescript/v/6.0.3

## Risks / Trade-offs

- **El rango peer de TypeScript puede cambiar en futuras versiones del checker** → Mantener versiones compatibles declaradas y el lockfile juntos; actualizar ambos deliberadamente en otro cambio.
- **El check detecta diagnósticos estáticos dentro del proyecto TypeScript, no todos los defectos posibles** → Conservar `npm run build` como validación adicional y no describir este gate como sustituto de pruebas, linting o validación visual.
- **Los archivos excluidos o no incluidos por `tsconfig.json` quedan fuera del chequeo** → Mantener el alcance visible en la spec y revisar explícitamente el `include`/`exclude` si cambia la estructura del proyecto.

## Migration Plan

1. Instalar las versiones elegidas solo como dependencias de desarrollo y actualizar `package-lock.json`.
2. Añadir el script `check` sin alterar `dev`, `build` ni `preview`, y documentar la secuencia en README.
3. Verificar desde el lockfile con `npm ci`, ejecutar `npm run check` y `npm run build`; comprobar también que una violación temporal de tipos hace fallar el check y retirarla después de la prueba.
4. Si la instalación o el checker fueran incompatibles, revertir conjuntamente los cambios de `package.json`, `package-lock.json`, scripts y README; no relajar el rango peer sin investigar una versión compatible.
