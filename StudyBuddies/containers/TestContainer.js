import { connect } from 'react-redux'
import { setFirstName } from '../actions/userActions'
import TestScreen from '../screens/TestScreen'

const mapStateToProps = state => {
  return {
    users: state.users,
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: (id, firstName) => {
      dispatch(setFirstName(id, firstName));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestScreen)
