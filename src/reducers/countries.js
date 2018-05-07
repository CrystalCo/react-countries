import {combineReducers} from 'redux';
import findIndex from "lodash/findIndex";
import indexOf from "lodash/indexOf";
import sortedIndexBy from "lodash/sortedIndexBy";
import keyBy from "lodash/keyBy";

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
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

const ids = (state = [], action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            return action.userCountries.map(c => c.code);
        case 'ADD_COUNTRY':
            const allCountries = action.allCountries;
            const countryToAddCode = action.countryToAdd;

            if (countryToAddCode) {
                let addCountry = findIndex(state, countryToAddCode) === -1;

                if (addCountry) {
                    let countryIndex = findIndex(allCountries, {'alpha3Code': countryToAddCode.toUpperCase()});
                    let country = allCountries[countryIndex];
                    let newCountryId = country.alpha3Code.toLowerCase();
                    let newAllIds = [...state];
                    let newIdIndex = sortedIndexBy(newAllIds, newCountryId);
                    newAllIds.splice(newIdIndex, 0, newCountryId);

                    return newAllIds;
                    //dispatch(setMessage("Country has been added"));
                }

                //dispatch(addCountryDialogOpened(false))
            }
            return state;
        case 'REMOVE_COUNTRY':
            let index = indexOf(state, action.code);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        default:
            return state
    }
};

const countries = combineReducers({
    byId,
    ids,
});

export default countries;

export const getVisibleCountries = (state) => {
    return state.ids.map(id => state.byId[id])
};