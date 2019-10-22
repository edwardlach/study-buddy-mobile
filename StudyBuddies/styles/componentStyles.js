'use strict';

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import {buddyBlue, buddyGray} from './constants';

const ComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Text Field Styles
  textInputContainer: {
    height: 55,
  },
  textInputField: {
    height: 55,
    margin: 5,
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
    fontWeight: '500',
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: buddyBlue,
  },

  // Date Picker Styles
  dateContainer: {
    flexDirection: 'column',
    paddingTop: 20,
  },
  datePickerContainer: {
    flexDirection: 'row',
  },
  pickerContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    color: buddyBlue,
  },
  labelContainer: {
    marginLeft: 5,
    marginRight: 5,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: buddyBlue,
  },
  pickerLabel: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 8,
    color: buddyGray,
    paddingBottom: 13,
  },

  // Submit Button
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  submitButton: {
    width: 250,
    height: 50,
    backgroundColor: '#FB7171',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },

});

export default ComponentStyles;
