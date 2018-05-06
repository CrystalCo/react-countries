const allCountries = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_COUNTRIES':
            return action.allCountries;
        default:
            return state
    }
};

export default allCountries;

export const getAllCountries = (state) => {
    return state;
};

export const getSuggestions = (state) => {
    return state.map(country => ({
        value: country.alpha3Code.toLowerCase(),
        label: country.name
    }))
};