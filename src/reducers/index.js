import {combineReducers} from 'redux'
import countries from './countries'
import allCountries from "./allCountries";
import ui from "./ui";

export default combineReducers({
    countries,
    allCountries,
    ui
})
