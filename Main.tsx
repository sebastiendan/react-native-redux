import React from 'react'

import RootDrawerNavigator from './navigation/RootDrawerNavigator'
import SignStack from './navigation/SignNavigator'
import { IDataState } from './types'
import { IUserInfos } from './types/User'

interface IProps {
  getUserByToken: () => void
  user: IDataState<IUserInfos> | undefined
}

class Main extends React.Component<IProps> {
  public componentDidMount() {
    this.props.getUserByToken()
  }

  public render() {
    const { user } = this.props

    if (user && user.data && user.data.token) {
      return <RootDrawerNavigator />
    } else {
      return <SignStack />
    }
  }
}

export default Main
