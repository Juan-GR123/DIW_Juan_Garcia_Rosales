let libros1 = document.querySelectorAll('.libros article');
let btnIzquierda2 = document.querySelector('.izquierda2');
let btnDerecha2 = document.querySelector('.derecha2');
let IndiceAct2 = 0; // Índice del artículo actual

// Función para actualizar la visibilidad de los eventos
function Libros() {
    libros1.forEach((libro, indice) => {
       libro.classList.toggle('active', indice === IndiceAct2);
    });
}

// Evento para botón "Izquierda"
btnIzquierda2.addEventListener('click', () => {
    IndiceAct2 = (IndiceAct2 - 1 + libros1.length) % libros1.length; // Moverse al evento anterior
    Libros();
});

// Evento para botón "Derecha"
btnDerecha2.addEventListener('click', () => {
    IndiceAct2 = (IndiceAct2 + 1) % libros1.length; // Moverse al siguiente evento
    Libros();
});

// Inicializar la vista
Libros();