import React from 'react'
import { StyleProp, StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

interface IProps {
  message: string
  style?: StyleProp<any>
}

export default class ErrorMessage extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const { message, style } = this.props
    return (
      <View style={[styles.container, style ? style : {}]}>
        <Text style={styles.error}>{message}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.errorBackground,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  error: {
    color: Colors.errorText,
  },
})
