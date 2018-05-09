const suggestions = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ALL_COUNTRIES_SUGGESTION':
            return action.allCountries.map(country => ({
                value: country.alpha3Code.toLowerCase(),
                label: country.name
            }));
        default:
            return state
    }
};

export default suggestions;

export const getSuggestions = (state) => state;