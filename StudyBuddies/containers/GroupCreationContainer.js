import { connect } from 'react-redux'
import { updateSubjectOnNewGroup, updateNameOnNewGroup,
  updateStartDateOnNewGroup, updateEndDateOnNewGroup, newGroupStartDateSelected,
  newGroupEndDateSelected, postGroup, updateSubjectIdOnNewGroup
} from '../actions/groupActions';
import GroupCreationScreen from '../screens/GroupCreationScreen';
import Group from '../factories/GroupFactory';
import { AsyncStorage } from 'react-native';
import { SUBJECT, UNIVERSITY, START_DATE,
   END_DATE, GROUP_NAME
} from '../types/formTypes';

const createGroup = async (dispatch, navigation, group) => {
    AsyncStorage.getItem('@UserId')
      .then((userId) => {
        dispatch(postGroup(group, userId));
        navigation.goBack();
        navigation.navigate("Home");
      });
}

const mapStateToProps = state => {
  return {
    group: state.newGroup,
    classes: state.classes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    textChanged: (text, field) => {
      switch(field) {
        case SUBJECT:
          dispatch(updateSubjectOnNewGroup(text));
          break;
        case GROUP_NAME:
          dispatch(updateNameOnNewGroup(text));
          break;
      }
    },
    itemPressed: (subject) => {
      dispatch(updateSubjectOnNewGroup(subject.name));
      dispatch(updateSubjectIdOnNewGroup(subject.classId));
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
    buttonPressed: (data, navigation) => {
      group = Group({
        groupName: data.groupName,
        classId: data.subjectId,
        startDate: data.startDate,
        endDate: data.endDate
      });
      createGroup(dispatch, navigation, group);
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
