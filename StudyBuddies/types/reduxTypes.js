// API URL
const API = "https://4b7jtysje3.execute-api.us-east-1.amazonaws.com/develop";

// User Types
const ADD_USER = 'ADD_USER';
const SET_FIRST_NAME = 'SET_FIRST_NAME';

// Registration Types
const REGISTRATION = {
    REQUEST: 'USERS_REGISTER_REQUEST',
    SUCCESS: 'USERS_REGISTER_SUCCESS',
    FAILURE: 'USERS_REGISTER_FAILURE',
}

const FORM = {
    SIGNUP: {
        NAME: 'SIGNUP_NAME_CHANGE',
        EMAIL: 'SIGNUP_EMAIL_CHANGE',
        PASSWORD: 'SIGNUP_PASSWORD_CHANGE',
    }
}

export { ADD_USER, SET_FIRST_NAME, REGISTRATION, FORM };
