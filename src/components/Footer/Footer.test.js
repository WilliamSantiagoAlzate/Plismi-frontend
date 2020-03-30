//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import component
import Footer from './Footer';

//Do tests
it('Should has Icon prop in icon class and Link prop in href attribute', () => {
    const wrapper = shallow(<Footer Icon="Icon" Link="Link" />);
    const icon = wrapper.find('i');
    const button = wrapper.find('a');

    expect(button.props().href).toBe('#Link');
    expect(icon.is('.Icon')).toBeTruthy();
});