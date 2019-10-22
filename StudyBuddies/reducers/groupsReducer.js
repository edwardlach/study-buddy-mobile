
/**************** Helper Functions ****************/

const groupPosted = (state, action) => {
  return [
      ...state,
      {
        info: {
          ...action.into
        },
        id: action.reduxId
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
