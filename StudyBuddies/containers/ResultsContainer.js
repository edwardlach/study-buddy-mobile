import { connect } from 'react-redux'
import ResultsScreen from '../screens/ResultsScreen'
import { updateSearchTerm, restrictToUniversity,
testGetResults } from '../actions/groupSearchActions'

const mapStateToProps = state => {
  return {
    searchTerm: state.groupSearch.searchTerm,
    groups: state.groupSearch.results,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    textChanged: (searchTerm) => {
      dispatch(updateSearchTerm(searchTerm));
    },
    buttonPressed: (groups, navigation) => {

    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsScreen)
