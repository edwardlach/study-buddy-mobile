import { combineReducers } from 'redux'
import users from './usersReducer'
import formReducer from './formsReducer'

import groups from './groupsReducer'
import newGroup from './newGroupReducer'
import groupSearch from './groupSearchReducer'
import classes from './classesReducer'

const studyBuddyApp = combineReducers({
  users: users,
  forms: formReducer,
  groups: groups,
  newGroup: newGroup,
  groupSearch: groupSearch,
  classes: classes
});

export default studyBuddyApp;
