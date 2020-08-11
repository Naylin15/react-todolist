import React from 'react';
import { Grid } from 'semantic-ui-react';
import SingleNote from './displayNote/SingleNote';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this);
        // the notesArray which is being passed as props is now part of the state
        this.state = {
            notesArray: this.props.notesArray,
        }
    }

    removeNote(id) {
        let newArray = [...this.state.notesArray];
        newArray.splice(id, 1);
        this.setState({notesArray: newArray});
        console.log(newArray);
    }

    render() {
        return (
            <Grid>
                {this.state.notesArray.map((note, index) =>    
                    <SingleNote
                        key={index}
                        noteId={index}
                        note={note}
                        removeNote={this.removeNote}
                    />
                )}
            </Grid>
        )
    }
}

export default Note