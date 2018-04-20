const API = "https://restcountries.eu/rest/v2/";

export default class {
    static getAllCountries() {
        return fetch(`${API}all`).then(result => result.json());
    }
}