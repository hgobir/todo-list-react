import React from 'react';
// import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
// import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

// random
function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
