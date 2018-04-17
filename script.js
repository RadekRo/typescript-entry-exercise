const getInfo = () => {

    const countryFilter = data => {
        const filteredCountriesInfo = {};
        const neighboursOfPoland = data.filter(el => el.borders.includes('POL'));
        const hasMoreThanFourNeighbours = country => country.length > 4 ? 'YES' : 'NO';
        for (let i = 0; i < neighboursOfPoland.length; i++) {
            filteredCountriesInfo[neighboursOfPoland[i].name.toUpperCase()] =  {
                hasMoreThanFourNeighbours: hasMoreThanFourNeighbours(neighboursOfPoland[i].borders),
                population: neighboursOfPoland[i].population,
                area: Math.floor(neighboursOfPoland[i].area) + ' KM2'
            };
        }
        console.log(filteredCountriesInfo);
    };

    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => countryFilter(data))
        .catch(error => console.error(error));

};