import { ADD_USER, SET_FIRST_NAME, GET_USER,
  GET_USER_COMPLETE, POST_USER
 } from '../types/reduxTypes';

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

export const getUser = () => {
  return {
    type: GET_USER,
    id: nextUserId++,
  }
}

export const postUser = (id, body) => {
  return {
    type: POST_USER,
    id: id,
    body: body
  }
}
