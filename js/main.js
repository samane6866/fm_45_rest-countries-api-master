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
let removeClass = document
  .querySelector("#country-details")
  .classList.remove("display-none");
async function getCountry() {
  const respuesta = await fetch("https://restcountries.com/v3.1/all");
  console.log("hola");
  const data = await respuesta.json();
  // console.log(data);
  return data.forEach((item) => {
    console.log(item.name.common);
    ` <section id="country-details">
        <button id="btn-leave-details" aria-label="back to main page">
          <i class="bi bi-arrow-left"></i> Back
        </button>

        <div id="country-details-container">
          <div>
            <img id="country-detail-flag" src="#" alt="flag not loaded" />
          </div>

          <div class="country-detail-text">
            <h2 id="country-detail-name">${item.name.common}</h2>

            <div class="country-detail-text-container">
              <div class="text-container1">
                <p>
                  <span>Native Name: </span>
                  <span id="detail-native-name"></span>
                </p>
                <p>
                  <span>Population: </span>
                  <span id="detail-population"></span>
                </p>
                <p><span>Region: </span><span id="detail-region"></span></p>
                <p>
                  <span>Sub Region: </span>
                  <span id="detail-sub-region"></span>
                </p>
                <p><span>Capital: </span><span id="detail-capital">Ul</span></p>
              </div>
              <div class="text-container2">
                <p>
                  <span>Top Level Domain: </span>
                  <span id="detail-tld"></span>
                </p>
                <p>
                  <span>Currencies: </span>
                  <span id="detail-currency"></span>
                </p>
                <p>
                  <span>Languages: </span>
                  <span id="detail-languages"></span>
                </p>
              </div>
            </div>

            <h3>Border Countries:</h3>
            <div id="border-countries-container"></div>
          </div>
        </div>
      </section>`;
  });
}
getCountry();
