import React, { Component } from 'react';
import './App.css';
import TodoListContainer from './components/TodoListContainer'
import AddTodoContainer from './components/AddTodoContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Grievances</h2>
        <AddTodoContainer/>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;
