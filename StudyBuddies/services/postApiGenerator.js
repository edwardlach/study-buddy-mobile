import { API } from '../types/reduxTypes';

export const postApiGenerator = next => (route, name, headers, body) => {
  const baseUrl = "https://uwxyuxkvg5.execute-api.us-east-1.amazonaws.com/dev"
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
      }).catch((error) => {
        console.log("Response Parse Error!");
        next({
          type: `${name}_FAILED`,
          response: error.message
        });
      });
    }).catch((error) => {
      console.log("Post Error!");
      next({
        type: `${name}_FAILED`,
        response: error.message
      });
    });
  }

  post();
}
