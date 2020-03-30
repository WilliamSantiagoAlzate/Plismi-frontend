//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import component
import Pay from './Pay';

//Do tests
it('Test the conditional render button', () => {    
    const wrapper = shallow(<Pay />);
    let buttons = wrapper.find('Link');

    expect(buttons.length).toBe(3);

    wrapper.setState({
        link: 'http://localhost/creditcard'
    });

    buttons = wrapper.find('Link');
    expect(buttons.length).toBe(2);

});