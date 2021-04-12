import React from 'react';

import InformationsScreen from '../../src/screens/InformationsScreen';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// jest.useFakeTimers()


describe('<InformationsScreen />', () => {
    
    it('Tous les text champs sont rendu', () => {
        const wrapper = shallow(<InformationsScreen navigation={'toto'} />);
        expect(wrapper.find('TextInput').length).toBe(4);
    });
});