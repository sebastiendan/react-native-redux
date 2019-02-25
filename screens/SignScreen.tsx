import { DangerZone } from 'expo'
import React from 'react'
import { Keyboard, StyleSheet, Text } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'

import loading from '../assets/animations/loading.json'
import Button from '../components/_Button'
import ErrorMessage from '../components/_ErrorMessage'
import FlexBox from '../components/_FlexBox'
import TextInput from '../components/_TextInput'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import { IDataState } from '../types'
import { ISignInByEmailDto } from '../types/dto/User'
import { IUserInfos } from '../types/User'

const { Lottie } = DangerZone

interface IProps {
  navigation: NavigationScreenProp<any>
  onSubmitSignInClick: (signInUser: ISignInByEmailDto) => void
  user: IDataState<IUserInfos> | undefined
}

interface IState {
  email: string
  password: string
}

class SignScreen extends React.Component<IProps, IState> {
  private animation: any

  constructor(props: IProps) {
    super(props)
    this.sign = this.sign.bind(this)
    this.state = { email: 'user@email.com', password: 'password' }
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.user && nextProps.user.loading) {
      setTimeout(() => {
        this.animation.reset()
        this.animation.play()
      }, 0)
    }
  }

  public render() {
    const { user } = this.props
    return (
      <FlexBox style={styles.container}>
        <FlexBox style={styles.titleWrapper}>
          <Text style={styles.title}>Application</Text>
        </FlexBox>
        {user && user.loading ? (
          <FlexBox style={styles.content}>
            <Lottie
              ref={(animation: any) => {
                this.animation = animation
              }}
              style={{
                height: Layout.window.width / 1.5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 6,
                transform: [{ translateX: Layout.window.width / 6 }],
                width: Layout.window.width / 1.5,
              }}
              source={loading}
            />
          </FlexBox>
        ) : (
          <FlexBox style={styles.content}>
            <FlexBox style={styles.inputWrapper}>
              <TextInput
                label="Email"
                onChange={email => this.setState({ email })}
                style={styles.input}
                value={this.state.email}
              />
            </FlexBox>
            <FlexBox style={styles.inputWrapper}>
              <TextInput
                label="Password"
                onChange={password => this.setState({ password })}
                secure={true}
                style={styles.input}
                value={this.state.password}
              />
            </FlexBox>
            <Button label="Sign In" onPress={this.sign} />
            {user && user.error && (
              <ErrorMessage
                message={user.error.message || 'すみません'}
                style={{ marginTop: 10 }}
              />
            )}
          </FlexBox>
        )}
      </FlexBox>
    )
  }

  private sign = () => {
    const signInByEmailDto: ISignInByEmailDto = {
      email: this.state.email,
      password: this.state.password,
    }
    Keyboard.dismiss()
    this.props.onSubmitSignInClick(signInByEmailDto)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 10,
  },
  content: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  input: {},
  inputWrapper: {
    flex: 0,
    height: 60,
    marginBottom: 10,
  },
  logo: {
    flex: 0.5,
    height: undefined,
    width: undefined,
  },
  title: {
    color: '#fff',
    fontSize: 38,
  },
  titleWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export default withNavigation(SignScreen)
