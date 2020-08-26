import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownCategory = () => (
  <Dropdown icon='filter'>
    <Dropdown.Menu>
      <Dropdown.Item text='Important' />
      <Dropdown.Item text='Tomorrow' />
      <Dropdown.Item text='Later' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownCategory;