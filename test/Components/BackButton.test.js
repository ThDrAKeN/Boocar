import React from 'react';
import renderer from 'react-test-renderer';

import BackButton from '../../src/components/BackButton';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers()
Date.now = jest.fn(() => 1503187200000);


describe('<BackButton />', () => {
  const wrapper = shallow(<BackButton  />);
 
  it('Rendu', () => {
   
    expect(wrapper.children().length).toBe(1);
  });
});