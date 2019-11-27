import { connect } from 'react-redux';
import GroupDetailsScreen from '../screens/GroupDetailsScreen';


const mapStateToProps = state => {
  return {
    details: state.groupSearch.details
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonPressed: (group, navigation) => {
      navigation.navigate("Home");
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetailsScreen)
