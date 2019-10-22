import { regValueChange } from '../actions/formActions'
import RegistrationScreen from '../screens/RegistrationScreen'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        form: state.forms.registration,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeText: (prop, val) => {
            dispatch(regValueChange(prop, val));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationScreen)