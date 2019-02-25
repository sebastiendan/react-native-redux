import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'

import Button from '../components/_Button'
import TextInput from '../components/_TextInput'
import Colors from '../constants/Colors'

interface IProps {
  navigation: NavigationScreenProp<any>
}

class SettingsEditScreen extends React.Component<IProps> {
  public render() {
    const { navigation } = this.props
    const label = navigation.getParam('label', '???')
    const type = navigation.getParam('type', 'text')
    const value = navigation.getParam('value', '???')
    return (
      <View style={styles.container}>
        <View style={styles.sectionBottom}>
          <View style={styles.sectionBottomInner}>
            {type === 'text' && (
              <TextInput
                label={label}
                onChange={val => null}
                style={styles.textInput}
                value={value}
              />
            )}
            {type === 'image' && (
              <Image resizeMode="contain" source={value} style={styles.image} />
            )}
            <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
              <Button
                label="保存"
                onPress={() => navigation.goBack(null)}
                style={{ marginTop: 10 }}
              />
            </View>
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
  image: {
    maxHeight: 300,
    maxWidth: 300,
  },
  sectionBottom: {
    backgroundColor: Colors.settingsEdit,
    flex: 2,
  },
  sectionBottomInner: {
    margin: 10,
  },
  textInput: {
    flex: 0,
    height: 60,
  },
})

export default withNavigation(SettingsEditScreen)
