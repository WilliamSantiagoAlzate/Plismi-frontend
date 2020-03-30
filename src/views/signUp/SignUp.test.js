//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import SignUp from './SignUp';

//Do tests
it('Test the change function', () => {
    const wrapper = shallow(<SignUp />);
    
    expect(wrapper.find('input').at(0).prop('value')).toEqual("");
    expect(wrapper.find('input').at(1).prop('value')).toEqual("");
    expect(wrapper.find('input').at(2).prop('value')).toEqual("");
    expect(wrapper.find('input').at(3).prop('value')).toEqual("");
    expect(wrapper.find('input').at(4).prop('value')).toEqual("");
    expect(wrapper.find('input').at(5).prop('value')).toEqual("");

    wrapper.find('input').at(0).simulate('change', { 
        target: { name: 'name', value: "santiago" } 
    });
    wrapper.find('input').at(1).simulate('change', { 
        target: { name: 'age', value: "35" } 
    });
    wrapper.find('input').at(2).simulate('change', { 
        target: { name: 'phoneNumber', value: "0180045603" } 
    });
    wrapper.find('input').at(3).simulate('change', { 
        target: { name: 'email', value: "santiago@mail.com" } 
    });
    wrapper.find('input').at(4).simulate('change', { 
        target: { name: 'password', value: "1234567890" } 
    });
    wrapper.find('input').at(5).simulate('change', { 
        target: { name: 'confirm_password', value: "1234567890" } 
    });

    expect(wrapper.state().name).toEqual("santiago");
    expect(wrapper.state().age).toEqual("35");
    expect(wrapper.state().phoneNumber).toEqual("0180045603");
    expect(wrapper.state().email).toEqual("santiago@mail.com");
    expect(wrapper.state().password).toEqual("1234567890");
    expect(wrapper.state().confirm_password).toEqual("1234567890");
});