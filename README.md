# Psicología Clínica — Salomé Argoti

Landing page profesional para una consulta de psicología clínica y psicoanálisis en Quito, Ecuador. Diseño oscuro refinado con animaciones sutiles, totalmente responsive y optimizado para GitHub Pages.

---

## ✨ Características

- **Diseño cohesivo** en tonos oscuros con acento dorado (`#c4a46b`)
- **Scroll Reveal** suave mediante `IntersectionObserver`
- **Navbar con scroll spy** — el link activo se actualiza automáticamente
- **Menú móvil** con overlay y hamburger animado
- **Ilustraciones SVG** inline (sin imágenes externas pesadas)
- **Página 404** con partículas animadas en canvas y parallax
- **Efecto ripple** en botones (jQuery)
- **100% responsive** — se adapta a cualquier dispositivo
- **Sin dependencias pesadas** — solo jQuery slim (30 KB minificado)

---

## 📂 Estructura

```
clinica/
├── index.html                  ← Landing page principal
├── 404.html                    ← Página de error personalizada
├── README.md                   ← Este archivo
├── SETUP.md                    ← Guía de configuración rápida
├── ESTRUCTURA-ARCHIVOS.md      ← Mapa de la estructura
└── assets/
    ├── css/
    │   ├── style.css           ← Estilos principales + responsive
    │   └── 404.css             ← Estilos exclusivos de la 404
    ├── js/
    │   ├── script.js           ← JS principal (reveal, nav, scroll)
    │   ├── app.js              ← Mejoras con jQuery (ripple, hover)
    │   └── 404.js              ← JS exclusivo 404 (partículas, parallax)
    └── images/
        └── favicon.svg         ← Favicon del sitio
```

---

## 🚀 Deploy en GitHub Pages

1. Haz fork o clona este repositorio
2. Ve a **Settings → Pages**
3. Selecciona la rama `main` (o `master`) y la carpeta **root `/`**
4. GitHub Pages generará la URL automáticamente

> Si el sitio se sirve desde una subcarpeta (ej. `https://usuario.github.io/clinica/`), los enlaces internos ya están relativos y funcionarán sin cambios.

---

## 🎨 Personalización rápida

### Colores (tokens CSS)

En `assets/css/style.css` busca la sección `:root`:

```css
:root {
  --bg:          #0e0e0c;   /* Fondo principal */
  --accent:      #c4a46b;   /* Acento dorado */
  --cream:       #e8e2d9;   /* Texto principal */
  --cream-mute:  #6b6560;   /* Texto secundario */
}
```

Cambiar `--accent` cambiará todos los elementos resaltados del sitio.

### Contenido textual

Todo el texto está directamente en `index.html`. Busca las secciones por sus comentarios HTML:

- `<!-- HERO -->` — Título principal
- `<!-- THE PAUSE -->` — Frase central
- `<!-- INTEGRACIÓN -->` — Los 3 pilares
- `<!-- MÉTODO -->` — Los 4 pasos
- `<!-- CONTACTO -->` — Llamada a la acción

### Links de redes sociales

En el `<footer>` de `index.html`, reemplaza los `href="#"` con tus enlaces reales:

```html
<a href="https://instagram.com/tu-perfil">Instagram</a>
<a href="https://wa.me/tunumero">WhatsApp</a>
```

### Botón CTA — conectar a formulario

El botón "Solicitar una sesión" actualmente tiene `href="#"`. Para conectarlo:

- **WhatsApp:** `href="https://wa.me/tunumero?text=Hola, quiero solicitar una sesión"`
- **Email:** `href="mailto:tu@correo.com?subject=Solicitud de sesión"`
- **Formulario externo:** reemplaza con la URL de tu formulario (Calendly, Google Forms, etc.)

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura accesible |
| CSS3 (variables, grid, flexbox) | Todo el estilo, responsive |
| JavaScript vanilla | Scroll reveal, nav spy, menú móvil |
| jQuery 3.7 slim | Ripple effect, mejoras interactivas |
| SVG inline | Ilustraciones sin peso de imagen |
| Canvas API | Partículas en la página 404 |
| IntersectionObserver | Animaciones al hacer scroll |
| Google Fonts | Playfair Display + Inter |

---

## 📱 Breakpoints responsive

| Breakpoint | Comportamiento |
|---|---|
| `> 860px` | Layout completo de escritorio |
| `≤ 860px` | Columnas apiladas, nav compacto |
| `≤ 560px` | Menú hamburger, márgenes reducidos |
| `≤ 360px` | Tipografía ajustada para pantallas pequeñas |

---

## 📝 Licencia

Este proyecto es para uso personal. Adapta el contenido y el diseño según necesites.
