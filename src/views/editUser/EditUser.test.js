//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import Pay from "../../components/Pay/Pay";
import SettingsUser from "../../components/SettingsUser/SettingsUser";
import EditUser from './EditUser';

//Do tests
it('Should render pay and settinguser components, and modal should not render', () => {
    const wrapper = shallow(<EditUser />);
    const pay = wrapper.find(Pay);
    const settingsUser = wrapper.find(SettingsUser);
    const modal = wrapper.find('.modal-backdrop');

    expect(pay.exists()).toBeTruthy();
    expect(settingsUser.exists()).toBeTruthy();
    expect(modal.exists()).toBeFalsy();
});