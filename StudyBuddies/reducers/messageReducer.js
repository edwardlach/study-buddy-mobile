import {
  MSG_RECEIVED,
  GET_MESSAGES_COMPLETE
} from '../types/reduxTypes';

/**************** Helper Functions ****************/

const messageReceived = (state, action) => {
  return [
    ...state,
    action.message
  ];
}

const messagesReceived = (state, action) => {
  if (action.body.message != null) {
    alert(action.body.message);
    return [...state]
  }
  return [
    ...state,
    ...action.body
  ]
}


/**************** Reducer Function ****************/

const messages = (state = [], action) => {
  switch (action.type) {
    case MSG_RECEIVED:
      return messageReceived(state, action);
    case GET_MESSAGES_COMPLETE:
      return messagesReceived(state, action);
    default:
      return state;
  }
}

export default messages;
