import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ComponentStyles from '../styles/componentStyles';
import { SMALL, LARGE } from '../types/componentTypes';

function buttonSize(size) {
  switch(size) {
    case SMALL:
      return ComponentStyles.submitButtonSmall;
      break;
    case LARGE:
    default:
      return ComponentStyles.submitButtonLarge;
      break;
  }
}

function textSize(size) {
  switch(size) {
    case SMALL:
      return ComponentStyles.buttonLabelSmall;
      break;
    case LARGE:
    default:
      return ComponentStyles.buttonLabelLarge;
      break;
  }
}

const SubmitButton = ({label, buttonPressed, data, navigation,
  size, customStyle, color}) => {
  return (
    <View style={[ComponentStyles.buttonContainer, customStyle]}>
      <TouchableOpacity
        style={[ComponentStyles.submitButton, buttonSize(size), {backgroundColor: color}]}
        onPress={() => buttonPressed(data, navigation)}>
        <Text style={[ComponentStyles.buttonLabel, textSize(size)]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SubmitButton;
