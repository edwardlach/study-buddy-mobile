import { API, GET_USER_COMPLETE } from '../types/reduxTypes';

export const getApiGenerator = next => (route, name, headers, api = API) => {
  get = async () => {
    endpoint = api + route;
    console.log(endpoint);
    fetch(endpoint, {
      method: 'GET',
      headers: headers
    }
    ).then((response) => {
      response.json().then(data => {
        next({
          type: `${name}_COMPLETE`,
          body: data
        });
      });
    });
  }

  get();
}
