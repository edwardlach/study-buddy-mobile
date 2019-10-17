import { FORM_CHANGE } from '../types/reduxTypes'

export const regValueChange = (prop, val) => {
    return {
        type : FORM_CHANGE.REGISTER,
        field : prop,
        val
    }
}

export const signinValueChange = (prop, val) => {
    return {
        type : FORM_CHANGE.SIGNIN,
        field : prop,
        val
    }
}