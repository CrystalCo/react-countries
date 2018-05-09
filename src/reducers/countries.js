import {combineReducers} from 'redux';
import byId, * as fromById from './byId';
import list, * as fromList from './list';

const countries = combineReducers({
    byId,
    list
});

export default countries;

export const getUserCountriesCode = (state) => {
    return fromList.getIds(state.list);
};

export const getVisibleCountries = (state) => {
    const ids = getUserCountriesCode(state);
    return ids.map(id => fromById.getCountry(state.byId, id))
};

export const getIsFetching = (state) => fromList.getIsFetching(state.list);

export const getErrorMessage = (state) => fromList.getErrorMessage(state.list);