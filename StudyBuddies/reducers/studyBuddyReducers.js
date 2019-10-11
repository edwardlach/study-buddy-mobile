import { combineReducers } from 'redux'
import users from './usersReducer'
import registration from './RegistrationReducer'

const studyBuddyApp = combineReducers({
  users: users,
  name: registration
});

export default studyBuddyApp;
