import Filter from './Filter';
import { connect } from 'react-redux';
import { setFilter } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    isActive: state.filter === ownProps.filter
  };
};

// the todo item dispatch is handled through the TodoListContainer
// cause we let the Todo component onClick event call the parent, TodoListprops function: onTodoClick
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFilterClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

const FilterContainer = connect(mapStateToProps,mapDispatchToProps)(Filter);

export default FilterContainer
