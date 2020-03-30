//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import component
import Girl from './Girl';

//Do tests
it('Should has a image and a name', () => {
    const data = {
        name: "Camila",
        height: "175",
        mass: "55",
        hair_color: "black",
        skin_color: "white",
        eye_color: "blue"
    }
    const wrapper = shallow(<Girl Data={data}/>);
    const image = wrapper.find('img');
    const name = wrapper.find('h2').text();

    expect(image.props().src).toBeTruthy();
    expect(name).toBeTruthy();
});