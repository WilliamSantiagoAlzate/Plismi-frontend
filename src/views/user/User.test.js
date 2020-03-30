//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import Pay from "../../components/Pay/Pay";
import SettingsUser from "../../components/SettingsUser/SettingsUser";
import User from './User';

//Do tests
it('Should render pay and settinguser components and all inputs should be disable', () => {
    const wrapper = shallow(<User />);
    const pay = wrapper.find(Pay);
    const settingsUser = wrapper.find(SettingsUser);

    expect(pay.exists()).toBeTruthy();
    expect(settingsUser.exists()).toBeTruthy();
    
    wrapper.find('input').forEach((node) => {
        expect(node.props().disabled).toBeTruthy();
    });
});