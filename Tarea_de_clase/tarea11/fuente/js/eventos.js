
 let articulos = document.querySelectorAll('.eventos article');
 let btnIzquierda = document.querySelector('.izquierda');
 let btnDerecha = document.querySelector('.derecha');
 let IndiceAct = 0; // Índice del artículo actual

 // Función para actualizar la visibilidad de los eventos
 function Eventos() {
     articulos.forEach((articulo, indice) => {
         articulo.classList.toggle('active', indice === IndiceAct);
     });
 }

 // Evento para botón "Izquierda"
 btnIzquierda.addEventListener('click', () => {
     IndiceAct = (IndiceAct - 1 + articulos.length) % articulos.length; // Moverse al evento anterior
     Eventos();
 });

 // Evento para botón "Derecha"
 btnDerecha.addEventListener('click', () => {
     IndiceAct = (IndiceAct + 1) % articulos.length; // Moverse al siguiente evento
     Eventos();
 });
 // Inicializar la vista
 Eventos();