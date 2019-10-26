import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';

import ComponentStyles from '../styles/componentStyles';
import { UNIVERSITY, MEMBERS, SUBJECT } from '../types/componentTypes';
import { Ionicons } from '@expo/vector-icons';

function displayIcon(type) {
  switch(type) {
    case MEMBERS:
      return (
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
          size={48}
          style={ComponentStyles.detailsIcon} />
      );
      break;
    case UNIVERSITY:
      return (
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-globe' : 'md-globe'}
          size={48}
          style={ComponentStyles.detailsIcon} />
      );
    case SUBJECT:
    default:
      return null
  }
}


const DetailsCard = ({color, type, text, height}) => {
  return (
    <View style={[ComponentStyles.detailsCard,
      { backgroundColor:color,
        height: height,
        borderTopLeftRadius: height/5,
        borderTopRightRadius: height/5,
        marginTop:-height/5
      }]}>
      {displayIcon(type)}
      <Text style={[ComponentStyles.detailsText,
        {color: type==SUBJECT ? 'black' : 'white'}]}>{text}</Text>
    </View>
  );
}

export default DetailsCard;
