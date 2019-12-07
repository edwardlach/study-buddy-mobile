import { GET_GROUP_BY_USER_COMPLETE } from "../types/reduxTypes";
import { AsyncStorage } from 'react-native'

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
  if (action.body['message'] != undefined) {
    alert(action.body['message']);
    return;
  }

  var groupList = [];
  action.body.forEach(element => {
    groupList.push({ 'name': element.groupName, 'id': element.groupId, 'subject': element.subject.subject });
  });

  return {
    ...state, groupList
  };

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
