import { connect } from 'react-redux'
import SearchScreen from '../screens/SearchScreen'
import { updateSearchTerm, restrictToUniversity } from '../actions/groupSearchActions'

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
    buttonPressed: (groupSearch, navigation) => {
      navigation.navigate("GroupCreation");
    },
    isSelected: () => {
      dispatch(restrictToUniversity());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen)
