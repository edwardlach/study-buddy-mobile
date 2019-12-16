import { connect } from 'react-redux';
import CustomChatScreen from '../screens/CustomChatScreen';
import { AsyncStorage } from 'react-native';
import { sendMessage, updateMessage } from '../actions/messageActions';

const getGroupId = state => {
  var groupId;
  state.groups.groupList.forEach(group => {
    if (group.selected) {
      groupId = group.id;
    }
  });
  return groupId;
}



const mapStateToProps = state => {
  var groupId = getGroupId(state);

  if (state.messages[0] == null) {
    return {
      messages: [],
      groupId,
      messageText: state.messageText
    }
  }

  return {
    messages: state.messages.filter(
      message => message.groupId === groupId
    ),
    // userId: AsyncStorage.getItem('@UserId'),
    groupId: groupId,
    messageText: state.messageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (payload) => {
      AsyncStorage.getItem('@UserId')
        .then((userId) => {
          dispatch(sendMessage(
            {
              ...payload,
              userId: userId
            }
          ));
        })
        .then(() => {
          dispatch(updateMessage(""));
        });
    },
    updateMessageText: (text) => {
      dispatch(updateMessage(text));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomChatScreen)
