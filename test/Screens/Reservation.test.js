import React from 'react';
import renderer from 'react-test-renderer';

import Reservation from '../../src/screens/Reservation';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers()

const car = [
  {
    idV: 3,
    color: "rgb(240, 240, 240)",
    img: "",
    model: "AMG GT Coupé",
    prix: 380,
    specs: {hp: 522, acc: 3.8, speed: 310},
    imgLogo: "",
    marque: "Mercedes",
    id_attente: 324730753,
    statu: "Waiting Call",
    dateHeure: "04/13/2021"
  },
  {
    idV: 2,
    color: "rgb(219, 18, 18)",
    img: "",
    model: "Cayenne GTS",
    prix: 380,
    specs: {hp: 420, acc: 5.8, speed: 256},
    imgLogo: "",
    marque: "Porsche",
    id_attente: "867567047",
    statu: "En cours",
    dateHeure: "01/01/2021"
  },
]

describe('<Reservation />', () => {
  const wrapper = shallow(<Reservation navigation={'null'} route={{params: { data: car}}} />);
  it('Rendu', () => {
    expect(wrapper.children.length).toBe(1);
  });

  it('Rendu de deux élements', () => {

    expect(wrapper.find('View').find('View').children().length).toBe(2);

  });
});