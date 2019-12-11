import { UPDATE_MESSAGE } from '../types/reduxTypes';

/**************** Reducer Function ****************/

const messageText = (state = "", action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return action.text
    default:
      return state;
  }
}

export default messageText;
