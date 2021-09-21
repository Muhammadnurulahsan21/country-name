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
  const {name, capital, flag} = country;
  return `
    <div class='country'>
        <h2>${name}</h2>
        <h4>capital: ${capital}</h4>
        
        <img src="${flag}">
    </div>
    `;
};
loadCountries();
