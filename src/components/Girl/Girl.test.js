//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import component
import Girl from './Girl';

//Do tests
it('Should has a image and a name', () => {
    const wrapper = shallow(<Girl />);
    const image = wrapper.find('img');
    const name = wrapper.find('h2').text();

    expect(image.props().src).toBeTruthy();
    expect(name).toBeTruthy();
});