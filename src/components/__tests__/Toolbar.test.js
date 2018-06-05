import React from 'react';
import RcToolbar from '../RcToolbar';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Toolbar', () => {
    let wrapper;

    it('rendered without exploding', () => {
        wrapper = shallow(<RcToolbar/>);
        expect(wrapper.length).toEqual(1);
    });

    it('has add icon', () => {
        wrapper = mount(<RcToolbar/>); // notice the `mount`
        expect(wrapper.find('button').find('.material-icons').text()).toBe("addX");
    });

    it('only visited countries starts on', () => {
        wrapper = mount(<RcToolbar onlyVisited={true}/>);
        expect(wrapper.find('.switchRoot').find('.switchChecked').length).toBeGreaterThan(0);
    });
});