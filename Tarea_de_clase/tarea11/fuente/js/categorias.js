let categorias = document.querySelectorAll('.categorias2 article');
let btnIzquierda3 = document.querySelector('.izquierda3');
let btnDerecha3 = document.querySelector('.derecha3');
let IndiceAct3 = 0; // Índice del artículo actual

// Función para actualizar la visibilidad de los eventos
function Cat() {
    categorias.forEach((categoria, indice) => {
       categoria.classList.toggle('active', indice === IndiceAct3);
    });
}

// Evento para botón "Izquierda"
btnIzquierda3.addEventListener('click', () => {
    IndiceAct3 = (IndiceAct3 - 1 + categorias.length) % categorias.length; // Moverse al evento anterior
    Cat();
});

// Evento para botón "Derecha"
btnDerecha3.addEventListener('click', () => {
    IndiceAct3 = (IndiceAct3 + 1) % categorias.length; // Moverse al siguiente evento
    Cat();
});

// Inicializar la vista
Cat();