import React from 'react';
import renderer from 'react-test-renderer';

import VehiculeCard from '../../src/components/VehiculeCard';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers()

const car = {
  marque: "Marque",
  model: "Model",
  prix: "12 999",
  color: 'rgb(38, 85, 255)',
  img: 'img',
}

describe('<VehiculeCard />', () => {
  const tree = renderer.create(<VehiculeCard vhInfo={car} />).toJSON();
  it('Rendu', () => {
    expect(tree.children.length).toBe(1);
  });
  it('Rendu du champ marque', () => {
    x = 0
    expect(tree.children[0].children[0].children[0].children[1].children[x].children[0].children[0]).toBe('Marque');
  });
  it('Rendu du champ Model', () => {
    expect(tree.children[0].children[0].children[0].children[1].children[0].children[1].children[0]).toBe('Model');
  });
  it('Rendu du champ prix', () => {
    expect(tree.children[0].children[0].children[0].children[1].children[1].children[0].children[0]).toBe('12 999');
  });
  it('Rendu du champ image', () => {
    expect(tree.children[0].children[0].children[0].children[0].children[0].props.source.uri).toBe('img');
  });
  it('Click sur card -> open desc', () => {
    const testFn = jest.fn()

    const wrapper = shallow(<VehiculeCard vhInfo={car} callback={() => testFn()} />);
    wrapper.find('ForwardRef').first().simulate('press')
    expect( testFn ).toHaveBeenCalled()

  });
  it('Click sur book -> open book', () => {
    const testFn = jest.fn()

    
    const wrapper = shallow(<VehiculeCard vhInfo={car} book={() => testFn()} />);
    wrapper.find('ForwardRef').at(1).simulate('press')
    expect( testFn ).toHaveBeenCalled()
  });
  afterAll(done => {
    done();
});
});