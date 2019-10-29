import { signinValueChange } from '../actions/formActions'
import SigninScreen from '../screens/SigninScreen'
import { connect } from 'react-redux'
import Auth from '@aws-amplify/auth';


//Amplify sign in
const signIn = (email, password) => {
    Auth.signIn(email, password)
        .then(
            (response) => {
                alert('Sign in successful')
                console.log('sign in response', response);
            } //success
        )
        .catch(
            (err) => {
                alert('unable to sign in')
                console.log('login error', err);
            }
        )
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
        onSubmit: (form) => {
            signIn(form.email, form.password);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SigninScreen)