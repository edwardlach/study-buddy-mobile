import { API, GET_USER_COMPLETE } from '../types/reduxTypes';

export const getApiGenerator = next => (route, name, headers) => {
  get = async () => {
    endpoint = API + route;
    console.log(endpoint);
    fetch(endpoint, {
        method: 'GET',
        headers: headers
      }
    ).then((response) => {
      response.json().then(data => {
        next({
          type: `${name}_COMPLETE`,
          info: data.info,
          reduxId: data.reduxId
        });
      });
    });
  }

  get();
}
