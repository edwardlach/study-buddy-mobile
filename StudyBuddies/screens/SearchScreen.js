import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import TextInputField from '../components/TextInputField';
import SubmitButton from '../components/SubmitButton';
import GroupListTile from '../components/GroupListTile';
import { CheckBox } from 'react-native-elements';

import { CLASS_OR_SUBJECT } from '../types/formTypes';
import { LARGE, SEARCH } from '../types/componentTypes';
import { buddyBlue } from '../styles/constants';
import GroupStyles from '../styles/groupStyles';
import ComponentStyles from '../styles/componentStyles';

const SearchScreen = ({textChanged, groupSearch, createButtonPressed, navigation,
isSelected, editingComplete, showMoreButtonPressed}) => {
  return (
    <View style={GroupStyles.container}>
      <Text style={GroupStyles.headerText}>Find a Study Group</Text>
      <TextInputField
        textChanged={textChanged}
        textValue={groupSearch.searchTerm}
        data={groupSearch}
        editingComplete={editingComplete}
        type={SEARCH}
        field={CLASS_OR_SUBJECT} />
      <CheckBox
        title="Only show groups for your University/College"
        containerStyle={GroupStyles.checkbox}
        checked={groupSearch.isUniversityRestricted}
        checkedColor={buddyBlue}
        onPress={() => isSelected(groupSearch)} />
      <Text style={GroupStyles.boldText}>Or</Text>
      <SubmitButton
        label="Create Study Group"
        buttonPressed={createButtonPressed}
        navigation={navigation}
        data={groupSearch}
        customStyle={ComponentStyles.solidLine}
        color={buddyBlue}
        size={LARGE} />
      <ScrollView style={GroupStyles.resultsContainer}>
        {
          groupSearch.results.map(group => {
            return <GroupListTile
                      key={group.groupId}
                      group={group}
                      buttonPressed={showMoreButtonPressed}
                      navigation={navigation} />
          })
        }
      </ScrollView>
    </View>
  );
}

export default SearchScreen;
