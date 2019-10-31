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


const GroupListTile = ({group, buttonPressed, navigation}) => {
  return (
    <View style={ComponentStyles.groupListTile}>
      <View style={ComponentStyles.labelTextContainer}>
        <Text style={ComponentStyles.labelText}>{group.class.name}</Text>
      </View>
      <View style={ComponentStyles.labelDescriptionContainer}>
        <Text style={ComponentStyles.labelDescription}>{group.members.length+" members"}</Text>
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
