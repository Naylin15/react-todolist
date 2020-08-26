import React from 'react';
import { Checkbox, Grid, Button, Input } from 'semantic-ui-react';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.note.title,
            noteId: this.props.noteId,
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {

        return (
            <Grid.Row centered columns={3} id={this.state.noteId}>
                <Grid.Column width={2}>
                    <Checkbox />
                </Grid.Column>
                <Grid.Column>
                    <Input value={this.state.value} onChange={this.handleChange}/>
                </Grid.Column>
                <Grid.Column>
                    <Button className='ui green primary button' onClick={() => this.props.saveChanges(this.state.noteId, this.state.value)}>Save</Button>
                </Grid.Column>
            </Grid.Row>
        )    
    }
}

export default EditNote;