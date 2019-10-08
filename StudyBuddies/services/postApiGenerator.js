import { API, POST_USER_COMPLETE } from '../types/reduxTypes';

export const postApiGenerator = next => (route, name, headers, body) => {
  post = async () => {
    endpoint = API + route;
    fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      }
    ).then((response) => {
      response.json().then(data => {
        next({
          type: `${name}_COMPLETE`,
          info: data.info,
          reduxId: data.reduxId
        });
      })
    });
  }

  post();
}
