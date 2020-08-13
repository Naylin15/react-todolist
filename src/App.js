import 'fomantic-ui-css/semantic.css';
import React from 'react';
import './App.css';
import Header from './Header';
import AddNote from './AddNote';

function App() {
  return (
    <div className="App">
      <Header />
      <AddNote />
    </div>
  );
}

export default App;
