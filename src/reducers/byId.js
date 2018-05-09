import keyBy from "lodash/keyBy";

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES_SUCCESS':
            return keyBy(action.userCountries, c => c.code);
        case 'ADD_COUNTRY_SUCCESS':
            return {
                ...state,
                [action.countryToAdd.code]: action.countryToAdd,
            };
        case 'REMOVE_COUNTRY_SUCCESS':
            const newById = {...state};
            delete newById[action.code];
            return newById;
        case 'TOGGLE_COUNTRY_SUCCESS':
            let c = state[action.country.code];
            return {
                ...state,
                [c.code]: c
            };
        default:
            return state
    }
};

export default byId;

export const getCountry = (state, id) => state[id];