import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

import GroupStyles from '../styles/groupStyles';
import DetailsCard from '../components/DetailsCard';
import SubmitButton from '../components/SubmitButton';

import { buddyBlue, darkBuddyBlue, buddyRed } from '../styles/constants';
import { SUBJECT, UNIVERSITY, MEMBERS, LARGE } from '../types/componentTypes';

function memberLabel(group) {
  if (group.groupMemberships == null) {
    return "0 members";
  } else if (group.groupMemberships.length == 1) {
    return "1 member";
  } else {
    return group.groupMemberships.length + " members";
  }
}

function test(group) {
  console.log(group);
  return "Test";
}

const GroupDetailsScreen = ({details, buttonPressed, navigation}) => {
  return (
    <View style={GroupStyles.container}>
      <DetailsCard
        color={'transparent'}
        type={SUBJECT}
        text={details.subject.name}
        height={Dimensions.get('screen').height/3} />
      <DetailsCard
        color={buddyBlue}
        type={UNIVERSITY}
        text={details.subject.university.name}
        height={Dimensions.get('screen').height/3} />
      <DetailsCard
        color={darkBuddyBlue}
        type={MEMBERS}
        text={memberLabel(details)}
        height={Dimensions.get('screen').height/3} />
      <SubmitButton
        label="Join"
        color={buddyRed}
        buttonPressed={buttonPressed}
        navigation={navigation}
        data={details}
        customStyle={GroupStyles.joinGroupButtonContainer}
        size={LARGE} />
    </View>
  );
}

export default GroupDetailsScreen;
