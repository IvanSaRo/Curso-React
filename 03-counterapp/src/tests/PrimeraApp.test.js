import { shallow } from "enzyme";
import React from 'react';
import { PrimeraApp } from "../PrimeraApp";


describe('<PrimeraApp /> test suite', () => {

    test('should show the component', () => {
        const saludo = 'Goku'
        const wrapper = shallow( <PrimeraApp saludo={saludo} />)

        expect(wrapper).toMarchSnapshot();
    })
    
})