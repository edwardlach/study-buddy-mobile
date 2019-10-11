import {REGISTRATION, FORM } from '../types/reduxTypes';

export const updateName = (name) =>{
    return{
        type : FORM.SIGNUP.NAME,
        name
    }
}