import {
  CONNECT,
  DISCONNECT,
  SEND_MESSAGE,
  UPDATE_MESSAGE,
  GET_MESSAGES
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

export const getMessages = (groupId) => {
  return {
    type: GET_MESSAGES,
    groupId: groupId
  }
}
