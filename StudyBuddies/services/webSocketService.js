import {
  CONNECT,
  DISCONNECT,
  SEND_MESSAGE,
  MSG_RECEIVED,
  WSS } from '../types/reduxTypes'

let socket = null;

/*
  WebSocket API - https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
  Useful resource on using websockets in middleware
  https://dev.to/aduranil/how-to-use-websockets-with-redux-a-step-by-step-guide-to-writing-understanding-connecting-socket-middleware-to-your-project-km3
*/

const onMessage = next => (event) => {
    const payload = JSON.parse(event.data);
    const message = Message({
      message: payload.message,
      userId: payload.userId,
      groupId: payload.groupId
    });
    next({
      type: MSG_RECEIVED,
      message: message
    });
}

export default webSocketService = store => next => action => {
  next(action);
  switch (action.type) {
    case CONNECT:
      if (socket == null) {
        let socket = new WebSocket(WSS);
        socket.send(JSON.stringify(action.message));
      }
      next(action);
      break;
    case DISCONNECT:
      if (socket !== null) {
        socket.close();
      }
      socket = null;
      next(action);
      break;
    case SEND_MESSAGE:
      socket.send(JSON.stringify(action.message));
      break;
    default:
      next(action);
      break;
  }
}
