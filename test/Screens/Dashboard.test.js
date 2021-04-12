import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../../src/screens/Dashboard';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers()

const car = [
  {
    marque: "Porsche",
    model: "911 Carrera 4S",
    prix: "12 999",
    color: 'rgb(38, 85, 255)',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/992-c4s-modelimage-sideshot/model/c02b5f4d-e826-11e8-bec8-0019999cd470/porsche-model.png',
    imgLogo: 'https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png',
    specs: {
      speed: 150,
      hp: 285,
      acc: 3.8
    }
  },
  {
    marque: "Porsche",
    model: "Cayenne GTS",
    prix: "10 999",
    color: 'rgb(219, 18, 18)',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/9ya-e3-gts-modelimage-sideshot/model/457bfc31-a4e1-11ea-80ca-005056bbdc38/porsche-model.png',
    imgLogo: 'https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png',
    specs: {
      speed: 150,
      hp: 285,
      acc: 3.8
    }
  },
]

describe('<Dashboard />', () => {
  const wrapper = shallow(<Dashboard />);
  it('Rendu de deux élements', () => {
    // const tree = renderer.create(<Dashboard />).toJSON();
    // expect(tree.children.length).toBe(1);

    wrapper.setState({ cars: car });


    expect(wrapper.find('View').find('View').children().length).toBe(2);

  });
  afterAll(done => {
    done();
});
});