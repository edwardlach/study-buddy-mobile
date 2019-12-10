import {
  CONNECT,
  DISCONNECT,
  SEND_MESSAGE,
  UPDATE_MESSAGE
} from '../types/reduxTypes';

export const wssConnect = (message) => {
  return {
    type: CONNECT,
    message: message
  }
}

export const wssDisconnect = () => {
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
