import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import TextInputField from '../components/TextInputField'
import SubmitButton from '../components/SubmitButton'
import { CheckBox } from 'react-native-elements'

import { CLASS_OR_SUBJECT } from '../types/formTypes'
import { buddyBlue } from '../styles/constants'
import GroupStyles from '../styles/groupStyles'

const SearchScreen = ({textChanged, groupSearch, buttonPressed, navigation,
isSelected}) => {
  return (
    <View style={GroupStyles.container}>
      <Text style={GroupStyles.headerText}>Find a Study Group</Text>
      <TextInputField
        textChanged={textChanged}
        textValue={groupSearch.searchTerm}
        field={CLASS_OR_SUBJECT} />
      <CheckBox
        title="Only show groups for your University/College"
        containerStyle={GroupStyles.checkbox}
        checked={groupSearch.isUniversityRestricted}
        checkedColor={buddyBlue}
        onPress={() => isSelected()} />
      <SubmitButton
        label="Search"
        buttonPressed={buttonPressed}
        navigation={navigation}
        data={groupSearch} />
    </View>
  );
}

export default SearchScreen;
