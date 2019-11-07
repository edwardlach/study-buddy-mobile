import { signinValueChange } from '../actions/formActions'
import SigninScreen from '../screens/SigninScreen'
import { setModalVisibility } from '../actions/formActions'
import { connect } from 'react-redux'
import Auth from '@aws-amplify/auth';

let navigation = null;
//Amplify sign in
const signIn = (email, password, dispatch) => {
    Auth.signIn(email, password)
        .then(
            () => {
                alert('Congrats! You are now signed in');
                navigation.navigate('App');
            } //success
        )
        .catch(
            (err) => {
                alert('Error : ' + err.message);
                if (err.name == 'UserNotConfirmedException') {
                    Auth.resendSignUp(email);
                    changeModalVisbility(dispatch, true);
                }
            }
        )
}

const confirmAuth = (email, code, dispatch) => {

    Auth.confirmSignUp(email, code)
        .then((response) => {
            changeModalVisbility(dispatch, false);
            alert('Congrats! You are now confirmed');
            navigation.navigate('App');
        }
        ).catch(
            (err) => {
                alert('Invalid : ' + err.message);
            }
        )
}

const changeModalVisbility = (dispatch, visible) => {
    dispatch(setModalVisibility(visible));
}

const mapStateToProps = state => {
    return {
        form: state.forms.signin,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: (prop, val) => {
            dispatch(signinValueChange(prop, val));
        },
        onSubmit: (form, nav) => {
            navigation = nav;
            signIn(form.email, form.password, dispatch);
        },
        setModalVisible: (visible) => {
            changeModalVisbility(dispatch, visible);
        },
        confirm: (confirmationCode, email, nav) => {
            navigation = nav;
            confirmAuth(email, confirmationCode, dispatch);
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SigninScreen)