import v4 from 'uuid/v4';

const REST_COUNTRIES_API_URL = "https://restcountries.eu/rest/v2/";

// This is a fake in-memory implementation of something that would be implemented by calling a REST server.
const fakeDatabase = {
    userCountries: [
        {code: 'bra', name: 'Brazil', capital: 'Brazilia', visited: false},
        {code: 'col', name: 'Colombia', capital: 'Bogota', visited: true},
        {code: 'srb', name: 'Serbia', capital: 'Belgrade', visited: false}
    ],
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchUserCountries = (onlyVisited) => delay(500).then(() =>
    fakeDatabase.userCountries.filter(c => c.visited || !onlyVisited)
);

export const fetchAllCountries = () => fetch(`${REST_COUNTRIES_API_URL}all`).then(result => result.json());