import React, { Component } from 'react';
import Note from './Note';
import { Form, Button, Grid, Header } from 'semantic-ui-react';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addNote(this.props.notesArray);
    }

    clearForm() {
        this.setState({value: ''});
    }    

    addNote(notes) {
        var newArray = notes;
        newArray.push({title: this.state.value});
        this.clearForm();
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
                                <input placeholder="What's next?" value={this.state.value} onChange={this.handleChange} />
                            </Form.Field>
                            <Button type='submit' className='ui primary button'>Add</Button>
                        </Form>
                    </Grid.Row>
                </Grid>
            <Note notesArray={this.props.notesArray}/>
        </div>

        )
    }
}

export default AddNote