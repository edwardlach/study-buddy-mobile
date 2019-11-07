import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import GroupStyles from '../styles/groupStyles';
import TextInputField from '../components/TextInputField';
import DateInput from '../components/DateInput';
import SubmitButton from '../components/SubmitButton';
import SearchableDropdown from '../components/SearchableDropdown';
import { SUBJECT, GROUP_NAME, START_DATE, END_DATE } from '../types/formTypes';
import { LARGE, STANDARD } from '../types/componentTypes';
import { buddyBlue } from '../styles/constants';

const GroupCreationScreen = ({textChanged, group, dateChanged, buttonPressed,
  selected, navigation, editingComplete, classes, itemPressed}) => {
  return (
    <View style={GroupStyles.container}>
      <TextInputField
        textChanged={textChanged}
        textValue={group.groupName}
        editingComplete={editingComplete}
        type={STANDARD}
        field={GROUP_NAME} />
      <SearchableDropdown
        items={classes}
        itemPressed={itemPressed}
        selected={group.subjectSelected}
        textChanged={textChanged}
        value={group.subject}
        editingComplete={editingComplete}
        type={STANDARD}
        field={SUBJECT} />
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
        navigation={navigation}
        size={LARGE}
        color={buddyBlue}
        data={group} />
    </View>
  );
}

export default GroupCreationScreen;
