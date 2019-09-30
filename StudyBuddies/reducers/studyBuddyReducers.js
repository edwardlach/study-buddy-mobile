import { combineReducers } from 'redux'
import users from './usersReducer'

const studyBuddyApp = combineReducers({
  users,
});

export default studyBuddyApp;
