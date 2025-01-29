const contenedor = document.getElementById("body");
const picture = document.getElementById("picture");
const sourceWebp = document.getElementById("sourceWebp");
const sourcePng = document.getElementById("sourcePng");
const imagen = document.getElementById("imagen");

// Definir imágenes disponibles según tamaño
// ¡¡¡Cuidado!!! La ruta de las imágenes es relativa al archivo HTML (que en este caso coincide con la de este script, pero podría no ser así)
const imagenes = [
  { ancho: 1200, png: "./img/colaborador--1200px.png", webp: "./img/colaborador--1200px.webp", jpg: "./img/colaborador--1200px.jpg" },
  { ancho: 768, png: "./img/colaborador--768px.png", webp: "./img/colaborador--768px.webp", jpg: "./img/colaborador--768px.jpg" },
  { ancho: 0, png: "./img/colaborador--480px.png", webp: "./img/colaborador--480px.webp", jpg: "./img/colaborador--480px.jpg" },
];

const imagenes2 = [
  { ancho: 1200, png: "./img/colaborador2--1200px.png", webp: "./img/colaborador2--1200px.webp", jpg: "./img/colaborador2--1200px.jpg" },
  { ancho: 768, png: "./img/colaborador2--768px.png", webp: "./img/colaborador2--768px.webp", jpg: "./img/colaborador2--768px.jpg" },
  { ancho: 0, png: "./img/colaborador2--480px.png", webp: "./img/colaborador2--480px.webp", jpg: "./img/colaborador2--480px.jpg" },
];

// Función para cambiar la imagen según el tamaño del contenedor
const cambiarImagen = (anchoContenedor) => {
  const imagenSeleccionada = imagenes.find(img => anchoContenedor >= img.ancho);

  // Si ya está cargada, no hacer nada
  if (imagen.dataset.actual === imagenSeleccionada.jpg) return;

  // Cambiar las fuentes de <source> y <img>
  sourcePng.srcset = imagenSeleccionada.png;
  sourceWebp.srcset = imagenSeleccionada.webp;
  imagen.src = imagenSeleccionada.jpg;
  
  // Guardar la imagen actual para evitar recargas innecesarias
  imagen.dataset.actual = imagenSeleccionada.jpg;
};



// Observar cambios en el tamaño del contenedor
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    cambiarImagen(entry.contentRect.width);
  }
});

resizeObserver.observe(contenedor);
