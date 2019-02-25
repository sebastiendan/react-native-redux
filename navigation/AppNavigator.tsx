import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import RootDrawerNavigator from './RootDrawerNavigator'
import SignStack from './SignNavigator'

export default createAppContainer(
  createSwitchNavigator(
    {
      Root: RootDrawerNavigator,
      Sign: SignStack,
    },
    { initialRouteName: 'Sign' }
  )
)
