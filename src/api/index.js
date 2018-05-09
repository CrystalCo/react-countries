//import uuid from 'uuid';
import orderBy from "lodash/orderBy";
import findIndex from "lodash/findIndex";
import remove from "lodash/remove";

const REST_COUNTRIES_API_URL = "https://restcountries.eu/rest/v2/";

// This is a fake in-memory implementation of something that would be implemented by calling a REST server.
const fakeDatabase = {
    userCountries: [
        {code: 'srb', name: 'Serbia', capital: 'Belgrade', visited: false},
        {code: 'bra', name: 'Brazil', capital: 'Brazilia', visited: false},
        {code: 'col', name: 'Colombia', capital: 'Bogota', visited: true}
    ],
    // Cache all countries in DB from external API call
    allCountries: []
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAllCountries = () => fakeDatabase.allCountries.length === 0 ?
    fetch(`${REST_COUNTRIES_API_URL}all`).then(result => result.json()).then(
        allCountries => {
            fakeDatabase.allCountries = allCountries;
            return fakeDatabase.allCountries;
        },
        error => console.error(error)
    ) :
    Promise.resolve(fakeDatabase.allCountries);

export const fetchUserCountries = (onlyVisited) => delay(500).then(() => {
        /*if (Math.random() > 0.5) {
            throw new Error('Boom!');
        }*/

        return orderBy(fakeDatabase.userCountries, ['name'], ['asc']).filter(c => c.visited || !onlyVisited);
    }
);

export const addUserCountry = (code) =>
    delay(500).then(() =>
        fetchAllCountries().then(allCountries => {
            let countryIndex = findIndex(allCountries, {'alpha3Code': code.toUpperCase()});
            let country = allCountries[countryIndex];
            let newCountry = {
                code: country.alpha3Code.toLowerCase(),
                name: country.name,
                capital: country.capital,
                visited: true
            };
            fakeDatabase.userCountries.push(newCountry);
            return newCountry;
        })
    ).then(newCountry => newCountry);

export const removeUserCountry = (code) =>
    delay(500).then(() => {
        remove(fakeDatabase.userCountries, function (c) {
            return c.code === code;
        });
    });

export const toggleUserCountry = (code) =>
    delay(50).then(() => {
        const country = fakeDatabase.userCountries.find(c => c.code === code);
        country.visited = !country.visited;
        return country;
    });