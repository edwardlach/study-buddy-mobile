import { combineReducers } from 'redux'
import users from './usersReducer'
import formReducer from './formsReducer'

import groups from './groupsReducer'
import newGroup from './newGroupReducer'
import groupSearch from './groupSearchReducer'
import classes from './classesReducer'
import messages from './messageReducer'
import messageText from './messageTextReducer'

const studyBuddyApp = combineReducers({
  users: users,
  forms: formReducer,
  groups: groups,
  newGroup: newGroup,
  groupSearch: groupSearch,
  classes: classes,
  messages: messages,
  messageText: messageText
});

export default studyBuddyApp;
