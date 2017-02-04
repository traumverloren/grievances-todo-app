import TodoList from './TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
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
