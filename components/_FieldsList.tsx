import React from 'react'
import { StyleProp, StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/Colors'
import { IField } from '../types/Field'
import Field from './_Field'

interface IProps {
  fields: IField[]
  style?: StyleProp<any>
  title: string
}

export default class FieldsList extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const { fields, style, title } = this.props
    return (
      <View style={[styles.container, style ? style : {}]}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.list}>
          {fields.map(x => (
            <React.Fragment key={x.id}>
              <Field field={x} style={styles.field} />
            </React.Fragment>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  field: {
    borderBottomColor: Colors.settingsLightLine,
    borderBottomWidth: 1,
  },
  list: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
})
