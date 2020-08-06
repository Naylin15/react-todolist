import React, { Component } from 'react';
import { Checkbox, Grid, Header } from 'semantic-ui-react';
import DropdownOptions from './displayNote/DropdownOptions';
import DropdownCategory from './displayNote/DropdownCategory';

const OnlyNote = (props) => {
    const singleNote = props.notesArray.map((note, index) => {
       return (
        <Grid centered columns={3}>
            <Grid.Row key={index}>
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
        </Grid>
       )
     })
    
    return <div className='article ui two column stackable grid'>{singleNote}</div>

}

class Note extends Component {
    render() {
        const {notesArray} = this.props
        return (
                <OnlyNote notesArray={notesArray}/>
        )
    }
}

export default Note