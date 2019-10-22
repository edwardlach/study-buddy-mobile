import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import GroupStyles from '../styles/groupStyles'
import TextInputField from '../components/TextInputField'
import DateInput from '../components/DateInput'
import SubmitButton from '../components/SubmitButton'
import { SUBJECT, UNIVERSITY, START_DATE, END_DATE } from '../types/formTypes'

const GroupCreationScreen = ({textChanged, group, dateChanged, buttonPressed, selected}) => {
  return (
    <View style={GroupStyles.container}>
      <TextInputField
        textChanged={textChanged}
        textValue={group.subject}
        field={SUBJECT} />
      <TextInputField
        textChanged={textChanged}
        textValue={group.university}
        field={UNIVERSITY} />
      <DateInput
        currentDate={new Date(group.startDate)}
        setDate={dateChanged}
        selectedCount={group.startDateSelectedCount}
        isSelected={group.startDateSelected}
        selected={selected}
        field={START_DATE} />
      <DateInput
        currentDate={new Date(group.endDate)}
        setDate={dateChanged}
        selectedCount={group.endDateSelectedCount}
        isSelected={group.endDateSelected}
        selected={selected}
        field={END_DATE} />
      <SubmitButton
        label="Create"
        buttonPressed={buttonPressed}
        data={group} />
    </View>
  );
}

export default GroupCreationScreen;
