'use strict';

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import {buddyBlue, buddyGray, buddyRed} from './constants';

const ComponentStyles = StyleSheet.create({
  // General
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  solidLine: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },

  // Text Field Styles
  textInputContainer: {
    height: 55,
    flexDirection: 'row',
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: buddyBlue,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
  textInputField: {
    height: 55,
    fontSize: 18,
    fontWeight: '500',
    flex: 9,
  },
  textInputIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
  },

  // Date Picker Styles
  dateContainer: {
    flexDirection: 'column',
    paddingTop: 18,
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
    paddingBottom: 18,
  },

  // Submit Button
  buttonContainer: {
    alignItems: 'center',
  },
  submitButton: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitButtonLarge: {
    width: 250,
    height: 250/4,
    backgroundColor: buddyBlue,
    marginTop: 25,
    marginBottom: 25,
  },
  submitButtonSmall: {
    width: 100,
    height: 100/3,
    backgroundColor: buddyRed,
    marginTop: 18,
    marginBottom: 18,
  },
  buttonLabelSmall: {
    fontSize: 15,
  },
  buttonLabelLarge: {
    fontSize: 25,
  },
  buttonLabel: {
    fontWeight: '500',
    color: 'white',
  },

  // Group List Tile
  groupListTile: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    flex: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelTextContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  labelDescriptionContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 25,
    fontWeight: '500',
  },
  labelDescription: {
    fontSize: 15,
    fontWeight: '500',
    color: buddyGray,
  },

  // Group Details
  detailsCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsText: {
    color: 'black',
    fontSize: 48,
    fontWeight: '500',
    textAlign: 'center',
  },
  detailsIcon: {
    alignItems: 'center',
    marginTop: -48,
    color: 'white',
  },

  // Searchable Dropdown
  itemList: {
    maxHeight: 275,
  },
  itemButton: {
    height: 55,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: buddyGray,
  },

  // Message
  message: {
      fontSize: 18,
      flex: 9,
  },

});

export default ComponentStyles;
