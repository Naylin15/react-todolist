import React from 'react';
import { Checkbox, Grid, Header, Dropdown } from 'semantic-ui-react';
import DropdownCategory from './DropdownCategory';


class SingleNote extends React.Component {
    render() {
        const {note, removeNote, noteId} = this.props;

        return(
            <Grid.Row centered columns={3} >
                <Grid.Column width={2}>
                    <Checkbox />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h2'>{note.title}</Header>
                </Grid.Column>
                <Grid.Column>
                    <DropdownCategory />
                    <Dropdown icon='ellipsis vertical'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='Delete' onClick={() => removeNote(noteId)}/>
                            <Dropdown.Item text='Edit' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Grid.Column>
            </Grid.Row>
        )

    }

}

export default SingleNote;