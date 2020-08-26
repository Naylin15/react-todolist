import 'fomantic-ui-css/semantic.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import AddNote from './components/AddNote';

function App() {
  return (
    <div className="App">
      <Header />
      <AddNote />
    </div>
  );
}

export default App;
