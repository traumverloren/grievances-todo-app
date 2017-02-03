import Todos from './Todos';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

// const mapDispatchToProps = (dispatch) => {
// }

const TodosContainer = connect(mapStateToProps)(Todos);

export default TodosContainer
