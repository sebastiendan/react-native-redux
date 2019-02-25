import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'

import Colors from '../constants/Colors'

interface IProps {
  navigation: NavigationScreenProp<any>
}

class HomeScreen extends React.Component<IProps> {
  public render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 38,
  },
})

export default withNavigation(HomeScreen)
