import { MSG_RECEIVED } from '../types/reduxTypes';

/**************** Helper Functions ****************/

const messageReceived = (state, action) => {
  return [
    ...state,
    {
      ...action.message
    }
  ];
}


/**************** Reducer Function ****************/

const messages = (state = [], action) => {
  switch (action.type) {
    case MSG_RECEIVED:
      return messageReceived(state, action);
    default:
      return state;
  }
}

export default messages;
