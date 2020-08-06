import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownCategory = () => (
  <Dropdown icon='filter'>
    <Dropdown.Menu>
      <Dropdown.Item icon='red' text='Important' />
      <Dropdown.Item icon='yellow' text='Tomorrow' />
      <Dropdown.Item icon='blue' text='Later' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownCategory;