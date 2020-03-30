//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import Filters from "../../components/Filters/Filters";
import Price from "../../components/Price/Price";
import Filter from './Filter';

//Do tests
it('Should render filters and price components, and each filter should has a name', () => {
    const wrapper = shallow(<Filter />);
    const filters = wrapper.find(Filters);
    const price = wrapper.find(Price);

    expect(filters.exists()).toBeTruthy();
    expect(price.exists()).toBeTruthy();

    wrapper.find('h1').forEach((node) => {
        expect(node.text()).toBeTruthy();
    });
});