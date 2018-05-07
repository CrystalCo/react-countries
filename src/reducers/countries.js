import {combineReducers} from 'redux';
import byId, * as fromById from './byId';
import ids, * as fromIds from './ids';

const countries = combineReducers({
    byId,
    ids,
});

export default countries;

export const getVisibleCountries = (state) => {
    const ids = fromIds.getIds(state.ids);
    return ids.map(id => fromById.getCountry(state.byId, id))
};