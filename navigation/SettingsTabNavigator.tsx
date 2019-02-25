import React from 'react'
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  TabViewConfig,
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import Colors from '../constants/Colors'
import SettingsStackNavigator from './SettingsStackNavigator'

const tabBarOptions: TabViewConfig['tabBarOptions'] = {
  showLabel: false,
  style: { backgroundColor: Colors.background },
}

SettingsStackNavigator.navigationOptions = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      library="ionicons"
      name={Platform.OS === 'ios' ? `ios-settings` : 'md-settings'}
    />
  ),
}

export default createBottomTabNavigator(
  {
    SettingsStackNavigator,
  },
  {
    tabBarOptions,
  }
)
