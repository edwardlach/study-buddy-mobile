import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import GroupCreationContainer from '../containers/GroupCreationContainer';
import SearchContainer from '../containers/SearchContainer';
import ResultsContainer from '../containers/ResultsContainer';
import ProfileScreen from '../containers/ProfileScreenContainer';
import GroupDetailsContainer from '../containers/GroupDetailsContainer';
import HomeContainer from '../containers/HomeContainer';
import TemplateChatScreen from '../screens/TemplateChatScreen';
import CustomChatScreen from '../containers/ChatContainer';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeContainer,
    ChatTemp: TemplateChatScreen,
    Chat: CustomChatScreen
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


HomeStack.path = 'home';

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
