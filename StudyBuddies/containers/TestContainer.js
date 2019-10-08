import { connect } from 'react-redux'
import { setFirstName, getUser, postUser } from '../actions/userActions'
import TestScreen from '../screens/TestScreen'

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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestScreen)
