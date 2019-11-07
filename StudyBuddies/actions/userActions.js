import {
  ADD_USER, SET_FIRST_NAME, GET_USER,
  GET_USER_COMPLETE, POST_USER, FORM_SUBMIT
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

export const registerUser = (formOriginal) => {
  return {
    type: FORM_SUBMIT.REGISTER_POST,
    form: {
      "lastName": formOriginal.lastName,
      "firstName": formOriginal.firstName,
      "email": formOriginal.email,
      "educationLevel": 13,
      "universityId": 1
    }
  }
}
