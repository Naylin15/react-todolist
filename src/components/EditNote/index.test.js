import React from 'react';
import renderer from 'react-test-renderer'
import EditNote from './index';

it('renders correctly', () => {
    const tree = renderer
      .create(<EditNote note={{title: 'abc', noteId: 0}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });