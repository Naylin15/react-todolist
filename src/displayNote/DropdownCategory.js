import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const tagOptions = [
    {
      key: 'Important',
      text: 'Important',
      value: 'Important',
      label: { color: 'red', empty: true, circular: true },
    },
    {
      key: 'Tomorrow',
      text: 'Tomorrow',
      value: 'Tomorrow',
      label: { color: 'yellow', empty: true, circular: true },
    },
    {
      key: 'Later',
      text: 'Later',
      value: 'Later',
      label: { color: 'blue', empty: true, circular: true },
    }
];

const DropdownCategory = () => (
  <Dropdown icon='filter'>
    <Dropdown.Menu>
      <Dropdown.Item text='Important' />
      <Dropdown.Item text='Tomorrow' />
      <Dropdown.Item text='Later' />
    </Dropdown.Menu>
  </Dropdown>
  // <Dropdown 
  //  icon='filter' 
  //  text='Category'
  //  floating
  //  labeled
  //  button
  //  className='icon'>
  //   <Dropdown.Menu scrolling>
  //       {tagOptions.map((option) => (
  //         <Dropdown.Item key={option.value} {...option} />
  //       ))}
  //   </Dropdown.Menu>
  // </Dropdown>
)

export default DropdownCategory;