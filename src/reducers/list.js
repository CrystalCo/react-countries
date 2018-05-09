import {combineReducers} from 'redux';
import indexOf from "lodash/indexOf";
import findIndex from "lodash/findIndex";
import orderBy from "lodash/orderBy";

const ids = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES_SUCCESS':
            return action.userCountries.map(c => c.code);
        case 'ADD_COUNTRY_SUCCESS':
            if (action.countryToAdd) { // TODO - check?
                let addCountry = findIndex(state, action.countryToAdd.code) === -1;

                if (addCountry) {
                    let newAllIds = [...state];
                    newAllIds.push(action.countryToAdd.code);
                    newAllIds = orderBy(newAllIds, [], ['asc']);
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

const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES_REQUEST':
            return true;
        case 'FETCH_COUNTRIES_SUCCESS':
        case 'FETCH_COUNTRIES_FAILURE':
            return false;
        default:
            return state;
    }
};

const errorMessage = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES_FAILURE':
            return action.message;
        case 'FETCH_COUNTRIES_REQUEST':
        case 'FETCH_COUNTRIES_SUCCESS':
            return null;
        default:
            return state;
    }
};


export default combineReducers({
    ids,
    isFetching,
    errorMessage
})


export const getIds = (state) => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;