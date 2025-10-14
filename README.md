# Programación y Plataformas Web (PPW)
## Práctica 1 y 2 — Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Alexis Guaman  
**Repositorio:** https://github.com/kennypallchizaca-coder/icc-ppw-u1-miPrimeraPagina  
**GitHub Pages:** https://kennypallchizaca-coder.github.io/icc-ppw-u1-miPrimeraPagina/

---

## Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

### Estructura HTML utilizada
| Componente | Descripción | Implementación |
|---|---|---|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1 id="titulo">` y `<h2>` |
| `<section>` | Agrupa contenido | Secciones: “Sobre mí”, “Tabla”, “Etiquetas nuevas” |
| `<table id="tabla">` | Muestra elementos estudiados | `thead` + `tbody` con 2 filas iniciales |
| `<footer>` | Pie de página | Texto de curso |

### Nuevas etiquetas exploradas
| Etiqueta | Descripción | Implementación |
|---|---|---|
| `<figure>` + `<figcaption>` | Imagen con pie de foto | `img` `ejemplo.jpg` + leyenda |
| `<details>` + `<summary>` | Bloque plegable nativo | “Más info” abre/cierra contenido |

**Fragmento usado**
```html
<figure>
  <img id="logo" src="ejemplo.jpg" alt="Ejemplo" width="320" />
  <figcaption>Figura con figure + figcaption</figcaption>
</figure>

<details>
  <summary>Más info</summary>
  <p>Contenido ocultable con &lt;details&gt;.</p>
</details>

##Práctica 2 – Adición de CSS y JavaScript
1. Archivos agregados
| Archivo     | Descripción                                                  | Ubicación   |
|--------------|--------------------------------------------------------------|--------------|
| `styles.css` | Estilos (colores, tipografía, márgenes, tabla, botones)     | Carpeta raíz |
| `script.js`  | Eventos y funciones que añaden comportamiento dinámico       | Carpeta raíz |
Estructura final

icc-ppw-u1-miPrimeraPagina/
├─ index.html
├─ styles.css
├─ script.js
└─ README.md

2. Implementación en HTML

En <head>:

<link rel="stylesheet" href="styles.css" />


Antes de </body>:

<script src="script.js"></script>

3. Estilos aplicados con CSS
| Selector | Estilo implementado | Descripción |
|-----------|---------------------|--------------|
| `body` | `background-color`, `font-family`, `margin` | Fondo claro, tipografía del sistema, sin margen base |
| `header` | `background-color`, `color`, `text-align`, `padding` | Encabezado azul, texto blanco, centrado, espaciado |
| `h2` | `color`, `border-bottom`, `padding-bottom` | Subtítulo con línea inferior |
| `section` | `margin`, `padding`, `border-radius`, `box-shadow`, `background` | Tarjetas con relleno, esquinas redondeadas y sombra |
| `table` | `border-collapse`, `width` | Tabla de ancho completo y bordes unidos |
| `th, td` | `border`, `padding`, `text-align` | Celdas con borde y espaciado |
| `button` | `background-color`, `color`, `border-radius`, `cursor`, `:hover` | Botón primario con efecto hover |
| `button` | `transition: background-color .2s ease-in-out;` **(propiedad nueva)** | Transición suave en hover |
| `#logo` | `filter: sepia(25%);` **(propiedad nueva)** | Efecto sepia sobre la imagen |
Ejemplos del CSS real

button {
  background-color: #1e88e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  transition: background-color .2s ease-in-out;
}
button:hover { background-color: #166eb3; }

#logo { filter: sepia(25%); }

4. Interactividad agregada con JavaScript

Acciones incluidas en script.js:

a) Agregar fila a la tabla

document.getElementById('btn').addEventListener('click', () => {
  const tbody = document.querySelector('#tabla tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = '<td>&lt;footer&gt;</td><td>Pie de página</td>';
  tbody.appendChild(tr);
  alert('Fila agregada');
});


b) Cambiar color del título con botón

document.getElementById('btn1').onclick = () => {
  const h1 = document.querySelector('h1');
  const colores = ['#1e88e5','#43a047','#e53935','#8e24aa'];
  h1.style.color = colores[Math.floor(Math.random()*colores.length)];
};


c) Cambiar color del <h1> al pasar el cursor

const titulo = document.getElementById('titulo');
const colores = ['#1e88e5','#43a047','#e53935','#8e24aa','#ff6f00'];
let colorOriginal;

titulo.addEventListener('mouseenter', () => {
  colorOriginal = getComputedStyle(titulo).color;
  titulo.style.color = colores[Math.floor(Math.random()*colores.length)];
});
titulo.addEventListener('mouseleave', () => {
  titulo.style.color = colorOriginal;
});

Capturas de pantalla del proyecto final

image.png  image-1.png
