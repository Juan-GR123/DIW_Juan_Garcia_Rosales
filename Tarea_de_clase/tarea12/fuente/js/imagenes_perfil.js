// Seleccionar todos los <article> que contienen imágenes
const articulos3 = document.querySelectorAll(".titulo-perfil2 article");

const imagenesPorArticulo2 = [
    [
      { ancho: 200, png: "../img/libro-selva-200px.png", webp: "../img/libro-selva-200px.webp", jpg: "../img/libro-selva-200px.jpg" },
      { ancho: 100, png: "../img/libro-selva-100px.png", webp: "../img/libro-selva-100px.webp", jpg: "../img/libro-selva-100px.jpg" },
    ],
    [
      { ancho: 200, png: "../img/libro-Tejados_de_Cartón-200px.png", webp: "../img/libro-Tejados_de_Cartón-200px.webp", jpg: "../img/libro-Tejados_de_Cartón-200px.jpg" },
      { ancho: 100, png: "../img/libro-Tejados_de_Cartón-100px.png", webp: "../img/libro-Tejados_de_Cartón-100px.webp", jpg: "../img/libro-Tejados_de_Cartón-100px.jpg" },
    ],
    [
      { ancho: 200, png: "../img/portada-libros-200px.png", webp: "../img/portada-libros-200px.webp", jpg: "../img/portada-libros-200px.jpg" },
      { ancho: 100, png: "../img/portada-libros-100px.png", webp: "../img/portada-libros-100px.webp", jpg: "../img/portada-libros-100px.jpg" },
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
  