import React from 'react';

import ConsultationDemandes from '../../src/screens/ConsultationDemandes';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// jest.useFakeTimers()


describe('<ConsultationDemandes />', () => {


    const wrapper = shallow(<ConsultationDemandes navigation={'toto'} />);


    it('Prenom input onchangeText valeur', () => {
        wrapper.find({ label: 'Prenom' }).props().onChangeText('prenom');
        expect(wrapper.find({ label: 'Prenom' }).props().value).toBe('prenom');
    });

    it('Numéro de téléphone onchangeText valeur', () => {
        wrapper.find({ label: 'Numéro de téléphone' }).props().onChangeText('0612345678');
        expect(wrapper.find({ label: 'Numéro de téléphone' }).props().value).toBe('0612345678');
    });

    it('Tous les text champs sont rendu', () => {
        expect(wrapper.find('TextInput').length).toBe(2);
    });
    it('Bouton est présent', () => {
        expect(wrapper.find('Button').length).toBe(1);
    });

});