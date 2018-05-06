import {combineReducers} from 'redux';
import keyBy from "lodash/keyBy";

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ALL_COUNTRIES':
            return keyBy(action.allCountries, c => c.alpha3Code);
        default:
            return state
    }
};

const allIds = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_COUNTRIES':
            return action.allCountries.map(c => c.alpha3Code);
        default:
            return state
    }
};

const allCountries = combineReducers({
    byId,
    allIds,
});

export default allCountries;

export const getAllCountries = (state) => state.allIds.map(id => state.byId[id]);

export const getSuggestions = (state) => {
    const allCountries = getAllCountries(state);
    return allCountries.map(country => ({
        value: country.alpha3Code.toLowerCase(),
        label: country.name
    }))
};