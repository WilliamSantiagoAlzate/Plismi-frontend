//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import Girl from "../../components/Girl/Girl";
import History from "../../components/History/History";
import Girls from './Girls';

//Do tests
it('Should render girl and history components, and should read style prop', () => {
    //Error in test, OwnCarousel library problem
    const wrapper = shallow(<Girls style="height: 800px" />);
    const girl = wrapper.find(Girl);
    const history = wrapper.find(History);

    expect(girl.exists()).toBeTruthy();
    expect(history.exists()).toBeTruthy();

    girl.forEach((node) => {
        expect(node.props().Height).toBe("height: 800px");
    });
});