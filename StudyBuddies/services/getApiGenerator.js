import { API } from '../types/reduxTypes';

export const getApiGenerator = next => (route, name, headers, uuid) => {
  get = async () => {
    endpoint = API + route + "/" + uuid;
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
      }).catch((error) => {
        console.log("Response Parse Error!");
        next({
          type: `${name}_FAILED`,
          response: error.message
        });
      });
    }).catch((error) => {
      console.log("Get Error!");
      next({
        type: `${name}_FAILED`,
        response: error.message
      });
    });
  }

  get();
}
