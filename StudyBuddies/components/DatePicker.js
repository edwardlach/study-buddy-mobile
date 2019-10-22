import React from 'react';
import {
  View,
  StyleSheet,
  Picker,
  Text,
  TouchableOpacity
} from 'react-native';
import ComponentStyles from '../styles/componentStyles';
import { months } from '../constants/Dates';
import { days } from '../constants/Dates';
import { years } from '../constants/Dates';


function setMonth(itemValue, newDate, setDate, id, field) {
  newDate.setMonth(itemValue);
  id ? setDate(id, newDate) : setDate(newDate, field);
}

function setDay(itemValue, newDate, setDate, id, field) {
  newDate.setDate(itemValue);
  id ? setDate(id, newDate) : setDate(newDate, field);
}

function setYear(itemValue, newDate, setDate, id, field) {
  newDate.setFullYear(itemValue);
  id ? setDate(id, newDate) : setDate(newDate, field);
}

function daysInMonth(currentDate) {
  return months()[currentDate.getMonth()]['days'];
}


const DatePicker = ({currentDate, setDate, id, field}) => {
  return (
    <View style={ComponentStyles.datePickerContainer}>
      <Picker
        selectedValue={currentDate.getMonth()}
        style={ComponentStyles.pickerContainer}
        onValueChange={(itemValue, itemIndex) =>
          setMonth(itemValue, currentDate, setDate, id, field)}>
        {
          months().map(month => {
            return <Picker.Item
                      color='black'
                      key={month.value}
                      label={month.display}
                      value={month.value} />
          })
        }
      </Picker>
      <Picker
        selectedValue={currentDate.getDate()}
        style={ComponentStyles.pickerContainer}
        onValueChange={(itemValue, itemIndex) =>
          setDay(itemValue, currentDate, setDate, id, field)}>
        {
          days(daysInMonth(currentDate)).map(day => {
              return <Picker.Item
                        color='black'
                        key={day}
                        label={day.toString()}
                        value={day} />
          })
        }
      </Picker>
      <Picker
        selectedValue={currentDate.getFullYear()}
        style={ComponentStyles.pickerContainer}
        onValueChange={(itemValue, itemIndex) =>
          setYear(itemValue, currentDate, setDate, id, field)}>
        {
          years().map(year => {
              return <Picker.Item
                        color='black'
                        key={year}
                        label={year.toString()}
                        value={year} />
          })
        }
      </Picker>
    </View>
  );
}

export default DatePicker;
