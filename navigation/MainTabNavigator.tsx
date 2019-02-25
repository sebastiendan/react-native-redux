import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator,
  NavigationScreenConfig,
  NavigationScreenOptions,
  TabViewConfig,
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import Colors from '../constants/Colors'
import Header from '../containers/Header'
import HomeScreen from '../screens/HomeScreen'

const defaultNavigationOptions: NavigationScreenConfig<
  NavigationScreenOptions
> = {
  header: <Header />,
}

const tabBarOptions: TabViewConfig['tabBarOptions'] = {
  showLabel: false,
  style: { backgroundColor: Colors.background },
}

const HomeStack = createStackNavigator({
  Home: {
    navigationOptions: {
      header: <Header />,
    },
    screen: HomeScreen,
  },
})

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      library="materialCommunityIcons"
      name="coins"
    />
  ),
}

const SecondStack = createStackNavigator(
  {
    Second: HomeScreen,
  },
  { defaultNavigationOptions }
)

SecondStack.navigationOptions = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon focused={focused} library="simpleLineIcons" name="handbag" />
  ),
}

const ThirdStack = createStackNavigator(
  {
    Third: HomeScreen,
  },
  { defaultNavigationOptions }
)

ThirdStack.navigationOptions = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      library="materialCommunityIcons"
      name="coins"
    />
  ),
}

export default createBottomTabNavigator(
  {
    HomeStack,
    SecondStack,
    ThirdStack,
  },
  {
    animationEnabled: true,
    order: ['HomeStack', 'SecondStack', 'ThirdStack'],
    tabBarOptions,
  }
)
