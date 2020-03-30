//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import components
import Home from './Home';

//Do tests
it('Should has a image, a name and a description', () => {
    const wrapper = shallow(<Home />);
    const image = wrapper.find('img');
    const name = wrapper.find('h1');
    const description = wrapper.find('h4');

    expect(image.props().src).toBeTruthy();
    expect(name.exists()).toBeTruthy();
    expect(description.exists()).toBeTruthy();
});