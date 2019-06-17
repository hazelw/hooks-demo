import React from 'react';
import './App.css';
import TodoComponent from './components/TodoComponent';
import CharacterCount from './components/CharacterCount';
import Box from './components/Box';

function App() {
  return (
      <div>
        <CharacterCount />
        <TodoComponent />
        <Box item="book" />
      </div>
  );
}

export default App;
