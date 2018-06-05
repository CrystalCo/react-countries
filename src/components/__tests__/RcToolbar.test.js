import React from 'react';
import RcToolbar from '../RcToolbar';
import ToolbarContainer from '../../containers/ToolbarContainer';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

configure({adapter: new Adapter()});

const initialState = {
    ui: {
        onlyVisited: true,
        addCountryDialogOpened: false,
        countryToAdd: '',
        msgOpen: false,
        msg: ''
    }
};
const mockStore = configureStore();
let store;

beforeEach(() => {
    store = mockStore(initialState);
});

describe('RcToolbar', () => {
    /*it('passing test', () => {
        expect(true).toBeTruthy();
    });

    it('failing test', () => {
        expect(false).toBeTruthy();
        //expect(false).toBeFalsy(); // now passing
    });*/

    let wrapper;

    it('wraps content in a div with .RC-toolbar class', () => {
        wrapper = shallow(<RcToolbar/>);
        expect(wrapper.find('.RC-toolbar').length).toEqual(1);
        // component is rendered
        // expect(wrapper.length).toEqual(1)
    });

    it('has add icon', () => {
        wrapper = mount(<RcToolbar/>); // notice the `mount`
        expect(wrapper.find('button').find('.material-icons').text()).toBe("add");
    });

    it('only visited countries starts on', () => {
        // wrapper = mount(<RcToolbar onlyVisited={true}/>);
        wrapper = mount(<ToolbarContainer store={store}/>);
        expect(wrapper.find(RcToolbar).find('.switchRoot').find('.switchChecked').length).toBeGreaterThan(0);
    });
});