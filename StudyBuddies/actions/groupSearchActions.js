import { ADD_RESULT, UPDATE_SEARCH_TERM, RESTRICT_TO_UNIVERSITY,
  GET_GROUP_RESULTS_COMPLETE, GET_GROUP_RESULTS, SET_DETAILS
 } from '../types/reduxTypes';

let nextResultId = 0
export const addResult = (result) => {
  return {
    type: ADD_RESULT,
    id: nextResultId++,
    result
  }
}

export const updateSearchTerm = (searchTerm) => {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm: searchTerm
  }
}

export const restrictToUniversity = () => {
  return {
    type: RESTRICT_TO_UNIVERSITY,
  }
}

export const testGetResults = (results) => {
  return {
    type: GET_GROUP_RESULTS_COMPLETE,
    results: results,
  }
}

export const getGroupResults = (searchTerm) => {
  return {
    type: GET_GROUP_RESULTS,
    searchTerm: searchTerm,
  }
}

export const setDetails = (group) => {
  return {
    type: SET_DETAILS,
    group: group
  }
}
