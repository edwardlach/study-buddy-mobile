import { regValueChange, setModalVisibility } from '../actions/formActions'
import RegistrationScreen from '../screens/RegistrationScreen'
import { connect } from 'react-redux'
import Auth from '@aws-amplify/auth';

/**
 * Registers User using AWS Amplify
 */
const register = (name, email, password) => {
    Auth.signUp({
        username: email,
        password,
        attributes: {
            name
        }
    })
        .then(
            (response) => {
                setModalVisibility(true);
                console.log('sign up response', response);
            } //success
        )
        .catch((error) => {
            setModalVisibility(false);
            alert('Unable to register: an error occured');
            console.log(error);
        }); //failure
}

const confirmAuth = (email, code) => {
    console.log('confirming');

    Auth.confirmSignUp(email, code)
        .then((response) => { 
            alert('completed sign up');
            setModalVisibility(false);
         }
        ).catch(
            alert('Error signing up')
        )
}

const changeModalVisbility = (dispatch, visible) => {
    dispatch(setModalVisibility(visible));
}

//State Functions
const mapStateToProps = state => {
    return {
        form: state.forms.registration,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: (prop, val) => {
            dispatch(regValueChange(prop, val));
        },
        submitRegisterForm: (form) => {
            register(form.name, form.email, form.password)
        },
        confirm: (confirmationCode, email) => {
            confirmAuth(email, confirmationCode);
        },
        setModalVisible: (visible) => {
            changeModalVisbility(dispatch, visible);
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationScreen)