import { signinValueChange } from '../actions/formActions'
import SigninScreen from '../screens/SigninScreen'
import { connect } from 'react-redux'
import Auth from '@aws-amplify/auth';

let navigation = null;
//Amplify sign in
const signIn = (email, password) => {
    Auth.signIn(email, password)
        .then(
            (response) => {
                alert('Congrats! You are now signed in');
                console.log('sign in response', response);
                navigation.navigate('App');
            } //success
        )
        .catch(
            (err) => {
                alert('Error : ' + err.message);
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
        onSubmit: (form, nav) => {
            navigation = nav;
            signIn(form.email, form.password);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SigninScreen)