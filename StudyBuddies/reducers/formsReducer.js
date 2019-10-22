import { FORM_CHANGE } from '../types/reduxTypes';

//updates state of the form passed in the parameters
const updateFormField = (state, action, formName) => {
    return {
        ...state, [formName]: {
            ...state[formName],
            [action.field]: action.val
        }
    }
}

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case FORM_CHANGE.REGISTER:
            return updateFormField(state, action, 'registration');
        case FORM_CHANGE.SIGNIN:
            return updateFormField(state, action, 'signin');
        default:
            return state;
    }
}

export default formReducer;