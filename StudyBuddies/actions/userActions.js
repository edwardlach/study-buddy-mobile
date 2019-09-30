import { ADD_USER, SET_FIRST_NAME } from '../types/reduxTypes';

let nextUserId = 0
export const addUser = (user) => {
  return {
    type: ADD_USER,
    id: nextUserId++,
    user
  }
}

export const setFirstName = (id, firstName) => {
  return {
    type: SET_FIRST_NAME,
    id: id,
    firstName: firstName
  }
}
