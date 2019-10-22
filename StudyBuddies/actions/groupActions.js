import { ADD_GROUP, UPDATE_SUBJECT_ON_NEW_GROUP, UPDATE_UNIVERSITY_ON_NEW_GROUP,
  UPDATE_START_DATE_ON_NEW_GROUP, UPDATE_END_DATE_ON_NEW_GROUP,
  NEW_GROUP_START_DATE_SELECTED, NEW_GROUP_END_DATE_SELECTED, POST_GROUP
 } from '../types/reduxTypes';

let nextGroupId = 0
export const addGroup = (group) => {
  return {
    type: ADD_GROUP,
    id: nextGroupId++,
    group
  }
}

export const postGroup = (group) => {
  return {
    type: POST_GROUP,
    id: nextGroupId++,
    body: group
  }
}

export const updateSubjectOnNewGroup = (subject) => {
  return {
    type: UPDATE_SUBJECT_ON_NEW_GROUP,
    subject: subject
  }
}

export const updateUniversityOnNewGroup = (university) => {
  return {
    type: UPDATE_UNIVERSITY_ON_NEW_GROUP,
    university: university
  }
}

export const updateStartDateOnNewGroup = (startDate) => {
  return {
    type: UPDATE_START_DATE_ON_NEW_GROUP,
    startDate: startDate
  }
}

export const updateEndDateOnNewGroup = (endDate) => {
  return {
    type: UPDATE_END_DATE_ON_NEW_GROUP,
    endDate: endDate
  }
}

export const newGroupStartDateSelected = (selectedCount) => {
  return {
    type: NEW_GROUP_START_DATE_SELECTED,
    selectedCount: selectedCount,
  }
}

export const newGroupEndDateSelected = (selectedCount) => {
  return {
    type: NEW_GROUP_END_DATE_SELECTED,
    selectedCount: selectedCount,
  }
}
