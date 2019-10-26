'use strict';

import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { buddyRed, darkBuddyBlue } from './constants';

const GroupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  checkbox: {
    marginTop: 13,
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
  headerText: {
    fontSize: 40,
    textAlign: 'center',
    padding: 18,
  },
  boldText: {
    fontSize: 20,
    textAlign: 'center',
  },
  resultsContainer: {
    flex: 1,
    marginLeft: 13,
    marginRight: 13,
  },
  joinGroupButtonContainer: {
    backgroundColor: darkBuddyBlue,
    marginTop: -13,
  },
});

export default GroupStyles;
