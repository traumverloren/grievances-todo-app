import AddTodo from './AddTodo';
import { addTodo } from '../actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
  };
};

// no state, just dispatch?
const mapDispatchToProps = (dispatch) => {
  return {
    addToList: (todo) => {
      dispatch(addTodo(todo))
    }
  }
}

const AddTodoContainer = connect(mapStateToProps,mapDispatchToProps)(AddTodo);

export default AddTodoContainer
