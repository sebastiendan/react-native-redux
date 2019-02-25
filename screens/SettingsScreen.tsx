import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'

import Button from '../components/_Button'
import Colors from '../constants/Colors'

interface IProps {
  navigation: NavigationScreenProp<any>
}

class SettingsScreen extends React.Component<IProps> {
  public render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.sectionBottom}>
          <View style={styles.sectionBottomInner}>
            <Button
              label="Profile"
              onPress={() => {
                navigation.navigate('Profile')
              }}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionBottom: {
    alignItems: 'center',
    backgroundColor: Colors.settingsBackground,
    flex: 2,
    justifyContent: 'center',
  },
  sectionBottomInner: {
    marginVertical: 10,
    width: '80%',
  },
  sectionTop: {
    flex: 1,
  },
  sectionTopInner: {
    backgroundColor: Colors.mask,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default withNavigation(SettingsScreen)
