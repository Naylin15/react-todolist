import React from 'react';
import EditNote from '../EditNote';
import { Checkbox, Grid, Header, Dropdown } from 'semantic-ui-react';

class SingleNote extends React.Component {

    render() {
        const {note, noteId, removeNote, saveChanges, editNote, checkNote, addCategory} = this.props;

        if (note.edit !== true) {
            // it's undefined but it should be false
            return (
                <Grid.Row centered columns={3} id={noteId}>
                    <Grid.Column width={2}>
                        <Checkbox onChange={(e, data) => checkNote(noteId, e, data)}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' id={'note-' + noteId}>{note.title}</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown icon='filter'>
                            <Dropdown.Menu>
                                <Dropdown.Item text='Important' value={'important'} onClick={(e, data)=>addCategory(noteId, e, data)}/>
                                <Dropdown.Item text='Tomorrow' value={'tomorrow'} onClick={(e, data)=>addCategory(noteId, e, data)}/>
                                <Dropdown.Item text='Later' value={'later'} onClick={(e, data)=>addCategory(noteId, e, data)}/>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown icon='ellipsis vertical'>
                            <Dropdown.Menu>
                                <Dropdown.Item text='Delete' id={'removeNote-' + noteId} onClick={() => removeNote(noteId)}/>
                                <Dropdown.Item text='Edit' id={'editNote-' + noteId} onClick={() => editNote(noteId)} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid.Column>
                </Grid.Row>
            )

        } else {
            return(
                <EditNote
                    note={note}
                    noteId={noteId}
                    saveChanges={saveChanges}
                />
            )
        }    
    }
}

export default SingleNote;