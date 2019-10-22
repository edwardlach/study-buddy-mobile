import { combineReducers } from 'redux'
import users from './usersReducer'
import groups from './groupsReducer'
import newGroup from './newGroupReducer'
import groupSearch from './groupSearchReducer'

const studyBuddyApp = combineReducers({
  users: users,
  groups: groups,
  newGroup: newGroup,
  groupSearch: groupSearch,
});

export default studyBuddyApp;
