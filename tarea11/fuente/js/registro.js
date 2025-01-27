const mainRegistro = document.getElementsByClassName('mainRegistro');
const Formulario = document.getElementById('FormularioRegistro');
// Array para guardar los usuarios
const usuarios = [];

  // Registrar usuario
  Formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;

    // Guardar en el array
    usuarios.push({ usuario, email });

    console.log('Usuarios registrados:', usuarios);

    // Limpiar el formulario y cerrar la ventana
    Formulario.reset();
    //mainRegistro.style.display = 'none';
  });