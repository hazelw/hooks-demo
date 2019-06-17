import React from 'react';
import './App.css';
import TodoComponent from './components/TodoComponent';
import CharacterCount from './components/CharacterCount';

function App() {
  return (
      <div>
        <CharacterCount />
        <TodoComponent />
      </div>
  );
}

export default App;
