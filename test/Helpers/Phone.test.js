import React from 'react';
import renderer from 'react-test-renderer';

import { phoneValidator } from '../../src/helpers/phoneValidator'

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



describe('Phone Helper', () => {
  
 
  it('Test phone OK', () => {
    expect(phoneValidator('0612345678')).toBe('');
  });
  it('Test phone empty', () => {
    expect(phoneValidator('')).toBe("Le numéro de téléphone de peut pas être vide.");
  });
  it('Test phone indicatif rejection', () => {
    expect(phoneValidator('+33612345628')).toBe("Merci de renseigner le numéro sans indicatif.");
  });
  it('Test phone non valide', () => {
    expect(phoneValidator('06123456781')).toBe("Ce numéro n'est pas valide.");
  });


});