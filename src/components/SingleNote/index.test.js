import React from 'react';
import renderer from 'react-test-renderer'
import SingleNote from './index';

it('renders correctly', () => {
    const tree = renderer
      .create(<SingleNote note={{edit: false, id: 0, title: '123'}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });