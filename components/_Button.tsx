import React from 'react'
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

interface IProps {
  isDisabled?: boolean
  isLoading?: boolean
  label: string
  onPress: () => void
  style?: StyleProp<any>
}

export default class Button extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const { isLoading, label, onPress, style } = this.props
    const { isDisabled } =
      this.props.isDisabled !== undefined ? this.props : { isDisabled: false }
    return (
      <TouchableOpacity
        activeOpacity={1}
        disabled={isDisabled || isLoading}
        onPress={onPress}
        style={[
          styles.button,
          style ? style : {},
          isDisabled || isLoading ? styles.disabled : {},
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            isDisabled || isLoading ? styles.disabled : {},
          ]}
        >
          {label}
        </Text>
        {isLoading && (
          <ActivityIndicator color="#fff" size="large" style={styles.loading} />
        )}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.button,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: Layout.window.width / 16,
    textShadowColor: 'rgba(0, 0, 0, .5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  disabled: {
    opacity: 0.6,
  },
  loading: {
    position: 'absolute',
  },
})
