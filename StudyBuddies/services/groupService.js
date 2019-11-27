import { postApiGenerator } from './postApiGenerator';
import { getApiGenerator } from './getApiGenerator';
import {
  POST_GROUP, GET_GROUP, GET_GROUP_RESULTS, GET_CLASSES
} from '../types/reduxTypes';

// import Auth from '@aws-amplify/auth';
//
// async function getToken() {
//   const session = await Auth.currentSession();
//   console.log(session);
//   return session.idToken.jwtToken;
// }
//

export default groupService = store => next => action => {
  next(action);
  switch (action.type) {

    case POST_GROUP:
      const postApi = postApiGenerator(next);
      body = action.body
      let postHeaders = {
        Accept: 'application/json',
      }
      postApi('/groups', action.type, postHeaders, action.body)
      break;

    case GET_GROUP:
      const getApi = getApiGenerator(next);
      let getHeaders = {
        Accept: 'application/json',
      }
      getApi('/groups', action.type, getHeaders);
      break;

    case GET_GROUP_RESULTS:
      const searchApi = getApiGenerator(next);
      let searchHeaders = {
        Accept: 'application/json',
      }
      searchApi('/groups?searchTerm=' + action.searchTerm,
        action.type, searchHeaders);
      break;

    case GET_CLASSES:
      const classApi = getApiGenerator(next);
      let classHeaders = {
        Accept: 'application/json',
      }
      classApi('/subjects', action.type, classHeaders);
      break;

  }
}
