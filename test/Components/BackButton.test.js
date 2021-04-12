import React from 'react';
import renderer from 'react-test-renderer';

import BackButton from '../../src/components/BackButton';
jest.useFakeTimers()

describe('<BackButton />', () => {
  it('Rendu', () => {
    const tree = renderer.create(<BackButton />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  afterAll(done => {
    done();
});
});