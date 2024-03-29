const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint) // this is a promise
  .then(blob => blob.json()) //promise returns a blob of 'readable' data then converts it into a json file
  .then(data => cities.push(...data)) //then push the data into the cities array using spread

function findMatches(word, cities){
  return cities.filter(place => {
    // does the city or state match what was searched
    // regex allows a variable to be used in match
    const regex = new RegExp(word, 'gi'); // g = global i = case insensitive
    return place.city.match(regex) || place.state.match(regex)
  });
}

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches(){
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    // replaces search value with a highlighted span of same value
    const cityName = place.city.replace(regex, 
      `<span class="hl">${this.value}</span>`
    );
    const stateName = place.state.replace(regex, 
      `<span class="hl">${this.value}</span>`
    );
    const population = numberWithCommas(place.population)
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${population}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
