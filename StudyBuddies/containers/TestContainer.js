import { connect } from 'react-redux'
import { setFirstName, getUser, postUser } from '../actions/userActions'
import TestScreen from '../screens/TestScreen'

import Auth from '@aws-amplify/auth';

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: (id, user) => {
      // dispatch(setFirstName(id, firstName));
      dispatch(postUser(id, user));
    },
    signIn: (email, password) => {
      Auth.signIn(email, password)
        // If we are successful, navigate to the next screen
        .then(user => {
                        // This is where we would save the user information we
                        // get back from Amplify.  The value below is the user
                        // specific uuid that Amplify generates that we should
                        // probably save.
                        console.log(user.attributes.sub);
                      })
        // This is where we should navigate to the next screen, likely our home screen
        .then(() => console.log("Navigate to the next screen"))
        // TODO - on failure display an error message to the user with failure information
        .catch(err => console.log(err));
    },
    signUp: (email, password, confirmPassword) => {
      if (password === confirmPassword) {
        Auth.signUp({
          username: email,
          password,
          attributes: { email },
          })
          // On success, show Confirmation Code Modal
          // This action isn't built out yet, I used this to alter the state of the
          // form I displayed so there was no need to navigate to a new page to
          // have the user authenticate.  The showConfirmation() action just flips
          // a boolean to true indicating that the input should be available.
          .then(() => /*dispatch(showConfirmation())*/ consol.log("Show confirmation"))
          // TODO - on failure display an error message to the user with failure information
          .catch(err => console.log(err));
      } else {
        alert('Passwords do not match.');
      }
    },
    confirmSignUp: (email, confirmationCode) => {
      Auth.confirmSignUp(email, confirmationCode, {})
        .then(() => {
          // I used another action to flip the navigation display value back to false
          // so that it would no longer appear if a user signed out to create a new account.
          // dispatch(hideConfirmation());
          console.log("Hide confirmation form and navigate home.");
        })
        // TODO - on failure display an error message to the user with failure information
        .catch(err => console.log(err));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestScreen)
