import { AppLoading, Asset, Font, KeepAwake } from 'expo'
import moment from 'moment'
import 'moment/locale/ja'
import React from 'react'
import { Platform } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { NavigationScreenProp } from 'react-navigation'
import { Provider } from 'react-redux'

import { store } from './config'
import Colors from './constants/Colors'
import Main from './containers/Main'

interface IProps {
  navigation: NavigationScreenProp<any>
  skipLoadingScreen: boolean
}

interface IState {
  isLoadingComplete: boolean
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      isLoadingComplete: false,
    }
    moment.locale('ja')
    process.env.ENV = process.env.ENV || 'develop'
  }

  public render() {
    // !!! REMOVE KeepAwake when ready for production !!!
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
          startAsync={this.loadResourcesAsync as any}
        />
      )
    } else {
      return (
        <Provider store={store}>
          <SafeAreaView
            forceInset={{ bottom: 'never' }}
            style={{
              backgroundColor: Colors.background,
              flex: 1,
              paddingTop: Platform.OS === 'android' ? 24 : 0,
            }}
          >
            <KeepAwake />
            <Main />
          </SafeAreaView>
        </Provider>
      )
    }
  }

  private loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/icon.png'),
      ]),
      Font.loadAsync({
        'russo-one-regular': require('./assets/fonts/RussoOne-Regular.ttf'),
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ])
  }

  private handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    // tslint:disable-next-line:no-console
    console.warn(error)
  }

  private handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}
