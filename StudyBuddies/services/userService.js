import { postApiGenerator } from './postApiGenerator';
import { getApiGenerator } from './getApiGenerator';
import { FORM_SUBMIT } from '../types/reduxTypes'

export default userService = store => next => action => {
  next(action);
  switch (action.type) {
    case FORM_SUBMIT.REGISTER_POST:
      console.log('form from reg to post', action.form);
      const registerPostApi = getApiGenerator(next);
      let headers = {
        Accept: 'application/json'
      }
      registerPostApi('/users', action.form, headers);
      break;

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
