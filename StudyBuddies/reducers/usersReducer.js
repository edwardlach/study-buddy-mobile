import { ADD_USER, SET_FIRST_NAME,
  GET_USER_COMPLETE, POST_USER_COMPLETE
} from '../types/reduxTypes';

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

const getUserComplete = (state, action) => {
  return [
    ...state,
    {
      info: {
        ...action.info,
      },
      id: action.reduxId,
    },
  ];
}

const postUserComplete = (state, action) => {
  return state.map(user =>
    (user.id == action.reduxId)
    ? ({
        info: {
          ...action.info,
        },
        id: action.reduxId,
    })
    : user
  );
}


/**************** Reducer Function ****************/

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action);
    case SET_FIRST_NAME:
      return updateFirstName(state, action);
    case GET_USER_COMPLETE:
      return getUserComplete(state, action);
    case POST_USER_COMPLETE:
      return postUserComplete(state, action);
    default:
      return state;
  }
}

export default users;
