
/**************** Helper Functions ****************/

const getClasses = (state, action) => {
  return [...action.body]
}


/**************** Reducer Function ****************/

const classes = (state = [], action) => {
  switch(action.type) {
    case 'GET_CLASSES_COMPLETE':
      return getClasses(state, action);
      break;
    default:
      return state;
  }
}

export default classes;
