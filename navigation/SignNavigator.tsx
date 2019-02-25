import { createAppContainer, createStackNavigator } from 'react-navigation'

import SignScreen from '../containers/SignScreen'

const SignStack = createStackNavigator(
  {
    SignIn: SignScreen,
  },
  { defaultNavigationOptions: { header: null }, initialRouteName: 'SignIn' }
)

export default createAppContainer(SignStack)
