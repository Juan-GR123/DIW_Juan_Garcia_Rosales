document.addEventListener('DOMContentLoaded', () => {
    const desplazamiento = document.querySelector('.desplazamiento');
    const btnIzquierda4 = document.querySelector('.izquierda3');
    const btnDerecha4 = document.querySelector('.derecha3');
    const categorias2 = document.querySelectorAll('.cat');

    const categoriasVisibles = 4; // Número de categorías visibles
    const categoriaWidth = 120; // Ancho de cada categoría (incluyendo margen)
    let IndiceAct4 = 0; // Índice de la primera categoría visible

    // Función para actualizar el desplazamiento
    function updateSlider() {
        const desplazamiento2 = -(IndiceAct4 * categoriaWidth);
        desplazamiento.style.transform = `translateX(${desplazamiento2}px)`;
    }

    // Evento para el botón "Izquierda"
    btnIzquierda4.addEventListener('click', () => {
        IndiceAct4= Math.max(IndiceAct4 - 1, 0); // Evita índices negativos
        updateSlider();
    });

    // Evento para el botón "Derecha"
    btnDerecha4.addEventListener('click', () => {
        IndiceAct4 = Math.min(IndiceAct4 + 1, categorias2.length - categoriasVisibles); // Evita desbordarse
        updateSlider();
    });

    // Inicializa el desplazamiento
    updateSlider();
});