import {
  CONNECT,
  DISCONNECT,
  SEND_MESSAGE,
  MSG_RECEIVED,
  IDENTIFY,
  UPDATE_MESSAGE,
  WSS } from '../types/reduxTypes'

/*
  WebSocket API - https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
  Useful resource on using websockets in middleware
  https://dev.to/aduranil/how-to-use-websockets-with-redux-a-step-by-step-guide-to-writing-understanding-connecting-socket-middleware-to-your-project-km3
*/

const webSocketService = () => {
  let socket = null;

  const onMessage = next => (event) => {
      if (event.data != undefined) {
        const payload = JSON.parse(event.data);
        const message = {
          message: payload.message,
          userId: payload.userId,
          groupId: payload.groupId
        };
        next({
          type: MSG_RECEIVED,
          message: message
        });
      }
  }

  const onError = (next, action) => (error) => {
    alert(error);
    next({
      type: UPDATE_MESSAGE,
      text: action.message.message
    });
  }

  const onClose = () => {
    console.log("Web Socket closed!");
  }

  const onOpen = action => (event) => {
    socket.send(
      JSON.stringify(
        {
          ...action.message,
          action: IDENTIFY
        }
      )
    );
  }

  return store => next => action => {

    switch (action.type) {
      case CONNECT:
        if (socket !== null) {
          socket.close();
        }
        socket = new WebSocket(WSS);
        socket.onmessage = onMessage(next);
        socket.onclose = onClose();
        socket.onerror = onError(next, action);
        socket.onopen = onOpen(action);
        return next(action);
        break;

      case DISCONNECT:
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        return next(action);
        break;

      case SEND_MESSAGE:
        socket.send(JSON.stringify(action.message));
        return next(action);
        break;

      default:
        return next(action);
        break;
    }
  }
}

export default webSocketService();
