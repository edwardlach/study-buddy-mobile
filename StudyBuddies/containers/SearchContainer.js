import { connect } from 'react-redux'
import SearchScreen from '../screens/SearchScreen'
import { updateSearchTerm, restrictToUniversity,
testGetResults } from '../actions/groupSearchActions'
import { studyGroups } from '../assets/testData/studyGroups'

const mapStateToProps = state => {
  return {
    groupSearch: state.groupSearch
  }
}

function getTestResults(groupResults) {
  return studyGroups.studyGroups.filter(group => {
      switch(groupResults.isUniversityRestricted) {
        case true:
          return group.class.name.toLowerCase().includes(groupResults.searchTerm.toLowerCase())
            & group.university.universityId == 1;
          break;
        case false:
        default:
          return group.class.name.toLowerCase().includes(groupResults.searchTerm.toLowerCase());
          break;
      }
  });

}

const mapDispatchToProps = (dispatch) => {
  return {
    textChanged: (searchTerm) => {
      dispatch(updateSearchTerm(searchTerm));
    },
    createButtonPressed: (groupSearch, navigation) => {
      navigation.navigate("GroupCreation");
    },
    showMoreButtonPressed: (groupSearch, navigation) => {
      navigation.navigate("GroupDetails");
    },
    isSelected: (groupResults) => {
      dispatch(restrictToUniversity());
    },
    editingComplete: (groupResults) => {
      dispatch(testGetResults(getTestResults(groupResults)));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen)
