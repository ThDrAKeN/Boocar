import React from 'react';
import renderer from 'react-test-renderer';

import InformationsScreen from '../../src/screens/InformationsScreen';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextInput } from 'react-native-gesture-handler';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers()


describe('<InformationsScreen />', () => {
    const wrapper = shallow(<InformationsScreen navigation={'toto'} />);
    it('Tous les text champs sont rendu', () => {
       
        expect(wrapper.find('TextInput').length).toBe(4);

    });
    afterAll(done => {
        done();
    });
});