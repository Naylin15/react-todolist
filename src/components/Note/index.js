import React from 'react';
import { Grid } from 'semantic-ui-react';
import SingleNote from '../SingleNote';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.checkNote = this.checkNote.bind(this);
        this.addCategory = this.addCategory.bind(this);
        // the notesArray which is being passed as props is now part of the state
        this.state = {
            notesArray: this.props.notesArray,
        }
    }

    checkNote(id, e, data) {
        const finished = document.getElementById(id);
        if (data.checked) {
           finished.className = "centered three column row finished";
        } else {
           finished.className = "centered three column row"
        }
    }

    addCategory(id, e, data) {
        let newArray = [...this.state.notesArray];
        newArray[id].category = data.value;
        this.setState({notesArray: newArray});
        this.props.updateState(newArray);
    }

    removeNote(id) {
        let newArray = [...this.state.notesArray];
        newArray.splice(id, 1);
        this.setState({notesArray: newArray});
        this.props.updateState(newArray);
    }

    editNote(id) {
        let newArray = [...this.state.notesArray];
        newArray[id].edit = true;
        this.setState({notesArray: newArray});
        this.props.updateState(newArray);
    }
    
    saveChanges(id, newValue) {
        let newArray = [...this.state.notesArray];
        newArray[id].title = newValue;
        newArray[id].edit = false;
        this.setState({notesArray: newArray});
        this.props.updateState(newArray);
    }

    render() {
        return (
            <Grid>
                {this.state.notesArray.map((note, index) =>  
                    <SingleNote
                        key={index}
                        noteId={index}
                        note={note}
                        editNote={this.editNote}
                        removeNote={this.removeNote}
                        saveChanges={this.saveChanges}
                        checkNote={this.checkNote}
                        addCategory={this.addCategory}
                    />
                )}
            </Grid>
        )
    }
}

export default Note