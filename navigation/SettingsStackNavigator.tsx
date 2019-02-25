import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Header from '../containers/Header'
import SettingsEditScreen from '../screens/SettingsEditScreen'
import SettingsProfileScreen from '../screens/SettingsProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'

const SettingsStack = createStackNavigator(
  {
    Home: {
      navigationOptions: {
        header: <Header back={true} />,
      },
      screen: SettingsScreen,
    },
    Profile: {
      navigationOptions: {
        header: <Header back={true} />,
      },
      screen: SettingsProfileScreen,
    },
    SettingsEdit: {
      navigationOptions: {
        header: <Header back={true} />,
      },
      screen: SettingsEditScreen,
    },
  },
  { initialRouteName: 'Home' }
)

export default SettingsStack
