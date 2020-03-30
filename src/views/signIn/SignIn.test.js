//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import SignIn from './SignIn';

//Do tests
it('Test the change function', () => {
    const wrapper = shallow(<SignIn />);
    
    expect(wrapper.find('input').at(0).prop('value')).toEqual("");
    expect(wrapper.find('input').at(1).prop('value')).toEqual("");

    wrapper.find('input').at(0).simulate('change', { 
        target: { name: 'email', value: "santiago@mail.com" } 
    });
    wrapper.find('input').at(1).simulate('change', { 
        target: { name: 'password', value: "1234567890" } 
    });

    expect(wrapper.state().email).toEqual("santiago@mail.com");
    expect(wrapper.state().password).toEqual("1234567890");
});