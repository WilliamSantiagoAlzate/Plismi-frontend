//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import component
import Header from './Header';

//Do tests
it('Each Link element should has a link', () => {
    const wrapper = shallow(<Header />);
    
    wrapper.find('Link').forEach((node) => {
        expect(node.props().to).toBeTruthy();
    });
});