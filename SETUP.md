# SETUP.md — Guía rápida de configuración

Pasos para tener el sitio funcionando en menos de 5 minutos.

---

## 1. Vista previa local (sin servidor)

Simplemente abre `index.html` con tu navegador.

```
doble clic → index.html
```

> **Nota:** Las animaciones de scroll requieren que se desplace la página. Si abres el archivo directamente desde el explorador de archivos, todo funcionará excepto los enlaces internos entre páginas (que necesitan un servidor estático). Para eso, ve al paso 2.

---

## 2. Servidor local recomendado

Si tienes **Node.js** instalado:

```bash
# Instalar globalmente (una sola vez)
npm install -g serve

# Entrar a la carpeta del proyecto
cd clinica

# Iniciar servidor
serve
```

El sitio estará disponible en `http://localhost:5000`

**Alternativa con Python:**

```bash
cd clinica
python -m http.server 8000
```

Disponible en `http://localhost:8000`

---

## 3. Deploy en GitHub Pages

### Opción A — Repositorio nuevo

1. Crea un repositorio en GitHub
2. Sube todos los archivos a la raíz
3. Ve a `Settings → Pages → Source: Deploy from a branch`
4. Selecciona `main` y carpeta `/` (root)
5. Haz clic en **Save**

Tu sitio estará en: `https://tu-usuario.github.io/nombre-del-repo/`

### Opción B — Rama `gh-pages` (dentro de un proyecto mayor)

1. Crea una rama llamada `gh-pages`
2. Sube solo los archivos del sitio a esa rama
3. GitHub Pages la detectará automáticamente

---

## 4. Configurar favicon

El favicon actual es un SVG genérico en `assets/images/favicon.svg`.

Para cambiar:
- Reemplaza el archivo `favicon.svg` con tu propio icono
- O cambia la línea en `index.html` y `404.html`:

```html
<link rel="icon" type="image/png" href="assets/images/favicon.png"/>
```

---

## 5. Conectar redes sociales

En `index.html`, busca el `<footer>` y reemplaza los enlaces:

```html
<a href="https://instagram.com/tu-usuario">Instagram</a>
<a href="https://wa.me/593XXXXXXXXX">WhatsApp</a>
<a href="mailto:tu@correo.com">Contacto</a>
```

El formato de WhatsApp internacional para Ecuador es: `+593` seguido del número sin el 0 inicial.

---

## 6. Conectar el botón CTA

Busca en `index.html` el botón principal:

```html
<a href="#" class="contact-cta"><span>Solicitar una sesión</span></a>
```

Reemplaza `href="#"` con:

| Opción | Ejemplo |
|---|---|
| WhatsApp | `https://wa.me/593XXXXXXXXX?text=Hola` |
| Email | `mailto:salome@correo.com?subject=Sesión` |
| Calendly | `https://calendly.com/tu-enlace` |
| Google Forms | `https://forms.google.com/...` |

---

## 7. Imagen Open Graph (redes sociales)

Cuando compartes el enlace en Facebook, WhatsApp o Twitter, aparece una previsualización. Para configurarla:

1. Crea una imagen de **1200 × 630 px** con el diseño que prefieras
2. Guárdala como `assets/images/og-image.png`
3. En `index.html` actualiza:

```html
<meta property="og:image" content="assets/images/og-image.png"/>
<meta property="og:url"   content="https://tu-usuario.github.io/clinica/"/>
```

---

## ✅ Checklist de lanzamiento

- [ ] Contenido textual revisado y personalizado
- [ ] Links de redes sociales conectados
- [ ] Botón CTA conectado a formulario/WhatsApp
- [ ] Favicon personalizado (opcional)
- [ ] Imagen Open Graph creada (opcional)
- [ ] Deploy en GitHub Pages completado
- [ ] Vista previa en móvil verificada
