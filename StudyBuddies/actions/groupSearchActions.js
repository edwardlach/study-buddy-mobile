import { ADD_RESULT, UPDATE_SEARCH_TERM, RESTRICT_TO_UNIVERSITY
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
