import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import GroupCreationContainer from '../containers/GroupCreationContainer';
import SearchContainer from '../containers/SearchContainer';
import ResultsContainer from '../containers/ResultsContainer';
import ProfileScreen from '../screens/ProfleScreen'
import TestContainer from '../containers/TestContainer';
import RegistrationContainer from '../containers/RegistrationContainer';
import SigninContainer from '../containers/SigninContainer';
import GroupDetailsContainer from '../containers/GroupDetailsContainer';
import HomeScreen from '../screens/HomeScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const JoinGroupStack = createStackNavigator(
  {
    GroupSearch: SearchContainer,
    GroupResults: ResultsContainer,
    GroupCreation: GroupCreationContainer,
    GroupDetails: GroupDetailsContainer,
  },
  config
);

JoinGroupStack.navigationOptions = {
  tabBarLabel: 'Join Group',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-people`
          : 'md-people'
      }
    />
  ),
}

JoinGroupStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  JoinGroupStack,
  ProfileScreen
});

tabNavigator.path = '';

export default tabNavigator;
