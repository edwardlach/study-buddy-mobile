import { connect } from 'react-redux'
import { Auth } from 'aws-amplify';
import { AsyncStorage } from 'react-native'
import { clearGroups } from '../actions/groupActions';
import ProfileScreen from '../screens/ProfileScreen';

async function logout(dispatch, navigation) {
    Auth.signOut({ global: true }).then(
        await AsyncStorage.removeItem('@UserId', (err) => {
          console.log(err)
        })
        .then(() => {
          dispatch(clearGroups());
          navigation.navigate('Auth')
        })
    )
    .catch((err)=> console.log('error logging out', err))
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (navigation) => {
          logout(dispatch, navigation);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileScreen);
