let btnToggleDarkMode = document.querySelector("#btn-toggle-dark-mode");

function toggleDarkMode() {
  document.querySelector("html").classList.toggle("dark-mode");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon");
  btnToggleDarkMode.children[0].classList.toggle("bi-moon-fill");
}

function init() {
  btnToggleDarkMode.addEventListener("click", toggleDarkMode);
}

window.onload = init();

let data = [];
async function getCountry() {
  const respuesta = await fetch("https://restcountries.com/v3.1/all");
  data = await respuesta.json();

  const countryDetails = document.querySelector("#country-details");
  const countryDetailsContainer = document.querySelector(
    "#countries-selection-box"
  );

  // Aquí utilizamos el método map en lugar de forEach para crear un array con el contenido HTML para cada país
  const countriesHtml = data.map((item) => {
    //console.log(item);
    return `
    <div class="text-container1">
    <div>
    <img id="country-detail-flag" src="${item.flags.png}" alt="flag not loaded" />
  </div>
                <p>
                  <span>Native Name: ${item.name.common}</span>
                  <span id="detail-native-name"></span>
                </p>
                <p>
                  <span>Population: ${item.population}</span>
                  <span id="detail-population"></span>
                </p>
                <p><span>Region: </span><span id="detail-region">${item.region}</span></p>
                <p>
                  <span>Sub Region:  </span>
                  <span id="detail-sub-region">${item.subregion}
                    </span>
                </p>
                <p><span>Capital:${item.capital} </span><span id="detail-capital">Ul</span></p>
              </div>

    
           
          `;
  });

  // Ahora agregamos el contenido HTML al elemento #country-details-container
  countryDetailsContainer.insertAdjacentHTML(
    "beforeend",
    countriesHtml.join("")
  );

  // Finalmente, removemos la clase "display-none" para mostrar el elemento #country-details
  countryDetails.classList.remove("display-none");
}
getCountry();

// Obtén una referencia al campo de búsqueda
const searchInput = document.getElementById("input-field-country");

function mostrarResultados(resultados) {
  const countryDetailsContainer = document.querySelector(
    "#countries-selection-box"
  );
  countryDetailsContainer.innerHTML = ""; // Limpiar el contenido actual antes de mostrar los nuevos resultados

  resultados.forEach((item) => {
    const countryHtml = `
      <div class="text-container1">
        <div>
          <img id="country-detail-flag" src="${item.flags.png}" alt="flag not loaded" />
        </div>
        <p>
          <span>Native Name: ${item.name.common}</span>
          <span id="detail-native-name"></span>
        </p>
        <p>
          <span>Population: ${item.population}</span>
          <span id="detail-population"></span>
        </p>
        <p><span>Region: </span><span id="detail-region">${item.region}</span></p>
        <p>
          <span>Sub Region:  </span>
          <span id="detail-sub-region">${item.subregion}</span>
        </p>
        <p><span>Capital:${item.capital} </span><span id="detail-capital">Ul</span></p>
      </div>
    `;

    countryDetailsContainer.insertAdjacentHTML("beforeend", countryHtml);
  });
}

// Agrega un event listener para el evento "input"
searchInput.addEventListener("input", function (event) {
  // Acciones a realizar cuando se dispara el evento "input"
  const textoIngresado = event.target.value;
  console.log("Texto ingresado:", textoIngresado);
  // Realizar la búsqueda o actualizar los resultados aquí
  const resultados = data.filter((item) => {
    const nombreComun = item.name.common.toLowerCase();
    return nombreComun.includes(textoIngresado);
  });

  mostrarResultados(resultados);
});
const regionSelectorTitle = document.querySelector("#region-selector-title");
const regionSelectorMenu = document.querySelector("#region-selector-menu");

regionSelectorTitle.addEventListener("click", () => {
  regionSelectorMenu.classList.toggle("display-none");
  console.log("holaaa");
});

// let selector = document.querySelector("#region-selector-title");
// selector.addEventListener("change", function (event) {
//   // Acciones a realizar cuando se dispara el evento "input"

//   const countryIngresado = event.target.value;
//   console.log("hola");
//   console.log("Texto ingresado:", countryIngresado);
//   // Realizar la búsqueda o actualizar los resultados aquí
//   const resultadosSelector = data.filter((item) => {
//     const regionComun = item.region.toLowerCase();
//     return regionComun.includes(countryIngresado);
//   });

//   mostrarResultados(resultadosSelector);
// });
