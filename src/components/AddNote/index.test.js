import React from 'react';
import renderer from 'react-test-renderer'
import AddNote from './index';

it('renders correctly', () => {
    const tree = renderer
      .create(<AddNote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });