import { UPDATE_SEARCH_TERM, RESTRICT_TO_UNIVERSITY } from '../types/reduxTypes'

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


/**************** Reducer Function ****************/

const groupSearch = (state = [], action) => {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return updateSearchTerm(state, action);
      break;
    case RESTRICT_TO_UNIVERSITY:
      return restrictToUniversity(state, action);
      break;
    default:
      return state;
  }
}

export default groupSearch;
