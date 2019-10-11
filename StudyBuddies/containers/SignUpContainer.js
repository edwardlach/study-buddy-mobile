import { connect } from 'react-redux'
import { updateName } from '../actions/signupActions'
import SignUpScreen from '../screens/SignUpScreen';

const mapStateToProps = state => {
    return {
      name: state.name,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: (prop, val) => {
        dispatch(updateName(val));
      },
      onSubmit : () => {}
    }
  }

  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpScreen)