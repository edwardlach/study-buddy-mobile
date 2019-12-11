import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import studyBuddyApp from '../reducers/studyBuddyReducers'
import logger from 'redux-logger'
import userService from '../services/userService'
import groupService from '../services/groupService'
import webSocketService from '../services/webSocketService'

/**
  Check out this article on persistence in redux, would be useful to add if time permits
  https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975
**/

const initialState = {
  newGroup: {
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    startDateSelected: false,
    startDateSelectedCount: 0,
    endDateSelected: false,
    endDateSelectedCount: 0,
  },
  classes: [
    {
      classId: 23,
      classNumber: 220,
      created: "2019-11-04T00:00:00",
      deleted: false,
      name: "Matrices",
      subject: "MATH",
      universityId: 1,
      updated: "2019-11-04T00:00:00",
    }
  ],
  forms: {
    registration: {
    },
    signin: {
      modalVisible: false,
    }
  },
  messages: [],
  groups: {
    loaded: false
  },
  groupSearch: {
    searchTerm: "",
    isUniversityRestricted: false,
    results: [],
  },
};

const middlewares = [
  userService,
  groupService,
  webSocketService,
  logger,
]

export const store = createStore(
  studyBuddyApp,
  initialState,
  applyMiddleware(...middlewares, thunk)
);
