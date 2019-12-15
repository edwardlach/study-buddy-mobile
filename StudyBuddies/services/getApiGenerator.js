import { API, GET_USER_COMPLETE } from '../types/reduxTypes';

import Auth from '@aws-amplify/auth';

async function getToken() {
  const session = await Auth.currentSession();
  return session.idToken.jwtToken;
}

export const getApiGenerator = next => (route, name, headers, api = API) => {
  get = async () => {
    getToken().then((token) => {
      endpoint = api + route;
      fetch(endpoint, {
        method: 'GET',
        headers: {
          ...headers,
          Authorization: token
        }
      }
      ).then((response) => {
        response.json().then(data => {
          next({
            type: `${name}_COMPLETE`,
            body: data
          });
        });
      });
    });
  }

  get();
}
