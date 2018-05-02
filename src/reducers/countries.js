import {addCountryDialogOpened, setCountries, setMessage} from "../actions";
import findIndex from "lodash/findIndex";
import sortedIndexBy from "lodash/sortedIndexBy";

const countries = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTRY':
            return []; // TODO
        case 'REMOVE_COUNTRY':
            let index = findIndex(state, {'code': action.code});
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        case 'TOGGLE_COUNTRY':
            return state.map(country =>
                (country.code === action.code)
                    ? {...country, visited: !country.visited}
                    : country
            );
        default:
            return state
    }
};

export default countries;
