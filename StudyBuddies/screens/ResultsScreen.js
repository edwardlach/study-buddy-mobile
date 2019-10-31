import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import GroupStyles from '../styles/groupStyles';
import GroupListTile from '../components/GroupListTile';
import TextInputField from '../components/TextInputField';

const ResultsScreen = ({searchTerm, groups, navigation, buttonPressed,
  textChanged, field}) => {
  return (
    <View style={GroupStyles.container}>
      <TextInputField
        textChanged={textChanged}
        textValue={searchTerm}
        field={searchTerm}
      />
      <ScrollView style={GroupStyles.resultsContainer}>
        {
          groups.map(group => {
            return <GroupListTile
                      key={group.groupId}
                      group={group}
                      buttonPressed={buttonPressed}
                      navigation={navigation} />
          })
        }
      </ScrollView>
    </View>
  );
}

export default ResultsScreen;
