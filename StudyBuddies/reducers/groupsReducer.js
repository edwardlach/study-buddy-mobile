import { GET_GROUP_BY_USER_COMPLETE } from "../types/reduxTypes";

/**************** Helper Functions ****************/

const groupPosted = (state, action) => {
  return [
    ...state,
    {
      ...action.body
    }
  ];
}

const getUserGroupsSuccess = (state, action) => {
  console.log('groups memberships', action.body);
}


/**************** Reducer Function ****************/

const group = (state = [], action) => {
  switch (action.type) {
    case 'POST_GROUP_COMPLETE':
      return groupPosted(state, action);
    case GET_GROUP_BY_USER_COMPLETE:
      return getUserGroupsSuccess(state, action);
    default:
      return state;
  }
}

export default group;
