const d = document;
const formLog = d.getElementById("formLogin");
const bienvenida = d.getElementById("bienvenidaUser");

d.addEventListener("DOMContentLoaded", function () {
  //Aca es donde disparamos la visualizacion del modal
  const showModalBtn = d.getElementById("showModalBtn");
  const loginModal = d.getElementById("loginModal");
  const closeModal = d.getElementById("closeModal");

  //si la sesion del Usuario ya esta iniciada se le preg si desea cerrar sesion
  showModalBtn.addEventListener("click", function () {
    let log = sessionStorage.getItem("log");
    if (log === "false") {
      loginModal.style.display = "block";
    } else {
      swal("Seguro que quiere cerrar sesión?", " ", "warning").then(() => {
        sessionStorage.setItem("log", false);
        swal("Sesion cerrada con exito", " ", "success");
        showModalBtn.innerText = "Iniciar Sesión";
      });
    }
  });
  //cierra el modal al clickear la X
  closeModal.addEventListener("click", function () {
    loginModal.style.display = "none";
  });

  //Cierra el modal al clickear afuera del modal
  window.addEventListener("click", function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
  });

  const forgotPasswordLink = d.getElementById("forgotPassword");
  forgotPasswordLink.addEventListener("click", function (event) {
    event.preventDefault();
    swal("Esta URL esta en desarrollo", "Disculpe las molestias.", "warning");
  });
});

const btnLog = d.getElementById("btnLogin");

//Función donde se valida el usuario recien logueado

btnLog.addEventListener("click", function (event) {
  event.preventDefault();
  const userNameLog = d.getElementById("username").value;
  const userPassLog = d.getElementById("password").value;

  let loginResult = checkLogin(userNameLog, userPassLog);

  // Si todo esta OK se envia mensaje de bienvenida y loguin exitoso
  if (loginResult) {
    swal("Inicio de Sesión Correcto", `Bienvenido ${userNameLog}`, "success");
    bienvenida.innerHTML = `<h3>Bienvenido, ${userNameLog}!</h3>`;
    loginModal.style.display = "none";
    formLog.reset();
    sessionStorage.setItem("log", true);
    setBtnSesion(userNameLog);
  } else {
    swal(
      "No se pudo iniciar sesión",
      "Nombre de usuario o contraseña incorrectos",
      "error"
    );
    formLog.reset();
  }
});

// funcion que nos devuelve la busqueda de usuario y contraseña exitos o no.
function checkLogin(user, pass) {
  let arrListUser = searchArrUser();

  const login = arrListUser.find(
    (usuario) => usuario.nameUser === user && usuario.passUser === pass
  );
  const succesfully = login ? true : false;
  return succesfully;
}

//funcion que nos devuelve el array de usuarios obtenido del local storage

function searchArrUser() {
  let arrUser = localStorage.getItem("usuarios");
  return JSON.parse(arrUser) || [];
}

//Funcion que nos modifica el btn de inicio de sesion por uno de cierre de sesion.
// Y guarda este valor en sessionStorage para ser consultado desde otro lado
const setBtnSesion = (i) => {
  const btn = d.getElementById("showModalBtn");
  let data = sessionStorage.getItem("log");
  if (data) btn.innerText = "Cerrar Sesión";
};

/* 
Gracias por el desarrollo de la clase, perdone la desprolijidad tanto del código como de los estilos
Sinceramente estuve con dias muy atareados a nivel laboral y se me hizo complicado llegar en tiempo 
y forma a la entrega como hubiese querido.
Creo que asi y todo salio bastante bien.
Gracias por la buena predisposicion a explicaciones y las clases bien dadas. 
Para alguien en mi situacion que conoce y trabaja dia a dia con esto
las clases lejos de ser aburridas se me hicieron dinamicas lo que ayuda a que aunque los conocimientos 
esten, uno no se aburra y siempre pueda aprender un poquito mas.
Saludos, espero que ande mejor de salud. 
*/
