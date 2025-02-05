const body = document.querySelector('body'); 
const cesta = document.querySelector('.Cesta');  
const compra = document.querySelector('.compra');  
const cerrar = document.querySelector('.cerrarP');  
const registrar = document.querySelector('.carrito');  
const abrir = document.querySelector('.comprar');

// Mostrar la cesta al hacer clic en el botón "Comprar"
// Mostrar la cesta al hacer clic en el botón "Comprar"
registrar.addEventListener('click', () => {
    cesta.style.display = 'flex';
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  });

  
abrir.addEventListener('click' , ()=> {
    cesta.style.display = 'flex';
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    body.style.display = 'none';
});


// Cerrar la cesta al hacer clic en el botón de cerrar
cerrar.addEventListener('click', () => {
  cesta.style.display = 'none';
  body.style.backgroundColor = "white";
});



// Cerrar la cesta al hacer clic fuera de la ventana de compra
cesta.addEventListener('click', (e) => {
  if (e.target === cesta) {
    cesta.style.display = 'none';
    body.style.backgroundColor = "white";
  }
});
