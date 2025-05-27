const loadCountryApi = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountryApi()

const displayCountries = (countries) => {
    // console.log(countries);

    const uiDiv = document.getElementById('countries')
    countries.forEach(country => {

        // console.log(country);

        const div = document.createElement('div');
        div.classList.add('country')

        div.innerHTML = `
                <img src="${country.flags.png}" alt="">
                <h3>Name: ${country.name.common}</h3>
                <p>Capital: ${country.capital}</p>
                <p>Population: ${country.population}</p>
               <button onclick="loadCountryByName(' ${country.name.common}')"> See Details</button>

        `
        uiDiv.appendChild(div)

    });

}

const loadCountryByName = (name) => {
    // console.log(name);
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(alu => displaySingleCountry(alu[0]))
}

const displaySingleCountry = (country) => {
    window.scrollTo(0, 0)
    // console.log(country);
    const countryDetails = document.getElementById('single-country');
    countryDetails.classList.add('details')

    countryDetails.innerHTML = `
     <img src="${country.flags.png}" alt="">
                <h3>Name: ${country.name.common}</h3>
                <p>Capital: ${country.capital}</p>
                <p>Population: ${country.population}</p>
                <p>Area: ${country.area}</p>
                <p>Status: ${country.status}</p>
                <p>Region: ${country.region}</p>
                <p>Language: ${country.languages}</p>


    `
}