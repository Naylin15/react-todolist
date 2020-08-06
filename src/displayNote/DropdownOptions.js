import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownOptions = () => (
  <Dropdown icon='ellipsis vertical'>
    <Dropdown.Menu>
      <Dropdown.Item text='Delete' />
      <Dropdown.Item text='Edit' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownOptions;