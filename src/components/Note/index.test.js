import React from 'react';
import renderer from 'react-test-renderer'
import Note from './index';

it('renders with notes array', () => {
    const tree = renderer
      .create(<Note notesArray={[{title: 'abc'}]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

