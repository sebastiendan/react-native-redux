import { Icon, LinearGradient } from 'expo'
import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'

import { IDataState } from '../types'
import { IUserInfos } from '../types/User'

interface IProps {
  back?: boolean
  navigation: NavigationScreenProp<any>
  type?: 'light' | 'dark'
  user: IDataState<IUserInfos> | undefined
}

class Header extends React.Component<IProps> {
  public render() {
    if (this.props.user && this.props.user.data.user) {
      const user = this.props.user.data.user
    }
    const { back, navigation } = this.props
    const { type } = this.props.type ? this.props : { type: 'light' }
    return (
      <LinearGradient
        colors={
          type === 'light' ? ['#5ecbf6', '#8c9fe1'] : ['#434343', '#2C3E50']
        }
        end={[1, 1]}
        start={[0, 0]}
        style={styles.container}
      >
        {Boolean(back) ? (
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
            size={34}
            color="white"
            onPress={() => {
              navigation.goBack(null)
            }}
            style={{
              marginLeft: 10,
              paddingHorizontal: 10,
            }}
          />
        ) : (
          <Icon.MaterialCommunityIcons
            name="menu"
            size={34}
            color="white"
            onPress={() => {
              navigation.openDrawer()
            }}
            style={{ marginLeft: 10 }}
          />
        )}
        <Text
          onPress={() =>
            navigation.navigate(
              'Main',
              {},
              { routeName: 'Home', type: 'Navigation/NAVIGATE' }
            )
          }
          style={styles.title}
        >
          app
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('Settings')
          }}
          style={{ alignItems: 'flex-end' }}
        >
          <Icon.Ionicons
            color="#fff"
            name="ios-settings"
            size={34}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  title: {
    color: '#fff',
    fontFamily: 'russo-one-regular',
    fontSize: 38,
  },
})

export default withNavigation(Header)
