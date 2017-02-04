import TodoList from './TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions'

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default TodoListContainer
