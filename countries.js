const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displyCountries(data));
};

const displyCountries = (countries) => {
  const container = document.getElementById("container");
  const countryHTML = countries.map((country) => getcontryHTML(country));
  container.innerHTML = countryHTML.join(" ");
  
};
const getcontryHTML = (country) => {
  return `
    <div class='country'>
        <h2>${country.name}</h2>
        <h4>capital: ${country.capital}</h4>
        <h4>Religion: ${country.religion}</h4>
        <img src="${country.flag}">
    </div>
    `;
};
loadCountries();
