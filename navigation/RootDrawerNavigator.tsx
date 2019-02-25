import { Icon } from 'expo'
import React from 'react'
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation'

import SignOutScreen from '../containers/SignOutScreen'
import MainTabNavigator from './MainTabNavigator'
import SettingsTabNavigator from './SettingsTabNavigator'

const MainStack = createStackNavigator(
  {
    Main: MainTabNavigator,
    Settings: SettingsTabNavigator,
  },
  { defaultNavigationOptions: { header: null }, initialRouteName: 'Main' }
)

const RootDrawerNavigator = createDrawerNavigator(
  {
    App: {
      navigationOptions: {
        drawerIcon: () => <Icon.Ionicons name="md-menu" size={26} />,
        drawerLabel: 'App',
      },
      screen: MainStack,
    },
    SignOut: {
      navigationOptions: {
        drawerIcon: () => <Icon.Ionicons name="ios-log-out" size={26} />,
        drawerLabel: 'ログアウト',
      },
      screen: SignOutScreen,
    },
  },
  { initialRouteName: 'App' }
)

export default createAppContainer(RootDrawerNavigator)
