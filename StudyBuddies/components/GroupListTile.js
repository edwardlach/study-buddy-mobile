import React from 'react';
import {
  Stylesheet,
  View,
  Text
} from 'react-native';

import ComponentStyles from '../styles/componentStyles';
import SubmitButton from './SubmitButton';
import { buddyRed } from '../styles/constants';
import { SMALL } from '../types/componentTypes';

function memberLabel(group) {
  if (group.groupMemberships == null) {
    return "0 members";
  } else if (group.groupMemberships.length == 1) {
    return "1 member";
  } else {
    return group.groupMemberships.length + " members";
  }
}

const GroupListTile = ({group, buttonPressed, navigation}) => {
  return (
    <View style={ComponentStyles.groupListTile}>
      <View style={ComponentStyles.labelTextContainer}>
        <Text style={ComponentStyles.labelText}>{group.groupName}</Text>
      </View>
      <View style={ComponentStyles.labelDescriptionContainer}>
        <Text style={ComponentStyles.labelDescription}>{memberLabel(group)}</Text>
      </View>
      <SubmitButton
        label="Show more"
        buttonPressed={buttonPressed}
        navigation={navigation}
        data={group}
        color={buddyRed}
        size={SMALL} />
    </View>
  );
}

export default GroupListTile;
