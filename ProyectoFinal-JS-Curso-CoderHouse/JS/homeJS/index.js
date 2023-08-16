const d = document;
const formLog = d.getElementById("formLogin");
const bienvenida = d.getElementById("bienvenidaUser");

d.addEventListener("DOMContentLoaded", function () {
  swal(
    "Para comenzar a probar!!!",
    "Click en iniciar sesión. Si no tenes usuario, crealo",
    "warning"
  );
  const showModalBtn = d.getElementById("showModalBtn");
  const loginModal = d.getElementById("loginModal");
  const closeModal = d.getElementById("closeModal");

  showModalBtn.addEventListener("click", function () {
    loginModal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    loginModal.style.display = "none";
  });

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

btnLog.addEventListener("click", function (event) {
  event.preventDefault();
  const userNameLog = d.getElementById("username").value;
  const userPassLog = d.getElementById("password").value;

  let loginResult = checkLogin(userNameLog, userPassLog);

  if (loginResult) {
    swal("Inicio de Sesión Correcto", `Bienvenido ${userNameLog}`, "success");
    bienvenida.innerHTML = `<h3>Bienvenido, ${userNameLog}!</h3>`;
    loginModal.style.display = "none";
    formLog.reset();
  } else {
    swal(
      "No se pudo iniciar sesión",
      "Nombre de usuario o contraseña incorrectos",
      "error"
    );
    formLog.reset();
  }
});

function checkLogin(user, pass) {
  let arrListUser = searchArrUser();

  const login = arrListUser.find(
    (usuario) => usuario.nameUser === user && usuario.passUser === pass
  );
  const succesfully = login ? true : false;
  return succesfully;
}

function searchArrUser() {
  let arrUser = localStorage.getItem("usuarios");
  return JSON.parse(arrUser) || [];
}
