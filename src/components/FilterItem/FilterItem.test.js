//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import component
import FilterItem from './FilterItem';

//Do tests
it('Should render label of description item with a text', () => {
    const wrapper = shallow(<FilterItem />);
    const label = wrapper.find('label');
    const text = label.text();

    expect(text).toBeTruthy();
});