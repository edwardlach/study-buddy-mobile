import { FORM_CHANGE, FORM_SUBMIT } from '../types/reduxTypes';

//updates state of the form passed in the parameters
const updateFormField = (state, action, formName) => {
    return {
        ...state, [formName]: {
            ...state[formName],
            [action.field]: action.val
        }
    }
}

//updates the visibily for the confirmation modal
const updateModalVisibility = (state, visible) => {
    return {
        ...state, ['signin']: {
            ...state.signin, modalVisible: visible
        }
    }
}

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case FORM_CHANGE.REGISTER:
            return updateFormField(state, action, 'registration');
        case FORM_CHANGE.SIGNIN:
            return updateFormField(state, action, 'signin');
        case FORM_SUBMIT.REGISTER_MODAL_VISIBILITY:
            return updateModalVisibility(state, action.visible);
        default:
            return state;
    }
}

export default formReducer;