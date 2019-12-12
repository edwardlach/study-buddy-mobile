import { postApiGenerator } from './postApiGenerator';
import { getApiGenerator } from './getApiGenerator';
import { GET_MESSAGES } from '../types/reduxTypes';

export default messageService = store => next => action => {
  next(action);
  switch (action.type) {

    case GET_MESSAGES:
      const getMessagesApi = getApiGenerator(next);
      let headers = {
        Accept: 'application/json'
      }
      getMessagesApi(
        '/groups/' + action.groupId + '/messages',
         action.type,
         headers);
      break;

  }

}
