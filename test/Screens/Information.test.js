import React from 'react';

import InformationsScreen from '../../src/screens/InformationsScreen';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// jest.useFakeTimers()


describe('<InformationsScreen />', () => {


    const wrapper = shallow(<InformationsScreen navigation={'toto'} />);

    it('Name input onchangeText valeur', () => {
        wrapper.find({ label: 'Nom' }).props().onChangeText('nom');
        expect(wrapper.find({ label: 'Nom' }).props().value).toBe('nom');
    });
    it('Prenom input onchangeText valeur', () => {
        wrapper.find({ label: 'Prenom' }).props().onChangeText('prenom');
        expect(wrapper.find({ label: 'Prenom' }).props().value).toBe('prenom');
    });
    it('Adresse email onchangeText valeur', () => {
        wrapper.find({ label: 'Adresse email' }).props().onChangeText('axel@toto.fr');
        expect(wrapper.find({ label: 'Adresse email' }).props().value).toBe('axel@toto.fr');
    });
    it('Numéro de téléphone onchangeText valeur', () => {
        wrapper.find({ label: 'Numéro de téléphone' }).props().onChangeText('0612345678');
        expect(wrapper.find({ label: 'Numéro de téléphone' }).props().value).toBe('0612345678');
    });

    it('Tous les text champs sont rendu', () => {
        expect(wrapper.find('TextInput').length).toBe(4);
    });
    it('Bouton est présent', () => {
        expect(wrapper.find('Button').length).toBe(1);
    });

});