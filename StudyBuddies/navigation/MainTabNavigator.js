import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GroupCreationContainer from '../containers/GroupCreationContainer';
import SearchContainer from '../containers/SearchContainer';
import ResultsContainer from '../containers/ResultsContainer';
import TestContainer from '../containers/TestContainer';
import RegistrationContainer from '../containers/RegistrationContainer'
import SigninContainer from '../containers/SigninContainer'

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
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const JoinGroupStack = createStackNavigator(
  {
    GroupSearch: SearchContainer,
    GroupResults: ResultsContainer,
    GroupCreation: GroupCreationContainer,

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
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

JoinGroupStack.path = '';


const RegistrationStack = createStackNavigator(
  {
    Registration: RegistrationContainer,
  },
  config
);
RegistrationStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}
RegistrationStack.path = 'register';


const SigninStack = createStackNavigator(
  {
    Signin: SigninContainer,
  },
  config
);
SigninStack.navigationOptions = {
  tabBarLabel: 'Sign In',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}
SigninStack.path = 'signin';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  JoinGroupStack,
  RegistrationStack,
  SigninStack
});

tabNavigator.path = '';

export default tabNavigator;
