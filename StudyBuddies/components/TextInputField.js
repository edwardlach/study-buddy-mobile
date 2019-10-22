import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import ComponentStyles from '../styles/componentStyles'
import {buddyGray} from '../styles/constants'

const TextInputField = ({textChanged, textValue, field}) => {
  return (
    <View style={ComponentStyles.textInputContainer}>
      <TextInput
        style={ComponentStyles.textInputField}
        placeholder={field}
        placeholderTextColor={buddyGray}
        onChangeText={(text) => textChanged(text, field)}
        value={textValue} />
    </View>
  );
}

export default TextInputField;
