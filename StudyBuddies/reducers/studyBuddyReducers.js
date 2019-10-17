import { combineReducers } from 'redux'
import users from './usersReducer'
import formReducer from './formsReducer'

const studyBuddyApp = combineReducers({
  users: users,
  forms: formReducer
});

export default studyBuddyApp;
