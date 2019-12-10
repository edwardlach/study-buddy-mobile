import { connect } from 'react-redux';
import GroupDetailsScreen from '../screens/GroupDetailsScreen';
import { AsyncStorage } from 'react-native';
import { joinGroup } from '../actions/groupActions';
import { GroupMembership } from '../factories/GroupMembershipFactory';



const mapStateToProps = state => {
  return {
    details: state.groupSearch.details
  }
}

const sendJoinRequest = async (dispatch, navigation, group) => {
    AsyncStorage.getItem('@UserId')
      .then((userId) => {
        membership = {
          userId: userId,
          groupId: group.groupId.toString()
        };
        dispatch(joinGroup(membership));
        navigation.goBack();
        navigation.navigate("Home");
      });
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonPressed: (group, navigation) => {
      sendJoinRequest(dispatch, navigation, group);
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetailsScreen)
