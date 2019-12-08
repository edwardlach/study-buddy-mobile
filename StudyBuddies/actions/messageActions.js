import {
  CONNECT,
  DISCONNECT,
  SEND_MESSAGE
} from '../types/reduxTypes';

export const connect = (message) => {
  return {
    type: CONNECT,
    message: message
  }
}

export const disconnect = () => {
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
