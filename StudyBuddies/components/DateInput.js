import React from 'react';
import {
  View,
  StyleSheet,
  Picker,
  Text,
  TouchableOpacity
} from 'react-native';
import ComponentStyles from '../styles/componentStyles';
import DatePicker from './DatePicker';
import { buddyGray } from '../styles/constants';

function dateFieldContent(currentDate, field, selectedCount) {
  return (selectedCount > 0) ? currentDate : field;
}

const DateInput = ({currentDate, setDate, id, field, selected,
  isSelected, selectedCount}) => {
  var dateText = (selectedCount > 0) ? currentDate.toLocaleDateString("en-US") : field;
  var textColor = (selectedCount > 0) ? 'black' : buddyGray;
  if(isSelected) {
    return (
      <View style={ComponentStyles.dateContainer}>
        <View style={ComponentStyles.labelContainer}>
          <TouchableOpacity onPress={() => selected(field, selectedCount)}>
            <Text style={[ComponentStyles.pickerLabel, {color:textColor}]}>{dateText}</Text>
          </TouchableOpacity>
        </View>
        <DatePicker
          currentDate={currentDate}
          setDate={setDate}
          id={id}
          field={field} />
      </View>
    );
  } else {
    return (
      <View style={ComponentStyles.dateContainer}>
        <View style={ComponentStyles.labelContainer}>
          <TouchableOpacity onPress={() => selected(field, selectedCount)}>
            <Text style={[ComponentStyles.pickerLabel, {color:textColor}]}>{dateText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default DateInput;
