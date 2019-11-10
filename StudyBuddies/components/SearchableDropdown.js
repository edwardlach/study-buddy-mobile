import React from 'react';
import {
  StyleSheet,
  Picker,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import TextInputField from './TextInputField';
import ComponentStyles from '../styles/componentStyles';

/*
  items - array of potential search results from text field
  textChanged - function for the action that should be performed when text changes
  value - string of the current text displayed in the text field
  editingComplete - function indicating the action to be completed when user stops typing
  type - The type of text field to be presented (STANDARD, SEARCH)
  field - The type of value the text field will update (ie SUBJECT, GROUP_NAME, etc)
  itemPressed - function for the action to be performed when a listed item is pressed
  selected - boolean indicating if a listed item is currently selected,
             if true will dismiss the result list until user begins typing again.
*/
const SearchableDropdown = ({items, textChanged, value, editingComplete,
  type, field, itemPressed, selected}) => {
  return (
    <View>
      <TextInputField
        textChanged={textChanged}
        textValue={value}
        editingComplete={editingComplete}
        type={type}
        field={field} />
      <ScrollView style={ComponentStyles.itemList}>
        {
          items.filter((item) => {
            return item.name.includes(value) && value.length > 0 && !selected
          }).map((item) => {
            return  <TouchableOpacity
                      key={item.classId}
                      style={ComponentStyles.itemButton}
                      onPress={() => itemPressed(item)}>
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
          })
        }
      </ScrollView>
    </View>
  );
}

export default SearchableDropdown;
