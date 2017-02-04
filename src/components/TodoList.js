import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  return (
    <div>
    <ul>
      {todos.map(todo =>
        // the spread operator allows up to pass on the rest of props of Todo at once (text, completed)
        <Todo handleClick={() => onTodoClick(todo.id)} key={todo.id} {...todo} />)
      }
    </ul>
    </div>
  )
};

export default TodoList
