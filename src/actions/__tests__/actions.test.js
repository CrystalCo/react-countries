import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import {configure} from "enzyme";
import * as actions from "../index";
import thunk from 'redux-thunk'
import nock from "nock";

configure({adapter: new Adapter()});

const initialState = {
    countries: {
        byId: {},
        list: {
            ids: [],
            errorMessage: null,
            isFetching: false
        }
    },
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

const allCountriesMockData = [{
    "name": "Colombia",
    "topLevelDomain": [
        ".co"
    ],
    "alpha2Code": "CO",
    "alpha3Code": "COL",
    "callingCodes": [
        "57"
    ],
    "capital": "Bogotá",
    "currencies": [
        {
            "code": "COP",
            "name": "Colombian peso",
            "symbol": "$"
        }
    ],
    "languages": [
        {
            "iso639_1": "es",
            "iso639_2": "spa",
            "name": "Spanish",
            "nativeName": "Español"
        }
    ],
}];

beforeEach(() => {
    store = mockStore(initialState);
});

describe('Async Actions', () => {
    it('AddCountry', () => {
        nock('https://restcountries.eu/rest/v2')
            .get('/all')
            .reply(200, allCountriesMockData, {'Access-Control-Allow-Origin': '*', 'Content-type': 'application/json'});

        let colombia = {code: "col", name: "Colombia", capital: "Bogotá", visited: true};

        const expectedActions = [
            {
                type: 'ADD_COUNTRY_SUCCESS',
                countryToAdd: colombia
            },
            {
                type: 'ADD_COUNTRY_DIALOG_OPENED',
                opened: false
            },
            {
                type: 'SET_MESSAGE',
                msg: 'Country has been added'
            }
        ];

        return store.dispatch(actions.addCountry('col'))
            .then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions);
            })
    });
});