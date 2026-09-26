# 🧪 Mezclas y Métodos de Separación

Juego educativo de Ciencias Naturales (3er grado) sobre mezclas homogéneas
y heterogéneas, y los métodos que se usan para separarlas. Hecho con
**React + Vite**.

## Secciones

- **🧫 Mezclas** — clasificá mezclas de la vida cotidiana en homogéneas o
  heterogéneas, por rondas generadas al azar.
- **🔬 Métodos** — tamización, filtración, decantación, evaporación e
  imantación, cada una con una animación SVG de cómo funciona.
- **🎮 Juego** — quiz de "¿qué método usarías?" con puntaje y mascota.

## Desarrollo local

```bash
npm install
npm run dev
```

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub (por ejemplo `mezclas-separacion`) y subí
   este proyecto.
2. En `package.json`, reemplazá `<tu-usuario>` en el campo `homepage` por
   tu usuario de GitHub.
3. Si el repositorio tiene otro nombre, actualizá también el `base` en
   `vite.config.js` (tiene que ser `/nombre-del-repo/`).
4. Corré:

   ```bash
   npm run deploy
   ```

   Esto compila el proyecto y publica la carpeta `dist` en la rama
   `gh-pages`. Después activá GitHub Pages en el repo (Settings → Pages)
   apuntando a esa rama, igual que en tu otro proyecto de función lineal.
