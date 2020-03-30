//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import FilterItem from '../FilterItem/FilterItem'
import Filters from './Filters';

//Do tests
it('Should render filter items', () => {
    const wrapper = shallow(<Filters />);
    const filterItem = wrapper.find(FilterItem);

    expect(filterItem.exists()).toBeTruthy();
});