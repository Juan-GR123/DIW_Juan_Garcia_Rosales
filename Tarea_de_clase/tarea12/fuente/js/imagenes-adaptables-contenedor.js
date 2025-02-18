// Seleccionar todos los <article> que contienen imágenes
const articulos2 = document.querySelectorAll(".eventos article");

// Definir conjuntos de imágenes para cada <article>
const imagenesPorArticulo = [
  [
    { ancho: 700, png: "../img/foto-libreria2-700px.png", webp: "../img/foto-libreria2-700px.webp", jpg: "../img/foto-libreria2-700px.jpg" },
    { ancho: 500, png: "../img/foto-libreria2-500px.png", webp: "../img/foto-libreria2-480px.webp", jpg: "../img/foto-libreria2-500px.jpg" },
    { ancho: 390, png: "../img/foto-libreria2-390px.png", webp: "../img/foto-libreria2-390px.webp", jpg: "../img/foto-libreria2-390px.jpg" },
  ],
  [
    { ancho: 700, png: "../img/estanteria-antigua-700px.png", webp: "../img/estanteria-antigua-700px.webp", jpg: "../img/estanteria-antigua-700px.jpg" },
    { ancho: 500, png: "../img/estanteria-antigua-500px.png", webp: "../img/estanteria-antigua-480px.webp", jpg: "../img/estanteria-antigua-500px.jpg" },
    { ancho: 390, png: "../img/estanteria-antigua-390px.png", webp: "../img/estanteria-antigua-390px.webp", jpg: "../img/estanteria-antigua-390px.jpg" },
  ],
  [
    { ancho: 700, png: "../img/estanteria-iluminada-700px.png", webp: "../img/estanteria-iluminada-700px.webp", jpg: "../img/estanteria-iluminada-700px.jpg" },
    { ancho: 500, png: "../img/estanteria-iluminada-500px.png", webp: "../img/estanteria-iluminada-480px.webp", jpg: "../img/estanteria-iluminada-500px.jpg" },
    { ancho: 390, png: "../img/estanteria-iluminada-390px.png", webp: "../img/estanteria-iluminada-390px.webp", jpg: "../img/estanteria-iluminada-390px.jpg" },
  ]
];

// Función para cambiar la imagen según el tamaño del contenedor
const cambiarImagen = (article, imagenes) => {
  const anchoContenedor = article.offsetWidth;
  const imagenSeleccionada = imagenes.find(img => anchoContenedor >= img.ancho) || imagenes[imagenes.length - 1];

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
  entries.forEach((entry) => {
    const index = Array.from(articulos2).indexOf(entry.target);
    if (index !== -1 && imagenesPorArticulo[index]) {
      cambiarImagen(entry.target, imagenesPorArticulo[index]);
    }
  });
});

// Asociar cada <article> con su conjunto de imágenes
articulos2.forEach((article, index) => {
  if (imagenesPorArticulo[index]) {
    resizeObserver.observe(article);
  }
});
