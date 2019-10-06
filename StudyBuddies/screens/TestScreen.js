import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TestStyles from '../styles/testStyles'

const TestScreen = ({users, onPress}) => {
  return (
    <View style={TestStyles.container}>
      <TouchableOpacity
        onPress = {() => onPress(0, "Ed")}
        style = {TestStyles.testButton}>
        <Text style = {TestStyles.label}>
          { users[0].info.firstName }
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TestScreen;
