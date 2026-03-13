# ESTRUCTURA-ARCHIVOS.md

Mapa completo de la estructura del proyecto. Cada archivo, su propósito y cómo están conectados.

---

## 📁 Árbol de archivos

```
clinica/
│
├── index.html                  ← Página principal (landing page)
├── 404.html                    ← Página de error personalizada
│
├── README.md                   ← Documentación general del proyecto
├── SETUP.md                    ← Guía paso a paso de configuración
├── ESTRUCTURA-ARCHIVOS.md      ← Este archivo (mapa de estructura)
│
└── assets/                     ← Todos los recursos estáticos
    │
    ├── css/
    │   ├── style.css           ← Estilos de index.html (todo)
    │   └── 404.css             ← Estilos de 404.html (independiente)
    │
    ├── js/
    │   ├── script.js           ← JS principal (vanilla)
    │   ├── app.js              ← Mejoras interactivas (jQuery)
    │   └── 404.js              ← JS de la página 404
    │
    └── images/
        └── favicon.svg         ← Icono del sitio (SVG vectorial)
```

---

## 📄 Archivos HTML

### `index.html`
La página principal. Contiene:
- **Nav** con links de sección y hamburger para móvil
- **Hero** con ilustración SVG de red neuronal
- **Section Pause** — frase central filosófica
- **Section Integración** — los 3 pilares (neuro, psíquico, social) con SVGs
- **Section Método** — los 4 pasos del proceso terapéutico
- **Section Realidad** — bloque con espejo fracturado SVG
- **Section Contacto** — llamada a la acción
- **Footer** con enlaces sociales

Carga: `jQuery slim CDN` → `script.js` → `app.js`

### `404.html`
Página de error. Contiene:
- Canvas de partículas (fondo animado)
- Círculos concéntricos con parallax
- Número 404 con efecto 3D al hover
- Botones para volver al inicio

Carga solo: `404.js` (sin jQuery, por ser página ligera)

---

## 🎨 Archivos CSS

### `style.css` — Estilos principales

| Sección | Líneas aprox. | Qué controla |
|---|---|---|
| Tokens & Reset | 1–45 | Variables CSS globales, reset de márgenes |
| Noise Overlay | 46–52 | Textura de grano sutil sobre todo |
| Navbar | 53–145 | Nav fijo, estado scrolled, links activos, hamburger |
| Hero | 146–230 | Sección hero, ilustración, meta dots, scroll hint |
| Section Pause | 231–280 | Frase central con línea decorativa |
| Section Integración | 281–330 | Header + los 3 pilares con hover |
| Section Método | 331–410 | Grid 2 columnas, pasos con línea vertical |
| Section Realidad | 411–470 | Layout 2 columnas, tag etiqueta |
| Section Contacto | 471–530 | Centro con CTA animado |
| Footer | 531–580 | Layout flex, links con underline animado |
| Scroll Reveal | 581–600 | Clases `.reveal` y `.visible` |
| Responsive | 601–fin | Media queries 860px, 560px, 360px |

### `404.css` — Estilos de la página 404

| Elemento | Qué controla |
|---|---|
| `.page-404` | Layout centrado vertical |
| `.bg-circles` | Círculos concéntricos animados |
| `.number-404` | Número grande con gradiente |
| `.btn-404` | Botones primario y secundario |
| `.content-404` | Contenedor central del mensaje |

---

## ⚙️ Archivos JavaScript

### `script.js` — JavaScript principal (vanilla)

| Función | Responsabilidad |
|---|---|
| Scroll Reveal | `IntersectionObserver` que agrega `.visible` a elementos `.reveal` |
| Navbar Scrolled | Agrega clase `.scrolled` al nav cuando scroll > 60px |
| Nav Spy | Otro observer que marca el link activo según la sección visible |
| Menú Móvil | Toggle del hamburger y overlay, bloqueo de scroll en body |
| Smooth Scroll | Intercepta clicks en `a[href^="#"]` y hace scroll suave |
| Scroll Hint | Oculta el indicador "Leer ↓" tras el primer scroll |

### `app.js` — Mejoras con jQuery

| Función | Responsabilidad |
|---|---|
| Ripple Effect | Animación de onda al hacer clic en botones CTA |
| Pillar Line | Agrega línea inferior animada al hover de cada pilar |
| animateNumber() | Utilidad para animar contadores (preparada para uso futuro) |
| Modal Contacto | Stub de modal — se activa si agregas `.modal-contact` al DOM |
| Resize Handler | Throttled listener para ajustes en redimensionamiento |

### `404.js` — JavaScript exclusivo de la 404

| Función | Responsabilidad |
|---|---|
| Partículas Canvas | 55 partículas flotantes con conexiones entre las cercanas |
| Parallax Ratón | Los círculos de fondo se mueven sutilmente con el cursor |
| Countdown | Si existe `.countdown-number`, cuenta regresiva hasta redirigir |
| Hover 3D en 404 | El número "404" gira en 3D según la posición del ratón |

---

## 🔗 Diagrama de dependencias

```
index.html
  ├── style.css          (todos los estilos)
  ├── jQuery 3.7 slim    (CDN — 30KB)
  ├── script.js          (vanilla JS — se carga primero)
  └── app.js             (jQuery — se carga después)

404.html
  ├── 404.css            (estilos independientes)
  └── 404.js             (vanilla JS — sin jQuery)

Ambas páginas comparten:
  └── favicon.svg        (icono del sitio)
  └── Google Fonts       (Playfair Display + Inter)
```

---

## 📌 Notas de desarrollo

- **CSS Variables:** Todo el sistema de colores se controla desde `:root` en `style.css`. Cambiar `--accent` cambia todo el acento del sitio.
- **SVGs inline:** Las ilustraciones están directamente en el HTML (no son archivos externos). Esto mejora el rendimiento y permite animarlas con CSS.
- **jQuery solo donde hace falta:** `script.js` es vanilla para que cargue rápido. jQuery se usa solo en `app.js` para efectos visuales no críticos.
- **404.js sin jQuery:** La página 404 es ligera por diseño. No carga jQuery para reducir el peso.
- **Reveal delays:** Las clases `.reveal-delay-1`, `.reveal-delay-2`, `.reveal-delay-3` agregan retardo escalonado a las animaciones de scroll.
