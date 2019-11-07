import { regValueChange, setModalVisibility } from '../actions/formActions'
import { registerUser } from '../actions/userActions'
import RegistrationScreen from '../screens/RegistrationScreen'
import { connect } from 'react-redux'
import Auth from '@aws-amplify/auth';

/**
 * Registers User using AWS Amplify
 */

let navigation = null;

const register = (name, email, password, dispatch) => {
    Auth.signUp({
        username: email,
        password,
        attributes: {
            name
        }
    })
        .then(
            (response) => {
                changeModalVisbility(dispatch, true);
                console.log('sign up response', response);
            } //success
        )
        .catch((error) => {
            alert('Unable to register: ' + error.message);
            console.log(error);
        }); //failure
}

const confirmAuth = (form, code, dispatch) => {

    Auth.confirmSignUp(form.email, code)
        .then((response) => {
            regiseterThroughEndpoint(form, dispatch);
            changeModalVisbility(dispatch, false);
            alert('Congrats! You are now registered');
            navigation.navigate('App');
        }
        ).catch(
            (err) => {
                alert('Invalid : ' + err.message);
            }
        )
}

const regiseterThroughEndpoint = (form, dispatch) => {
    return dispatch(registerUser(form));
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
            register((form.firstName + form.lastName), form.email, form.password, dispatch)
        },
        confirm: (confirmationCode, email, nav) => {
            navigation = nav;
            confirmAuth(email, confirmationCode, dispatch);
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