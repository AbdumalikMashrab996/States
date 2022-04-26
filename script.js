const flagCountry = document.querySelector('#flag-country')

let api = 'https://restcountries.com/v3.1/all'

async function sendRequest(url) {
    console.log(`Loading...`)
    const req = await fetch(url)
    const data = await req.json()
    console.log(data)
    showData(data)
}

sendRequest(api)

function showData(data) {
    data.forEach((country) => {
    const countryInfo = document.createElement('section')
    countryInfo.classList.add('country-info')
    countryInfo.innerHTML = `
    
    <img class="flag-img" src="${country.flags.png}"/>
          <h3 class="country-name">${country.name.common}</h3>
          <ul class="list">
            <li class="item">
              <span><b>Population</b></span>
              <span>${country.population}</span>
            </li>
            <li class="item">
              <span><b>Region</b></span>
              <span>${country.region}</span>
            </li>
            <li class="item">
              <span><b>Capital</b></span>
              <span>${country.capital[0]}</span>
            </li>
          </ul>
    `
    flagCountry.appendChild(countryInfo)
    })
}