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

const GroupDetailsScreen = ({group, buttonPressed, navigation}) => {
  return (
    <View style={GroupStyles.container}>
      <DetailsCard
        color={'transparent'}
        type={SUBJECT}
        text={"Math 250"}
        height={Dimensions.get('screen').height/3} />
      <DetailsCard
        color={buddyBlue}
        type={UNIVERSITY}
        text={"Penn State"}
        height={Dimensions.get('screen').height/3} />
      <DetailsCard
        color={darkBuddyBlue}
        type={MEMBERS}
        text={"2 Members"}
        height={Dimensions.get('screen').height/3} />
      <SubmitButton
        label="Join"
        color={buddyRed}
        buttonPressed={buttonPressed}
        navigation={navigation}
        data={group}
        customStyle={GroupStyles.joinGroupButtonContainer}
        size={LARGE} />
    </View>
  );
}

export default GroupDetailsScreen;
