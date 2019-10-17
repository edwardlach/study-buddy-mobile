import { signinValueChange } from '../actions/formActions'
import SigninScreen from '../screens/SigninScreen'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        form: state.forms.signin,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: (prop, val) => {
            dispatch(signinValueChange(prop, val));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SigninScreen)