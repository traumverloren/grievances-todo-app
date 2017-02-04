import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  return (
    <div>
    <ul>
      {todos.map(todo =>
        <Todo handleClick={() => onTodoClick(todo.id)} key={todo.id} {...todo} />)
      }
    </ul>
    </div>
  )
};

export default TodoList
