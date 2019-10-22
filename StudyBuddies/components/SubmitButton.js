import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ComponentStyles from '../styles/componentStyles'

const SubmitButton = ({label, buttonPressed, data}) => {
  return (
    <View style={ComponentStyles.buttonContainer}>
      <TouchableOpacity
        style={ComponentStyles.submitButton}
        onPress={() => buttonPressed(data)}>
        <Text style={ComponentStyles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SubmitButton;
