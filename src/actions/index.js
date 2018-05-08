import * as api from '../api'
import {getIsFetching} from '../reducers';

// Countries

// Promise middleware version
/*export const fetchUserCountries = (onlyVisited) =>
    api.fetchUserCountries(onlyVisited).then(
        userCountries => {
            type: 'FETCH_COUNTRIES_SUCCESS',
            userCountries
        },
        error => console.error(error)
    );*/

// Thunk middleware version
export const fetchUserCountries = (onlyVisited) => (dispatch, getState) => {
    // Race condition protection
    /*if (getIsFetching(getState())) {
        return Promise.resolve();
    }*/

    dispatch({
        type: 'FETCH_COUNTRIES_REQUEST'
    });

    return api.fetchUserCountries(onlyVisited).then(
        userCountries => dispatch({
            type: 'FETCH_COUNTRIES_SUCCESS',
            userCountries
        }),
        error => {
            console.error(error);
            dispatch({
                type: 'FETCH_COUNTRIES_FAILURE',
                onlyVisited,
                message: error.message || 'Something went wrong.'
            });
        }
    );
};

export const addCountry = (countryToAdd) => ({
    type: 'ADD_COUNTRY',
    countryToAdd
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

const setAllCountriesSuggestion = allCountries => ({
    type: 'SET_ALL_COUNTRIES_SUGGESTION',
    allCountries
});

export const fetchAllCountries = () => api.fetchAllCountries().then(allCountries => setAllCountriesSuggestion(allCountries));

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