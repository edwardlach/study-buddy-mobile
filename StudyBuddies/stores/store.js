import { applyMiddleware, createStore } from 'redux'
import studyBuddyApp from '../reducers/studyBuddyReducers'
import logger from 'redux-logger'
import userService from '../services/userService'
import groupService from '../services/groupService'

/**
  Check out this article on persistence in redux, would be useful to add if time permits
  https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975
**/

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
  newGroup: {
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    startDateSelected: false,
    startDateSelectedCount: 0,
    endDateSelected: false,
    endDateSelectedCount: 0,
  },
  groupSearch: {
    searchTerm: "",
    isUniversityRestricted: false,
    results: [],
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
      modalVisible: false,
    },
    signin: {}
  }
};

const middlewares = [
  userService,
  groupService,
  logger,
]

export const store = createStore(
  studyBuddyApp,
  initialState,
  applyMiddleware(...middlewares)
);
