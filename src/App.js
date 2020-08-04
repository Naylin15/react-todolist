import 'fomantic-ui-css/semantic.css';
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddNote from './AddNote';

class App extends Component {
  constructor() {
    super();
    this.state = {notes: []};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AddNote notesArray={this.state.notes} />
      </div>
    );
  }
}

export default App;
