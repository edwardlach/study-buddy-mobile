import { connect } from 'react-redux'
import { getGroupsByUserId } from '../actions/userActions'
import { AsyncStorage } from 'react-native'
import HomeScreen from '../screens/HomeScreen'


const mapStateToProps = state => {
    return {
        groups: state.groups
    }
}

const getUserId = async (dispatch) => {
    const id = await AsyncStorage.getItem('@UserId');
    dispatch(getGroupsByUserId(id));
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserGroups: async () => {
            await getUserId(dispatch);
            // dispatch(getGroupsByUserId(5));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)
