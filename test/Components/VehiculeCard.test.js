import React from 'react';
import renderer from 'react-test-renderer';

import VehiculeCard from '../../src/components/VehiculeCard';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers()
Date.now = jest.fn(() => 1503187200000);


const car = {
  marque: "Marque",
  model: "Model",
  prix: "12 999",
  color: 'rgb(38, 85, 255)',
  img: 'img',
}

describe('<VehiculeCard />', () => {
  const testFn = jest.fn()
  const tree = shallow(<VehiculeCard vhInfo={car} book={() => testFn()} callback={() => testFn()} />);
  it('Rendu', () => {
    expect(tree.children.length).toBe(1);
  });
  it('Rendu du champ marque', () => {
    expect(tree.find('Title').children().at(0).debug()).toBe('Marque');
  });
  it('Rendu du champ Model', () => {
    expect(tree.find('Paragraph').children().at(0).debug()).toBe('Model');
  });
  it('Rendu du champ prix', () => {
    expect(tree.find('Paragraph').children().at(1).debug()).toBe('12 999');
  });
  it('Click sur card -> open desc', () => {
    tree.find('ForwardRef').first().simulate('press')
    expect(testFn).toHaveBeenCalled()
  });
  it('Click sur book -> open book', () => {
    tree.find('ForwardRef').at(1).simulate('press')
    expect(testFn).toHaveBeenCalled()
  });
});