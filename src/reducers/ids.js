import indexOf from "lodash/indexOf";
import findIndex from "lodash/findIndex";
import sortedIndexBy from "lodash/sortedIndexBy";

const ids = (state = [], action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            return action.userCountries.map(c => c.code);
        case 'ADD_COUNTRY':
            const allCountries = action.allCountries;
            const countryToAddCode = action.countryToAdd;

            if (countryToAddCode) {
                let addCountry = findIndex(state, countryToAddCode) === -1;

                if (addCountry) {
                    let countryIndex = findIndex(allCountries, {'alpha3Code': countryToAddCode.toUpperCase()});
                    let country = allCountries[countryIndex];
                    let newCountryId = country.alpha3Code.toLowerCase();
                    let newAllIds = [...state];
                    let newIdIndex = sortedIndexBy(newAllIds, newCountryId);
                    newAllIds.splice(newIdIndex, 0, newCountryId);

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

export default ids;

export const getIds = (state) => state;