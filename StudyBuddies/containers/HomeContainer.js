import { connect } from 'react-redux';
import { getGroupsByUserId } from '../actions/userActions';
import { selectGroup } from '../actions/groupActions';
import { AsyncStorage } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import { CONNECT } from '../types/reduxTypes';
import { wsConnect, getMessages } from '../actions/messageActions';


const mapStateToProps = state => {
    return {
        groups: state.groups
    }
}

const getUserId = async (dispatch) => {
    const id = await AsyncStorage.getItem('@UserId');
    dispatch(getGroupsByUserId(id));
}

const connectToWebSocket = async (groupId, dispatch) => {
  AsyncStorage.getItem('@UserId')
    .then((userId) => {
      dispatch(wsConnect({
        action: CONNECT,
        groupId: groupId,
        userId: userId
      }));
    });
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserGroups: async () => {
            await getUserId(dispatch);
            // dispatch(getGroupsByUserId(5));
        },
        groupSelected: (navigation, groupId) => {
          dispatch(selectGroup(groupId));
          dispatch(getMessages(groupId));
          connectToWebSocket(groupId, dispatch);
          navigation.navigate("Chat");
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)
