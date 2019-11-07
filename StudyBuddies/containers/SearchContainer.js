import { connect } from 'react-redux'
import SearchScreen from '../screens/SearchScreen'
import {
  updateSearchTerm, restrictToUniversity,
  testGetResults, getGroupResults
} from '../actions/groupSearchActions'
import { getClasses } from '../actions/classActions'
import { studyGroups } from '../assets/testData/studyGroups'


const mapStateToProps = state => {
  return {
    groupSearch: state.groupSearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    textChanged: (searchTerm) => {
      dispatch(updateSearchTerm(searchTerm));
    },
    createButtonPressed: (groupSearch, navigation) => {
      dispatch(getClasses());
      navigation.navigate("GroupCreation");
    },
    showMoreButtonPressed: (groupSearch, navigation) => {
      navigation.navigate("GroupDetails");
    },
    isSelected: (groupResults) => {
      dispatch(restrictToUniversity());
    },
    editingComplete: (groupResults) => {
      dispatch(getGroupResults(groupResults.searchTerm));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen)
