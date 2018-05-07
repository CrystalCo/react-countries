import {combineReducers} from 'redux';
import byId, * as fromById from './byId';
import list, * as fromList from './list';

const countries = combineReducers({
    byId,
    list
});

export default countries;

export const getVisibleCountries = (state) => {
    const ids = fromList.getIds(state.list);
    return ids.map(id => fromById.getCountry(state.byId, id))
};

export const getIsFetching = (state) => fromList.getIsFetching(state.list);