import { UPDATE_SUBJECT_ON_NEW_GROUP, UPDATE_UNIVERSITY_ON_NEW_GROUP,
  UPDATE_START_DATE_ON_NEW_GROUP, UPDATE_END_DATE_ON_NEW_GROUP,
  NEW_GROUP_START_DATE_SELECTED, NEW_GROUP_END_DATE_SELECTED,
  UPDATE_NAME_ON_NEW_GROUP, UPDATE_SUBJECT_ID_ON_NEW_GROUP
} from '../types/reduxTypes';

/**************** Helper Functions ****************/


const updateSubject = (state, action) => {
  return {
    ...state,
    subject: action.subject,
    startDateSelected: false,
    endDateSelected: false,
    subjectSelected: false,
  }
}

const updateSubjectId = (state, action) => {
  return {
    ...state,
    subjectId: action.id,
    startDateSelected: false,
    endDateSelected: false,
    subjectSelected: true,
  }
}

const updateUniversity = (state, action) => {
  return {
    ...state,
    university: action.university,
    startDateSelected: false,
    endDateSelected: false
  }
}

const updateNameOnNewGroup = (state, action) => {
  return {
    ...state,
    groupName: action.name,
    startDateSelected: false,
    endDateSelected: false
  }
}

const updateStartDate = (state, action) => {
  return {
    ...state,
    startDate: action.startDate,
  }
}

const updateEndDate = (state, action) => {
  return {
    ...state,
    endDate: action.endDate,
  }
}

const startDateSelected = (state, action) => {
  return state.startDateSelected ? {
    ...state,
    startDateSelected: false,
    endDateSelected: false
  } : {
    ...state,
    startDateSelectedCount: action.selectedCount + 1,
    startDateSelected: true,
    endDateSelected: false
  }
}

const endDateSelected = (state, action) => {
  return state.endDateSelected ? {
    ...state,
    startDateSelected: false,
    endDateSelected: false
  } : {
    ...state,
    endDateSelectedCount: action.selectedCount + 1,
    startDateSelected: false,
    endDateSelected: true
  }
}


/**************** Reducer Function ****************/

const newGroup = (state = [], action) => {
  switch(action.type) {
    case UPDATE_SUBJECT_ON_NEW_GROUP:
      return updateSubject(state, action);
      break;
    case UPDATE_UNIVERSITY_ON_NEW_GROUP:
      return updateUniversity(state, action);
      break;
    case UPDATE_NAME_ON_NEW_GROUP:
      return updateNameOnNewGroup(state, action);
      break;
    case UPDATE_START_DATE_ON_NEW_GROUP:
      return updateStartDate(state, action);
      break;
    case UPDATE_END_DATE_ON_NEW_GROUP:
      return updateEndDate(state, action);
      break;
    case NEW_GROUP_START_DATE_SELECTED:
      return startDateSelected(state, action);
      break;
    case NEW_GROUP_END_DATE_SELECTED:
      return endDateSelected(state, action);
      break;
    case UPDATE_SUBJECT_ID_ON_NEW_GROUP:
      return updateSubjectId(state, action);
      break;
    default:
      return state;
  }
}

export default newGroup;
