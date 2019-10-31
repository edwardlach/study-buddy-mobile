import { connect } from 'react-redux'
import { updateSubjectOnNewGroup, updateUniversityOnNewGroup,
  updateStartDateOnNewGroup, updateEndDateOnNewGroup, newGroupStartDateSelected,
  newGroupEndDateSelected, postGroup
 } from '../actions/groupActions'
import GroupCreationScreen from '../screens/GroupCreationScreen'
import Group from '../models/Group'
import { SUBJECT, UNIVERSITY, START_DATE, END_DATE } from '../types/formTypes'

const mapStateToProps = state => {
  return {
    group: state.newGroup,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    textChanged: (text, field) => {
      switch(field) {
        case SUBJECT:
          dispatch(updateSubjectOnNewGroup(text));
          break;
        case UNIVERSITY:
          dispatch(updateUniversityOnNewGroup(text));
          break;
      }
    },
    dateChanged: (newDate, field) => {
      switch(field) {
        case START_DATE:
          dispatch(updateStartDateOnNewGroup(newDate));
          break;
        case END_DATE:
          dispatch(updateEndDateOnNewGroup(newDate));
          break;
      }
    },
    buttonPressed: (data) => {
      dispatch(postGroup(data));
    },
    selected: (field, selectedCount) => {
      switch(field) {
        case START_DATE:
          dispatch(newGroupStartDateSelected(selectedCount));
          break;
        case END_DATE:
          dispatch(newGroupEndDateSelected(selectedCount));
          break;
      }
    },
    editingComplete: () => {},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCreationScreen)
