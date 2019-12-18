import {
  GET_GROUP_BY_USER_COMPLETE,
  JOIN_GROUP_COMPLETE,
  GROUP_SELECTED,
  CLEAR_GROUPS
} from "../types/reduxTypes";
import { AsyncStorage } from 'react-native';

/**************** Helper Functions ****************/

const groupPosted = (state, action) => {
  console.log(JSON.stringify(action));
  if (state.groupList != null) {
    return {
      loaded: state.loaded,
      groupList: [
        ...state.groupList,
        {
          name: action.body.group.groupName,
          id: action.body.group.groupId,
          subject: action.body.group.subject.name,
          selected: false
        }
      ]
    };
  }
  return {
    loaded: state.loaded,
    groupList: [
      {
        name: action.body.group.groupName,
        id: action.body.group.groupId,
        subject: action.body.group.subject.name,
        selected: false
      }
    ]
  };

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
        'subject': element.subject.subject,
        'selected': false
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
  var group = {
    'name': action.body.group.groupName,
    'id': action.body.group.groupId,
    'subject': action.body.group.subject.subject,
    'selected': false
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

const selectGroup = (state, action) => {
  list = state.groupList.map(group => {
    if (group.id == action.groupId) {
      return {
        ...group,
        selected: true
      }
    } else {
      return {
        ...group,
        selected: false
      }
    }
  });

  return {
    ...state,
    groupList: [
      ...list
    ]
  }
}

const clearGroups = (state, action) => {
  return {
    loaded: false,
    groupList: []
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
    case GROUP_SELECTED:
      return selectGroup(state, action);
    case CLEAR_GROUPS:
      return clearGroups(state, action);
    default:
      return state;
  }
}

export default groups;
