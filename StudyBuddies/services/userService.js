import { postApiGenerator } from './postApiGenerator';

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
  const postApi = postApiGenerator(next);
  switch(action.type) {
    case 'POST_USER':
      // getToken()
      //   .then((token) => {
      //     let headers = {
      //       Accept: 'application/json',
      //       Authorization: token
      //     }
      //     body = action.body
      //     body['reduxId'] = action.id;
      //     postApi('/users', 'POST_USER', headers, action.body)
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      break;
  }
}
