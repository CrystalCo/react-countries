import {combineReducers} from 'redux'
import countries, * as fromCountries from './countries'
import allCountries, * as fromAllCountries from "./allCountries";
import ui, * as fromUi from "./ui";
import * as fromList from "./list";

export default combineReducers({
    countries,
    allCountries,
    ui
})

// Countries
export const getVisibleCountries = (state) => fromCountries.getVisibleCountries(state.countries);
export const getIsFetching = (state) => fromCountries.getIsFetching(state.countries);

// All Countries
export const getAllCountries = (state) => fromAllCountries.getAllCountries(state.allCountries);
export const getSuggestions = (state) => fromAllCountries.getSuggestions(state.allCountries);

// UI
export const getOnlyVisited = (state) => fromUi.getOnlyVisited(state.ui);
export const getAddCountryDialogOpened = (state) => fromUi.getAddCountryDialogOpened(state.ui);
export const getCountryToAdd = (state) => fromUi.getCountryToAdd(state.ui);
export const getMsgOpen = (state) => fromUi.getMsgOpen(state.ui);
export const getMsg = (state) => fromUi.getMsg(state.ui);