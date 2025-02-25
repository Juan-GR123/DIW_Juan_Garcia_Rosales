document.addEventListener("DOMContentLoaded", function () {
  const cesta = document.querySelector(".Cesta");
  const botonComprar = document.querySelector(".comprar");
  const botonComprar2 = document.querySelector(".comprar2");
  const botonCerrar = document.querySelector(".cerrarP");
  const mainP = document.querySelector("main");

  // Asegurar que la cesta esté oculta al inicio
  cesta.style.display = "none";

  // Mostrar la cesta al hacer clic en "Comprar"
  botonComprar.addEventListener("click", function () {
    cesta.style.display = "flex";
    cesta.style.position = "relative"; // O el valor que prefieras
    mainP.style.display = "none";
  });

  // Mostrar la cesta al hacer clic en "Comprar"
  botonComprar2.addEventListener("click", function () {
    cesta.style.display = "flex";
    cesta.style.position = "relative"; // O el valor que prefieras
    mainP.style.display = "none";
  });

  // Ocultar la cesta al hacer clic en "Cerrar"
  botonCerrar.addEventListener("click", function () {
    cesta.style.display = "none";
    mainP.style.display = "block";
  });


});
