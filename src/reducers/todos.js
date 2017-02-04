const todos = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      console.log(action);
      // if it's not the todo item we are looking for, just return it as is.
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        // return the item we are looking for but toggle the completed state.
        return {
          ...todo,
          completed: !todo.completed
        };
      })
    default:
      return state;
  }
};

export default todos
