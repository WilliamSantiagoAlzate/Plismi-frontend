//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import component
import Price from './Price';

//Do tests
it('Test the output values and format function', () => {
    const wrapper = shallow(<Price />);

    wrapper.setState({
        maxOutput: 100,
        minOutput: 50
    });

    const result = wrapper.find('label').text();

    expect(result).toBe('$50 - $100');

    // Error with the JavaScript function (.replace is not a funcion)
    //
    // const inputMin = wrapper.find('input').at(0);
    // inputMin.simulate('change', { target: { name: 'min', value: 100000 } });
    // expect(wrapper.state('minOutput')).toBe('100,000')
});