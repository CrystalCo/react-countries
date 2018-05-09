import * as api from '../api'
import {getIsFetching, getOnlyVisited} from '../reducers';

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

export const addCountry = (code) => (dispatch) =>
    api.addUserCountry(code).then(countryToAdd => {
        dispatch({
            type: 'ADD_COUNTRY_SUCCESS',
            countryToAdd
        });
        dispatch(addCountryDialogOpened(false));
        dispatch(setMessage("Country has been added"));
    });

export const removeCountry = (code) => (dispatch) =>
    api.removeUserCountry(code).then(() => {
        dispatch({
            type: 'REMOVE_COUNTRY_SUCCESS',
            code
        });
        dispatch(setMessage("Country has been deleted"));
    });

export const toggleCountry = code => (dispatch, getState) =>
    api.toggleUserCountry(code).then((country) => {
        dispatch({
            type: 'TOGGLE_COUNTRY_SUCCESS',
            country,
            onlyVisited: getOnlyVisited(getState())
        });
        dispatch(setMessage("Country has been updated"));
    });

// All Countries

const setAllCountriesSuggestion = allCountries => ({
    type: 'SET_ALL_COUNTRIES_SUGGESTION',
    allCountries
});

export const fetchCountriesSuggestion = () => api.fetchAllCountries().then(allCountries => setAllCountriesSuggestion(allCountries));

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