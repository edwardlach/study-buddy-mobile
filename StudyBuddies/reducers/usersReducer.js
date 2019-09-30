import { ADD_USER, SET_FIRST_NAME } from '../types/reduxTypes';

/**************** Helper Functions ****************/

const addUser = (state, action) => {
  return [
          ...state,
          {
            info: {
              ...action.user
            },
            id: action.id
          }
      ];
}

const updateFirstName = (state, action) => {
  return state.map(user =>
          (user.id == action.id)
          ? ({
            id: user.id,
            info: {
              ...user.info,
              firstName: action.firstName
            },
          })
          : user
      );
}


/**************** Reducer Function ****************/

const users = (state = [], action) => {
  switch(action.type) {
    case ADD_USER:
      return addUser(state, action);
    case SET_FIRST_NAME:
      return updateFirstName(state, action);
    default:
      return state;
  }
}

export default users;
