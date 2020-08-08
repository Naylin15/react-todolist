import React, { Component } from 'react';
import { Checkbox, Grid, Header, Dropdown } from 'semantic-ui-react';
// import DropdownOptions from './displayNote/DropdownOptions';
import DropdownCategory from './displayNote/DropdownCategory';

function OnlyNote(props) {
    console.log(props);
    const singleNote = props.notesArray.map((note, index) => {
       return (
            <Grid.Row centered columns={3} key={index}>
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
                            <Dropdown.Item text='Delete' onClick={() => this.removeNote(index, props.notesArray)}/>
                            <Dropdown.Item text='Edit' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Grid.Column>
            </Grid.Row>
       )
     })
    
    return singleNote

}


class Note extends Component {
    constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this);
        // the notesArray which is being passed as props is now part of the state
        this.state = {
            notesArray: this.props.notesArray,
        }
    }

    removeNote(id, notes) {
        let newArray = notes;
        newArray.splice(id, 1);
        console.log(newArray);
        //     // return <OnlyNote notesArray={newArray}/>
    }

    render() {
        return (
            <Grid>
                <OnlyNote notesArray={this.state.notesArray} removeNote={this.removeNote}/>
            </Grid>
        )
    }
}

export default Note