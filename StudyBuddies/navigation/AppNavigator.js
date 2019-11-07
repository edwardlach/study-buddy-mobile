import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SigninContainer from '../containers/SigninContainer';
import RegistrationContainer from '../containers/RegistrationContainer';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthenticationNavigator = createSwitchNavigator({
  register: RegistrationContainer,
  signin: SigninContainer,
});

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthenticationNavigator,
    App: MainTabNavigator,
  },
    {
      initialRouteName: 'AuthLoading',
    })
);
