import findIndex from "lodash/findIndex";
import keyBy from "lodash/keyBy";

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES_SUCCESS':
            return keyBy(action.userCountries, c => c.code);
        case 'ADD_COUNTRY':
            const allCountries = action.allCountries;
            const countryToAddCode = action.countryToAdd;

            if (countryToAddCode) {
                let countryIndex = findIndex(allCountries, {'alpha3Code': countryToAddCode.toUpperCase()});
                let country = allCountries[countryIndex];
                let newCountry = {
                    code: country.alpha3Code.toLowerCase(),
                    name: country.name,
                    capital: country.capital,
                    visited: true
                };
                return {
                    ...state,
                    [countryToAddCode]: newCountry,
                };
            }
            return state;
        case 'REMOVE_COUNTRY':
            const newById = {...state};
            delete newById[action.code];
            return newById;
        case 'TOGGLE_COUNTRY':
            let c = state[action.code];
            return {
                ...state,
                [action.code]: {...c, visited: !c.visited},
            };
        default:
            return state
    }
};

export default byId;

export const getCountry = (state, id) => state[id];