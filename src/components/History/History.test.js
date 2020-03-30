//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import HistoryItem from '../HistoryItem/HistoryItem'
import History from './History';

//Do tests
it('Should render history items', () => {
    const wrapper = shallow(<History />);
    const historyItem = wrapper.find(HistoryItem);

    expect(historyItem.exists()).toBeTruthy();
});