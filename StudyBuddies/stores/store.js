import { applyMiddleware, createStore } from 'redux'
import studyBuddyApp from '../reducers/studyBuddyReducers'
import logger from 'redux-logger'
import userService from '../services/userService'

const initialState = {
  users: [
    {
      id: 0,
      info: {
        email: 'edl5040@psu.edu',
        firstName: 'Edward',
        lastName: 'Lach'
      }
    }
  ],
  forms: {
    registration: {},
    signin: {}
  }
};

const middlewares = [
  userService,
  logger,
]

export const store = createStore(
  studyBuddyApp,
  initialState,
  applyMiddleware(...middlewares)
);
