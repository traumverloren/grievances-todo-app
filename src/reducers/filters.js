const filters = (state = [], action) => {
  switch(action.type){
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default filters
