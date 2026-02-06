# TalkNet Web

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./logo_light.png">
  <img alt="TalkNet Logo" src="./logo.png" width="160">
</picture>

Landing oficial de **TalkNet**, un walkie‑talkie por Wi‑Fi con canales privados y **push‑to‑talk (PTT)**.

## Qué encontrarás aquí
- Página de descarga del APK.
- Información clara sobre el producto.
- Diseño alineado con la app Android.

## Características clave
- Walkie‑talkie en red local (Wi‑Fi).
- Canales privados con PIN.
- PTT real y baja latencia.

## Estructura
```
.
├─ index.html
├─ src/
│  └─ style.css
├─ icon.png
├─ logo.png
├─ logo_light.png
└─ AGENTS.md
```

## Desarrollo local
```bash
npm install
npm run dev
```

## Deploy en GitHub Pages
1. Sube este repo a GitHub (branch `main`).
2. En GitHub → **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `/root`
3. Espera unos minutos y accede a:
   `https://TU_USUARIO.github.io/TalkNet/`

## Cambiar el enlace de descarga
Reemplaza `https://TU-DOMINIO/talknet.apk` en `index.html` con la URL real del APK.

---

©2026 TalkNet App. Jose Álvarez Dev / Todos los derechos reservados.
