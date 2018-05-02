// Countries

export const setCountries = userCountries => ({
    type: 'SET_COUNTRIES',
    userCountries
});

export const addCountry = (countryToAdd, allCountries) => ({
    type: 'ADD_COUNTRY',
    countryToAdd,
    allCountries
});

export const removeCountry = code => ({
    type: 'REMOVE_COUNTRY',
    code
});

export const toggleCountry = code => ({
    type: 'TOGGLE_COUNTRY',
    code
});

// All Countries

export const setAllCountries = allCountries => ({
    type: 'SET_ALL_COUNTRIES',
    allCountries
});

// UI State

export const setOnlyVisited = onlyVisited => ({
    type: 'SET_ONLY_VISITED',
    onlyVisited
});

export const addCountryDialogOpened = opened => ({
    type: 'ADD_COUNTRY_DIALOG_OPENED',
    opened
});

export const setMessage = msg => ({
    type: 'SET_MESSAGE',
    msg
});

export const countryToAddChanged = countryToAdd => ({
    type: 'COUNTRY_TO_ADD_CHANGED',
    countryToAdd
});