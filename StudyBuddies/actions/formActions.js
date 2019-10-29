import { FORM_CHANGE, FORM_SUBMIT } from '../types/reduxTypes'

export const regValueChange = (prop, val) => {
    return {
        type: FORM_CHANGE.REGISTER,
        field: prop,
        val
    }
}

export const signinValueChange = (prop, val) => {
    return {
        type: FORM_CHANGE.SIGNIN,
        field: prop,
        val
    }
}

export const submitRegisterForm = (form) => {
    return {
        type: FORM_SUBMIT.REGISTER,
        form
    }
}

export const setModalVisibility = (visible) => {
    return {
        type: FORM_SUBMIT.REGISTER_MODAL_VISIBILITY,
        visible
    }
}