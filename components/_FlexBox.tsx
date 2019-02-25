import React from 'react'
import { StyleProp, StyleSheet, View } from 'react-native'

interface IProps {
  children: any
  direction?: 'column' | 'row'
  style?: StyleProp<any>
}

export default class FlexBox extends React.Component<IProps, any> {
  public render() {
    const { children, style } = this.props
    const { direction } = this.props.direction
      ? this.props
      : { direction: 'column' }
    return (
      <View
        style={[
          styles.root,
          direction === 'column' ? styles.column : styles.row,
          style ? style : {},
        ]}
      >
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  column: {},
  root: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
