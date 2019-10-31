import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import ComponentStyles from '../styles/componentStyles';
import {buddyGray} from '../styles/constants';
import { SEARCH } from '../types/componentTypes';

function displayIcon(type) {
  switch(type) {
    case SEARCH:
      return (
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
          size={25}
          style={ComponentStyles.textInputIcon} />
      );
      break;
    default:
      return null;
  }
}

const TextInputField = ({textChanged, textValue, field,
   editingComplete, type, data}) => {
  return (
    <View style={ComponentStyles.textInputContainer}>
      <TextInput
        style={ComponentStyles.textInputField}
        placeholder={field}
        placeholderTextColor={buddyGray}
        onChangeText={(text) => textChanged(text, field)}
        onEndEditing={() => editingComplete(data)}
        value={textValue} />
      {displayIcon(type)}
    </View>
  );
}

export default TextInputField;
