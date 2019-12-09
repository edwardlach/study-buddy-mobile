import {
  GET_GROUP_BY_USER_COMPLETE,
  JOIN_GROUP_COMPLETE} from "../types/reduxTypes";
import { AsyncStorage } from 'react-native';
import { UserGroup } from '../factories/UserGroupFactory';

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
    return {
      ...state,
      loaded: true,
    };
  }

  var groupList = [];
  action.body.forEach(element => {
    groupList.push(
      {
        'name': element.groupName,
        'id': element.groupId,
        'subject': element.subject.subject
      }
    )
  });

  return {
    ...state,
    loaded: true,
    groupList
  };

}

const joinGroup = (state, action) => {
  console.log("Reducer: Join Group = ", JSON.stringify(action));
  var group = {
      'name': action.body.group.groupName,
      'id': action.body.group.groupId,
      'subject': action.body.group.subject.subject
  };

  // Make sure a group isn't loaded twice!
  var alreadyInList = false;
  if (state.groupList != undefined) {
    state.groupList.map(item => {
      if (item.id == group.id) {
        alreadyInList = true;
      }
    })
  }

  if (alreadyInList) {
    return state;
  } else {
    return {
      ...state,
      groupList: [
        ...state.groupList,
        group
      ]
    }
  }
}

/**************** Reducer Function ****************/

const groups = (state = [], action) => {
  switch (action.type) {
    case 'POST_GROUP_COMPLETE':
      return groupPosted(state, action);
    case GET_GROUP_BY_USER_COMPLETE:
      return getUserGroupsSuccess(state, action);
    case JOIN_GROUP_COMPLETE:
      return joinGroup(state, action);
    default:
      return state;
  }
}

export default groups;
