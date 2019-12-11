import {
  CONNECT,
  DISCONNECT,
  SEND_MESSAGE,
  UPDATE_MESSAGE
} from '../types/reduxTypes';

export const wsConnect = (message) => {
  return {
    type: CONNECT,
    message: message
  }
}

export const wsDisconnect = () => {
  return {
    type: DISCONNECT
  }
}

export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    message: message
  }
}

export const updateMessage = (text) => {
  return {
    type: UPDATE_MESSAGE,
    text: text
  }
}
