import {combineReducers} from 'redux'
import countries, * as fromCountries from './countries'
import suggestions, * as fromSuggestions from "./suggestions";
import ui, * as fromUi from "./ui";

export default combineReducers({
    countries,
    suggestions,
    ui
})

// Countries
export const getVisibleCountries = (state) => fromCountries.getVisibleCountries(state.countries);
export const getIsFetching = (state) => fromCountries.getIsFetching(state.countries);
export const getErrorMessage = (state) => fromCountries.getErrorMessage(state.countries);

// All Countries Suggestion
export const getSuggestions = (state) => fromSuggestions.getSuggestions(state.suggestions);

// UI
export const getOnlyVisited = (state) => fromUi.getOnlyVisited(state.ui);
export const getAddCountryDialogOpened = (state) => fromUi.getAddCountryDialogOpened(state.ui);
export const getCountryToAdd = (state) => fromUi.getCountryToAdd(state.ui);
export const getMsgOpen = (state) => fromUi.getMsgOpen(state.ui);
export const getMsg = (state) => fromUi.getMsg(state.ui);