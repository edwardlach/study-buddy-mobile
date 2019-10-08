import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import TestStyles from '../styles/testStyles'

const TestScreen = ({users, onPress}) => {
  return (
    <View style={TestStyles.container}>
      <TouchableOpacity
        onPress = {() => onPress(users[0].id, users[0].info)}
        style = {TestStyles.testButton}>
        <Text style = {TestStyles.label}>
          { users[0].info.firstName }
        </Text>
      </TouchableOpacity>
      {
        users.map(user => {
          return <Text style={TestStyles.userText} key={user.id}>{user.info.firstName}</Text>
        })
      }
    </View>
  );
}

export default TestScreen;
