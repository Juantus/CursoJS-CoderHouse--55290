const btnCart = document.getElementById("tabsCategory");
const container = document.getElementById("containerId");

btnCart.addEventListener("click", (event) => {
  const clickedCategory = event.target;

  if (clickedCategory.classList.contains("categoryId")) {
    container.innerHTML = "";
    mapProduct(clickedCategory.id);
  }
});

//se hace uso de la api de ML, donde se modifica la categoria a visualizar mediante la modificacion del endpoint.
// La categoria se toma de un atributo del boton.

const mapProduct = async (category) => {
  await fetch(
    ` https://api.mercadolibre.com/sites/MLA/search?category=${category}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (const i of data.results) {
        
        prod = document.createElement("div");
        prod.innerHTML = `
            <div class="card">
              <img src=${i.thumbnail} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${i.title}</h5>
                <p class="card-text">Precio: $${i.price}</p>
                <a id="linkML" href="" class="btn btn-primary" data-href="${i.permalink}" target="_blank">Ir a la publicación.</a>
              </div>
          </div>
        `;
        container.append(prod);
      }
      validacionSesion()
    });
};


//se valida que el usuario este logueado, funcion necesaria para continuar con el flujo.
const checkSesion = (i) => {
  let data = sessionStorage.getItem("log")
  console.log(data)
  data === "true" ? window.open(i, "_blank") : swal("Primero es necesario Inicar Sesión", "Inicie sesion desde la barra de navegación", "warning")
}


//Se captura la URL asociada de MELI para redirigir si las condiciones son las correctas.
const validacionSesion = () => {
  const links = document.querySelectorAll("#linkML")
  
  links.forEach((l) => {
    l.addEventListener("click", (e) => {
      e.preventDefault()
      let hrefData = e.target.getAttribute("data-href");
      checkSesion(hrefData)
    })
  })
}
