//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import component
import SettingsUser from './SettingsUser';

//Do tests
it('Test the conditional render button', () => {    
    const wrapper = shallow(<SettingsUser />);
    let buttons = wrapper.find('Link');

    expect(buttons.length).toBe(1);

    wrapper.setState({
        link: 'http://localhost/editUser'
    });

    buttons = wrapper.find('Link');
    expect(buttons.length).toBe(0);

});