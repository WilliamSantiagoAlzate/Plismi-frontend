//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import Pay from "../../components/Pay/Pay";
import CreditCard from './CreditCard';

//Do tests
it('Should render pay component and modal should not render', () => {
    const wrapper = shallow(<CreditCard />);
    const pay = wrapper.find(Pay);
    const modal = wrapper.find('.modal-backdrop');

    expect(pay.exists()).toBeTruthy();
    expect(modal.exists()).toBeFalsy();
});