import React from 'react';
import renderer from 'react-test-renderer';

import { emailValidator } from '../../src/helpers/emailValidator'

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



describe('Email Helper', () => {
  
 
  it('Test Mail OK', () => {
    expect(emailValidator('toto@toto.fr')).toBe('');
  });
  it('Test Mail empty', () => {
    expect(emailValidator('')).toBe("L'adresse email ne peut être vide.");
  });
  it('Test Mail non valide', () => {
    expect(emailValidator('toto')).toBe('Ooops! L\'adresse email n\'est pas valide.');
  });

});