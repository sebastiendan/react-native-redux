import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

interface IProps {
  style?: ViewStyle
  title: string
  value: string | number
}

export default class SimpleAttribute extends React.Component<IProps, any> {
  public render() {
    const { style, title, value } = this.props
    return (
      <View style={[styles.container, style ? style : {}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {},
  titleContainer: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 5,
    borderColor: '#fff',
    borderTopLeftRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    padding: 3,
  },
  value: {
    color: '#fff',
  },
  valueContainer: {
    borderBottomRightRadius: 5,
    borderColor: '#fff',
    borderLeftWidth: 0,
    borderTopRightRadius: 5,
    borderWidth: 2,
    flexShrink: 1,
    justifyContent: 'center',
    padding: 3,
  },
})
