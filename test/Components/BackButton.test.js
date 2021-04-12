import React from 'react';
import renderer from 'react-test-renderer';

import BackButton from '../../src/components/BackButton';

describe('<BackButton />', () => {
  it('Rendu', () => {
    const tree = renderer.create(<BackButton />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});