import React, { Component } from 'react';
import Note from './Note';
import { Form, Button } from 'semantic-ui-react';

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
        return newArray;
    }    

    
    render() {
        return (
            <div>
        <div className="ui centered grid container shadow">
            <div className="ui container row">
                <h2 className="ui header">To-Do List</h2>
            </div>
            <div className="ui container row">
                <div className="ui center aligned form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <input placeholder="What's next?" value={this.state.value} onChange={this.handleChange} />
                        </Form.Field>
                        <Button type='submit' className='ui primary button'>Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
            <Note notesArray={this.props.notesArray}/>
        </div>

        )
    }
}

export default AddNote