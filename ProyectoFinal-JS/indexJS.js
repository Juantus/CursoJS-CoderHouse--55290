const menuPrincipal = () => {
  let nombreUser;
  let apellidoUser;
  let emailUser;
  let bandera = true;

  // New user crea un usuario básico donde alojamos los datos en variables globales para luego validarlos.
  const newUser = () => {
    nombreUser = prompt("Ingresar el nombre de usuario");
    apellidoUser = prompt("Ingresar el apellido de usuario");
    emailUser = prompt("Ingresa un email de registro");

    console.log("El usuario, " + nombreUser +  " ha sido creado con exito");
  };

  // Login user confirma que los datos ingresado en la creación de usuario sean los mismos a la hora de iniciar sesión.

  const loginUsuario = () => {
    let loginNomlUser;
    let loginEmailUser;

    loginNomlUser = prompt("Ingrese su nombre: ");

    if (loginNomlUser === nombreUser) {
      loginEmailUser = prompt("Ingrese su email: ");
      if (loginEmailUser === emailUser) {
        console.log("Ud, se a logueado correctamente");
        console.log("Bienvenido: " + nombreUser + " " + apellidoUser)
      } else {
        console.log("El nombre de usuario o email es incorrecto");
      }
    } else {
      console.log("El nombre ingresado no esta registrado.");
    }
  };


  // Esta función ejecuta el switch case donde se manejan las diferentes opciones.

  const switchMenuPrincipal = (props) => {
    switch (props) {
      case "1":
        return newUser();
        break;
      case "2":
        if (nombreUser && emailUser) {
          return loginUsuario();
          break;
        } else {
          return console.log("Primero debe crearse un usuario.");
          break;
        }
        break;
      case "0":
        return console.log("Gracias por usar nuestra plataforma.");
      default:
        alert("Debes elegir al menos una opción.");
        break;
    }
  };

  // Esta función es la encargada de recorrer el menu con un do while, y envia por parametros la variable elegida por el user a la funcion del switch

  const menuInteraccion = () => {
    let opcionMenu;

    do {
      opcionMenu = prompt(
        "Ingrese la opcion del menu que desee: \n1 - Registrar nuevo usuario; \n2 - Iniciar Sesión \n0 - Salir"
      );
      console.log(bandera)
      if (bandera) {
          alert("Las indicaciones e interacciones se pueden ver en consola.")
          bandera = false
          console.log(bandera)
      }
      switchMenuPrincipal(opcionMenu);
    } while (opcionMenu !== "0");
  };

  // Inicializamos la función que dispara el código.
  menuInteraccion();
};


