//import uuid from 'uuid';

const REST_COUNTRIES_API_URL = "https://restcountries.eu/rest/v2/";

// Cache all countries here from external API call
let allCountriesCache = [];

// This is a fake in-memory implementation of something that would be implemented by calling a REST server.
const fakeDatabase = {
    userCountries: [
        {code: 'bra', name: 'Brazil', capital: 'Brazilia', visited: false},
        {code: 'col', name: 'Colombia', capital: 'Bogota', visited: true},
        {code: 'srb', name: 'Serbia', capital: 'Belgrade', visited: false}
    ],
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAllCountries = () => allCountriesCache.length === 0 ?
    fetch(`${REST_COUNTRIES_API_URL}all`).then(result => result.json()).then(
        allCountries => {
            allCountriesCache = allCountries;
            return allCountriesCache;
        },
        error => console.error(error)
    ) :
    Promise.resolve(allCountriesCache);

export const fetchUserCountries = (onlyVisited) => delay(500).then(() => {
        if (Math.random() > 0.5) {
            throw new Error('Boom!');
        }

        return fakeDatabase.userCountries.filter(c => c.visited || !onlyVisited);
    }
);

// TODO
export const addUserCountry = (code) =>
    delay(500).then(() => {
        const c = {
            //id: v4(),
            //text,
            completed: false,
        };
        fakeDatabase.userCountries.push(c);
        return c;
    });

// TODO
export const toggleUserCountry = (code) =>
    delay(500).then(() => {
        const country = fakeDatabase.userCountries.find(c => c.code === code);
        country.visited = !country.visited;
        return country;
    });