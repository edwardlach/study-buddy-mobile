import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SigninContainer from '../containers/SigninContainer';
import RegistrationContainer from '../containers/RegistrationContainer';

/*
  Useful link for using navigation with functional components
  https://blog.harshil.dev/blog/using-react-navigation-with-functional-components-in-react-native/
*/

const AuthenticationNavigator = createStackNavigator({
  SignIn: SigninContainer,
  Register: RegistrationContainer,
});

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthenticationNavigator,
    Main: MainTabNavigator,
  },
    {
      initialRouteName: 'Main',
    })
);
