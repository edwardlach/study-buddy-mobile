import { UPDATE_SEARCH_TERM, RESTRICT_TO_UNIVERSITY,
  GET_GROUP_RESULTS_COMPLETE } from '../types/reduxTypes'

/**************** Helper Functions ****************/

const updateSearchTerm = (state, action) => {
  return {
      searchTerm: action.searchTerm,
      isUniversityRestricted: state.isUniversityRestricted,
      results: [
        ...state.results
      ]
  }
}

const restrictToUniversity = (state, action) => {
  return {
    searchTerm: state.searchTerm,
    isUniversityRestricted: state.isUniversityRestricted ? false : true,
    results: [
      ...state.results
    ]
  }
}

const getGroupResultsComplete = (state, action) => {
  try {
    return {
      ...state,
      results: [
        ...action.body
      ]
    }
  } catch {
    alert(action.body.message)
    return {
      ...state
    }
  }
}


/**************** Reducer Function ****************/

const groupSearch = (state = [], action) => {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return updateSearchTerm(state, action);
      break;
    case RESTRICT_TO_UNIVERSITY:
      return restrictToUniversity(state, action);
      break;
    case GET_GROUP_RESULTS_COMPLETE:
      return getGroupResultsComplete(state, action);
      break;
    default:
      return state;
  }
}

export default groupSearch;
