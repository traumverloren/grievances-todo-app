import TodoList from './TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions'

// this function lets us filter which grievance todos we show in the list
// using the global filter state
const filtered = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos
    case 'UNAIRED':
      return todos.filter(todo => !todo.completed)
    case 'AIRED':
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filtered(state.todos, state.filter)
  };
};

// the todo item dispatch is handled through the TodoListContainer
// cause we let the Todo component onClick event call the parent, TodoListprops function: onTodoClick
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default TodoListContainer
