const body = document.getElementById('body');
const divR =document.getElementById('divR'); 
const cerrar = document.getElementById('cerrar');
const registrar= document.getElementById('registrar');
// Mostrar
registrar.addEventListener('click', () => {
  divR.style.display = 'grid';
  body.style.backgroundColor= "rgba(0, 0, 0, 0.5)";
});

// Cerrar 
cerrar.addEventListener('click', () => {
  divR.style.display = 'none';
  body.style.backgroundColor="white";
});

// Cerrar al hacer clic fuera de la ventana
divR.addEventListener('click', (e) => {
  if (e.target === divR) {
    divR.style.display = 'none';
    body.style.backgroundColor= "white";
  }
});