import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import byId from '../byId';
import list from '../list';
import {addCountrySuccess} from "../../actions";

configure({adapter: new Adapter()});

describe('Countries Reducer', () => {
    it('Should handle ADD_COUNTRY_SUCCESS', () => {
        let colombia = {code: "col", name: "Colombia", capital: "Bogota", visited: true};
        let addCountryAction = addCountrySuccess(colombia);
        expect(byId({}, addCountryAction)).toEqual({
            col: colombia
        });
        expect(list({}, addCountryAction)).toEqual({
            errorMessage: null,
            isFetching: false,
            ids: ['col']
        });
    });
});