import React from 'react';
import '../Todo.css'

const Todo = ({text, completed, handleClick}) => {
  return (
    <div>
      <div className='item'
           onClick={handleClick}
           style={{
             textDecoration: completed ? 'line-through' : 'none'
           }}>
        {text}
      </div>
    </div>
  )
};

export default Todo
