
/**************** Helper Functions ****************/

const groupPosted = (state, action) => {
  return [
      ...state,
      {
        ...action.body
      }
  ];
}


/**************** Reducer Function ****************/

const group = (state = [], action) => {
  switch(action.type) {
    case 'POST_GROUP_COMPLETE':
      return groupPosted(state, action);
      break;
    default:
      return state;
  }
}

export default group;
