
const tabs = document.getElementById("tabsCategory");

document.addEventListener("DOMContentLoaded", function () {
  InfoCard();
});

//Se consulta endpoint, de MELI para traer las diferentes categorias y mostrarlas en el front.

const InfoCard = async () => {
  await fetch("https://api.mercadolibre.com/sites/MLA/categories")
    .then((response) => response.json())
    .then((data) => {
      for (const i of data) {
        const category = document.createElement("div");
        category.innerHTML = `
            <li class="nav-item items">
                <a id=${i.id} class="categoryId nav-link" aria-current="page" href="#">${i.name}</a>
            </li>
              
        `;
        tabs.append(category);
      }
    });
};
