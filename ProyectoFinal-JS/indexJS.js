const menuPrincipal = () => {
  let bandera = true;
  let loginOnOff = false;
  const arrayPersonas = [];

  //Se crea la clase usaurio que nos dara el entorno de informacion para nuestro array de users.
  class Usuario {
    constructor(
      nombre,
      apellido,
      dni,
      usuario,
      password,
      fechaCreacionAccount
    ) {
      this.nombre = nombre.toLowerCase();
      this.apellido = apellido.toLowerCase();
      this.dni = dni;
      this.usuario = usuario;
      this.password = password;
      this.fechaCreacionAccount = fechaCreacionAccount;
    }
  }

  // New user crea un usuario utilizando la clase de referencia. Luego se utilizara esta clase para validar los datos cargados.
  const newUser = () => {
    let nombrePers = prompt("Ingresar el nombre del usuario: ");
    let apellidoPers = prompt("Ingresar el apellido de usuario: ");
    let dni = prompt("Ingresar Numero de Documento: ");
    let nombreUser = prompt("Ingrese su nombre de usuario: ");
    //Valida que el nombre de usuario no este ya en uso.
    if (arrayPersonas.length > 0) {
      arrayPersonas.map((props) => {
        while (props.usuario === nombreUser.toLocaleLowerCase()) {
          alert("El nombre de usuario ya esta en uso.");
          nombreUser = prompt("Ingrese un nuevo nombre de usuario:  ");
        }
      });
    }
    let password = prompt("Ingrese la password deseada: ");
    let fechaCreacionAccount = new Date();

    const usuario = new Usuario(
      nombrePers,
      apellidoPers,
      dni,
      nombreUser,
      password,
      fechaCreacionAccount
    );

    arrayPersonas.push(usuario);

    console.log("El usuario, " + nombreUser + " ha sido creado con exito");
  };

  // Login user confirma que los datos ingresado en la creación de usuario sean los mismos a la hora de iniciar sesión.

  const loginUsuario = () => {
    let loginNomlUser;
    let loginPassword;
    let banderaLog = false;

    loginNomlUser = prompt("Ingrese su nombre de usuario: ");
    loginPassword = prompt("Ingrese su contraseña");

    for (let i = 0; i < arrayPersonas.length; i++) {
      if (loginNomlUser === arrayPersonas[i].usuario) {
        if (loginPassword === arrayPersonas[i].password) {
          console.log("Se inicio sesión correctamente");
          console.log("Bienvenido, " + loginNomlUser);
          banderaLog = true;
          loginOnOff = true;
          break;
        }
      }
    }
    if (banderaLog === false) {
      alert("El nombre de usuario y o contraseña es incorrecto");
      loginUsuario();
    }
  };

  //Esta funcion nos devuelve nuestro array de usuarios ordenados por documento. Es necesario estar logueado para usar esta funcion
  const splitOrder = () => {
    arrayPersonas.sort((a, b) => a.dni - b.dni);
    console.table(arrayPersonas);
  };

  // Esta función ejecuta el switch case donde se manejan las diferentes opciones.

  const switchMenuPrincipal = (props) => {
    switch (props) {
      case "1":
        return newUser();
        break;
      case "2":
        if (arrayPersonas.length > 0) {
          return loginUsuario();
          break;
        } else {
          return console.log("Primero debe crearse un usuario.");
          break;
        }
        break;
      case "3":
        if (loginOnOff) {
          return splitOrder();
          break;
        } else {
          console.log("Para utilizar esta función debe estar logueado");
        }
        break;
      case "4":
        if (loginOnOff) {
          loginOnOff = false;
          console.log("Sesión cerrada con éxito");
          break;
        } else {
          console.log("No hay ninguna sesión iniciada.");
          break;
        }
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
        "Ingrese la opcion del menu que desee: \n1 - Registrar nuevo usuario. \n2 - Iniciar Sesión. \n3 - Mostrar lista de usuarios ordenada por dni. \n4 - Cerrar Sesión  \n0 - Salir"
      );
      if (bandera) {
        alert("Las indicaciones e interacciones se pueden ver en consola.");
        bandera = false;
      }
      switchMenuPrincipal(opcionMenu);
    } while (opcionMenu !== "0");
  };

  // Inicializamos la función que dispara el código.
  menuInteraccion();
};
