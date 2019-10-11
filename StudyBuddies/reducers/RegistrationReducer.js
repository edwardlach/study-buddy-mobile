import { REGISTRATION, FORM } from '../types/reduxTypes'


const registration = (state = [], action) => {
  switch (action.type) {
    case FORM.SIGNUP.NAME:
      return { ...state, name: action.text }
    case REGISTRATION.REQUEST:
      return { registering: true };
    case REGISTRATION.SUCCESS:
      return {};
    case REGISTRATION.FAILURE:
      return {};
    default:
      return state
  }
}
export default registration;
