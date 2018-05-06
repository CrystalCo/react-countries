import findIndex from "lodash/findIndex";
import sortedIndexBy from "lodash/sortedIndexBy";

const countries = (state = [], action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            return action.userCountries;
        case 'ADD_COUNTRY':
            const allCountries = action.allCountries;
            const countryToAdd = action.countryToAdd;

            if (countryToAdd) {
                let addCountry = findIndex(state, {'code': countryToAdd}) === -1;

                if (addCountry) {
                    let countryIndex = findIndex(allCountries, {'alpha3Code': countryToAdd.toUpperCase()});
                    let country = allCountries[countryIndex];
                    let newCountry = {
                        code: country.alpha3Code.toLowerCase(),
                        name: country.name,
                        capital: country.capital,
                        visited: false
                    };
                    let newCountries = [...state];
                    let newCountryIndex = sortedIndexBy(newCountries, newCountry, 'name');
                    newCountries.splice(newCountryIndex, 0, newCountry);

                    return newCountries;
                    //dispatch(setMessage("Country has been added"));
                }

                //dispatch(addCountryDialogOpened(false))
            }
            return state;
        case 'REMOVE_COUNTRY':
            let index = findIndex(state, {'code': action.code});
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        case 'TOGGLE_COUNTRY':
            return state.map(country =>
                (country.code === action.code)
                    ? {...country, visited: !country.visited}
                    : country
            );
        default:
            return state
    }
};

export default countries;

export const getVisibleCountries = (state, onlyVisited) => {
    return state.filter(c => c.visited || !onlyVisited)
};