import React from 'react';
import renderer from 'react-test-renderer';

import { nameValidator } from '../../src/helpers/nameValidator'

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



describe('Name Helper', () => {
  
 
  it('Test name OK', () => {
    expect(nameValidator('Axel')).toBe('');
  });
  it('Test name empty', () => {
    expect(nameValidator('')).toBe("Ce champ ne peut pas être vide.");
  });


});