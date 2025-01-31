const contenedor = document.querySelector("section");

// Seleccionar todos los <article> que contienen imágenes
const articulos = document.querySelectorAll("#colaboradores article");

const main = document.querySelector("#mainP");

// Definir conjuntos de imágenes para cada <article>
const imagenesPorArticulo = [
  [ // Imágenes para el primer <article>
    { ancho: 1200, png: "./img/colaborador--1200px.png", webp: "./img/colaborador--1200px.webp", jpg: "./img/colaborador--1200px.jpg" },
    { ancho: 768, png: "./img/colaborador--768px.png", webp: "./img/colaborador--768px.webp", jpg: "./img/colaborador--768px.jpg" },
    { ancho: 0, png: "./img/colaborador--480px.png", webp: "./img/colaborador--480px.webp", jpg: "./img/colaborador--480px.jpg" },
  ],
  [ // Imágenes para el segundo <article>
    { ancho: 1200, png: "./img/colaborador2--1200px.png", webp: "./img/colaborador2--1200px.webp", jpg: "./img/colaborador2--1200px.jpg" },
    { ancho: 768, png: "./img/colaborador2--768px.png", webp: "./img/colaborador2--768px.webp", jpg: "./img/colaborador2--768px.jpg" },
    { ancho: 0, png: "./img/colaborador2--480px.png", webp: "./img/colaborador2--480px.webp", jpg: "./img/colaborador2--480px.jpg" },
  ],
];

/*const imagenesporArticulo2 = [
  [
    { ancho: 1200, png: "../img/foto-libreria2-1200px.png", webp: "../img/foto-libreria2-1200px.webp", jpg: "../img/foto-libreria2-1200px.jpg" },
    { ancho: 768, png: "../img/foto-libreria2-768px.png", webp: "../img/foto-libreria2-768px.webp", jpg: "../img/foto-libreria2-768px.jpg" },
    { ancho: 0, png: "../img/foto-libreria2-480px.png", webp: "../img/foto-libreria2-480px.webp", jpg: "../img/foto-libreria2-480px.jpg" },
  ],
];*/

const cambiarImagen = (article, imagenes) => {
  const anchoContenedor = article.offsetWidth;
  const imagenSeleccionada = imagenes.find(img => anchoContenedor >= img.ancho);

  const picture = article.querySelector("picture");
  const sourcePng = picture.querySelector("source[type='image/png']");
  const sourceWebp = picture.querySelector("source[type='image/webp']");
  const imagen = picture.querySelector("img");

  // Si ya está cargada, no hacer nada
  if (imagen.dataset.actual === imagenSeleccionada.jpg) return;

  // Cambiar las fuentes de <source> y <img>
  sourcePng.srcset = imagenSeleccionada.png;
  sourceWebp.srcset = imagenSeleccionada.webp;
  imagen.src = imagenSeleccionada.jpg;

  // Guardar la imagen actual para evitar recargas innecesarias
  imagen.dataset.actual = imagenSeleccionada.jpg;
};

// Observar cada artículo individualmente con sus propias imágenes


const resizeObserver = new ResizeObserver(entries => {
  entries.forEach((entry, index) => {
    if (imagenesPorArticulo[index]) {
      cambiarImagen(entry.target, imagenesPorArticulo[index]);
    }
  });
});

/*const resizeObserver = new ResizeObserver(entries => {
  entries.forEach((entry, index) => {
    if (imagenesPorArticulo[index]) {
      cambiarImagen(entry.target, imagenesPorArticulo[index]);
    } else if (imagenesporArticulo2[index]) {
      cambiarImagen(entry.target, imagenesporArticulo2[index]);
    }
  });
});*/



// Asociar cada <article> con su conjunto de imágenes
articulos.forEach((article) => resizeObserver.observe(article));