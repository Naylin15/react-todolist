import React, { Component } from 'react';
import { Checkbox, Grid, Header } from 'semantic-ui-react';
import DropdownOptions from './displayNote/DropdownOptions';
import DropdownCategory from './displayNote/DropdownCategory';

const OnlyNote = (props) => {
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
                    <DropdownOptions />
                </Grid.Column>
            </Grid.Row>
       )
     })
    
    return singleNote

}

class Note extends Component {
    render() {
        const {notesArray} = this.props
        return (
            <Grid>
                <OnlyNote notesArray={notesArray}/>
            </Grid>
        )
    }
}

export default Note