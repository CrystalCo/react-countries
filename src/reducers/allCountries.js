const allCountries = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_COUNTRIES':
            return action.allCountries;
        default:
            return state
    }
};

export default allCountries;