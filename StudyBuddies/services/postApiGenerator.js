import { API, POST_USER_COMPLETE } from '../types/reduxTypes';

import Auth from '@aws-amplify/auth';

async function getToken() {
  const session = await Auth.currentSession();
  return session.idToken.jwtToken;
}

export const postApiGenerator = next => (route, name, headers, body, api = API) => {
  post = async () => {
    getToken().then((token) => {
      endpoint = api + route;
      fetch(endpoint, {
        method: 'POST',
        headers: {
          ...headers,
          Authorization: token
        },
        body: JSON.stringify(body),
      }
      ).then((response) => {
        response.json().then(data => {
          next({
            type: `${name}_COMPLETE`,
            body: data
          });
        })
      });
    });
  }

  post();
}
