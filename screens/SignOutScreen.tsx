import React from 'react'
import { ActivityIndicator } from 'react-native'
import FlexBox from '../components/_FlexBox'
import { IDataState } from '../types'
import { IUserInfos } from '../types/User'

interface IProps {
  signOut: () => void
  user: IDataState<IUserInfos> | undefined
}

export default class SignOutScreen extends React.Component<IProps> {
  public componentDidMount() {
    this.props.signOut()
  }
  public render() {
    const { user } = this.props
    return (
      <FlexBox>
        <ActivityIndicator size="large" />
      </FlexBox>
    )
  }
}
