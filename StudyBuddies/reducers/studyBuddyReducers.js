import { combineReducers } from 'redux'
import users from './usersReducer'
import groups from './groupsReducer'
import newGroup from './newGroupReducer'

const studyBuddyApp = combineReducers({
  users: users,
  groups: groups,
  newGroup: newGroup,
});

export default studyBuddyApp;
