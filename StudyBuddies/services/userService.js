import { postApiGenerator } from './postApiGenerator';
import { getApiGenerator } from './getApiGenerator';
import { FORM_SUBMIT, GET_GROUP_BY_USER } from '../types/reduxTypes'

export default userService = store => next => action => {
  next(action);
  switch (action.type) {

    case FORM_SUBMIT.REGISTER_POST:
      const registerPostApi = postApiGenerator(next);
      let headers = {
        Accept: 'application/json'
      }
      registerPostApi('/users', action.type, headers, action.form);
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
      let getApi = getApiGenerator(next);
      let getHeaders = {
        Accept: 'application/json',
      }
      getApi('/test', action.type, getHeaders);
      break;

    case GET_GROUP_BY_USER:
      getApi = getApiGenerator(next);
      getHeaders = {
        Accept: 'application/json',
      }
      console.log('group membership sending', action);
      getApi(`/users/${action.userId}/groupmemberships`, action.type, getHeaders);
      break;

    case FORM_SUBMIT.GET_USERID:
      const getUserIdApi = getApiGenerator(next);
      getHeaders = {
        Accept: 'application/json',
      }
      getUserIdApi(`/users?email=${action.email}`, action.type, getHeaders);
      break;
  }

}
