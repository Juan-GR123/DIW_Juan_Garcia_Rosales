// Seleccionar todos los <article> que contienen imágenes
const articulos3 = document.querySelectorAll(".sobreNosotros article");

const imagenesPorArticulo2 = [
    [
      { ancho: 600, png: "../img/estanteria-600px.png", webp: "../img/estanteria-600px.webp", jpg: "../img/estanteria-600px.jpg" },
      { ancho: 500, png: "../img/estanteria-500px.png", webp: "../img/estanteria-500px.webp", jpg: "../img/estanteria-500px.jpg" },
      { ancho: 300,  png: "../img/estanteria-300px.png", webp: "../img/estanteria-300px.webp", jpg: "../img/estanteria-300px.jpg" },
    ],
    [
      { ancho: 600, png: "../img/libros-600px.png", webp: "../img/libros-600px.webp", jpg: "../img/libros-600px.jpg" },
      { ancho: 500, png: "../img/libros-500px.png", webp: "../img/libros-500px.webp", jpg: "../img/libros-500px.jpg" },
      { ancho: 300,  png: "../img/libros-300px.png", webp: "../img/libros-300px.webp", jpg: "../img/libros-300px.jpg" },
    ],
];

  // Función para cambiar la imagen según el tamaño del contenedor
const cambiarImagen2 = (article, imagenes) => {
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
  const resizeObserver2 = new ResizeObserver(entries => {
    entries.forEach((entry) => {
      const index = Array.from(articulos3).indexOf(entry.target);
      if (index !== -1 && imagenesPorArticulo2[index]) {
        cambiarImagen2(entry.target, imagenesPorArticulo2[index]);
      }
    });
  });
  
  // Asociar cada <article> con su conjunto de imágenes
  articulos3.forEach((article, index) => {
    if (imagenesPorArticulo2[index]) {
      resizeObserver2.observe(article);
    }
  });
  