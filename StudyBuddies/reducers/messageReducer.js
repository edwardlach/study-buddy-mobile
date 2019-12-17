import {
  MSG_RECEIVED,
  GET_MESSAGES_COMPLETE,
  CLEAR_MESSAGES
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
    if (state.length == 0)
      return [null]
    return [...state];
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
    case CLEAR_MESSAGES:
      return [];
    default:
      return state;
  }
}

export default messages;
