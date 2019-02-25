import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import FieldsList from '../components/_FieldsList'
import Colors from '../constants/Colors'
import { IField } from '../types/Field'

interface IProps {
  navigation: NavigationScreenProp<any>
}

export default class SettingsProfileScreen extends React.Component<IProps> {
  public static fields: IField[] = [
    {
      id: 'field1',
      label: 'field1',
      type: 'text',
      value: 'field1',
    },
    {
      id: 'field2',
      label: 'field2',
      type: 'text',
      value: 'field2',
    },
    {
      id: 'field3',
      label: 'field3',
      type: 'text',
      value: 'field3',
    },
  ]
  public render() {
    return (
      <ScrollView style={styles.container}>
        <FieldsList
          fields={SettingsProfileScreen.fields}
          style={styles.list}
          title="Settings"
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.settingsEdit,
  },
  list: {
    padding: 10,
    width: '100%',
  },
})
