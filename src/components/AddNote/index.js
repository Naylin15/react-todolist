import React, { Component } from 'react';
import Note from '../Note';
import { Form, Grid, Header } from 'semantic-ui-react';

class AddNote extends Component {
    constructor() {
        super();
        this.state = {value: '', notes: []};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addNote(this.state.notes);
    }

    clearForm() {
        this.setState({value: ''});
    }    

    addNote(notes) {
        var newArray = notes;
        newArray.push({title: this.state.value});
        // should I call updateState here? in order to not repeat the setState line
        this.setState({notes: newArray});
        this.clearForm();
    }

    updateState(newArray) {
        this.setState({notes: newArray});
    }
    
    render() {
        return (
            <div>
                <Grid container centered className='shadow'>
                    <Grid.Row>
                        <Header as='h2'>To-Do List</Header>
                    </Grid.Row>
                    <Grid.Row>    
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <input placeholder="What's next?" value={this.state.value} onChange={this.handleChange} required/>
                            </Form.Field>
                            <button type='submit' className='ui primary button'>Add</button>
                        </Form>
                    </Grid.Row>
                </Grid>
                <Note notesArray={this.state.notes} updateState={this.updateState} />
        </div>

        )
    }
}

export default AddNote