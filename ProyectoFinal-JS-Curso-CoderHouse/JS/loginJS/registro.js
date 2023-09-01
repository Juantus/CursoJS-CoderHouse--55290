const d = document;
const errAlert = d.getElementById("errorAlert");
const btnRegistro = d.getElementById("btnRegistrar");
const formNew = d.getElementById("formNewUser");

//Tomamos los valores ingresados en el formulario de creación de usuario y los enviamos a MD
//Validamos que las contraseñas sean iguales.
//Luego mostramos popup indicativo de registro correcto y redireccionamos a nuestra landing principal.

btnRegistro.addEventListener("click", function (event) {
  event.preventDefault();
  const userName = d.getElementById("username");
  const userMail = d.getElementById("email");
  const userPass = d.getElementById("password");
  const userPassConfirm = d.getElementById("confirmPassword");

  const valido = userPass.value === userPassConfirm.value ? true : false;
  console.log(valido);
  if (valido) {
    let newUser = {
      nameUser: userName.value,
      mailUser: userMail.value,
      passUser: userPass.value,
    };

    pushUser(newUser);
    formNew.reset();
    swal("Se creo el usuario correctamente", "Te redirigiremos de nuevo al sitio", "success")
    .then(() => {window.open("../../HTML/index.html")})
  } else {
    setAlert("Las contraseñas no son iguales.");
  }

});

function getArrUser() {
  let arrUser = localStorage.getItem("usuarios");
  return JSON.parse(arrUser) || [];
}

function addNewUser(user) {
  let userJson = JSON.stringify(user);
  localStorage.setItem("usuarios", userJson);
}

function pushUser(user) {
  let usuarios = getArrUser();
  usuarios.push(user);
  addNewUser(usuarios);
}

function setAlert(txt) {
  errAlert.innerText = txt;
  errAlert.style.display = txt ? "block" : "none";
}
