import { postApiGenerator } from './postApiGenerator';
import { getApiGenerator } from './getApiGenerator';

// import Auth from '@aws-amplify/auth';
//
// async function getToken() {
//   const session = await Auth.currentSession();
//   console.log(session);
//   return session.idToken.jwtToken;
// }
//

export default userService = store => next => action => {
  next(action);
  switch(action.type) {
    case 'POST_USER':
      const postApi = postApiGenerator(next);
      body = action.body
      body['reduxId'] = action.id;
      let postHeaders = {
        Accept: 'application/json',
      }
      postApi('/test', action.type, postHeaders, action.body)
      break;
    case 'GET_USER':
      const getApi = getApiGenerator(next);
      let getHeaders = {
        Accept: 'application/json',
      }
      getApi('/test', action.type, getHeaders);
      break;
  }
}
