import { Icon } from 'expo'
import React from 'react'
import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput as Input,
  TouchableOpacity,
} from 'react-native'

import Colors from '../constants/Colors'
import { IAction } from '../types/TextInput'
import FlexBox from './_FlexBox'

interface IProps {
  action?: IAction
  keyboardType?: KeyboardTypeOptions
  label?: string
  multiline?: boolean
  onChange: (val: string) => void
  placeholder?: string
  secure?: boolean
  style?: StyleProp<any>
  value?: string
}

interface IState {
  height: number
}

export default class TextInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
    this.state = { height: 0 }
  }

  public render() {
    let MyIcon
    const {
      action,
      label,
      multiline,
      onChange,
      placeholder,
      secure,
      style,
      value,
    } = this.props
    const { keyboardType } = this.props.keyboardType
      ? this.props
      : { keyboardType: 'default' as KeyboardTypeOptions }

    if (action && action.iconLibrary) {
      MyIcon = (Icon as any)[action.iconLibrary]
    }
    return (
      <FlexBox
        direction="row"
        style={[
          styles.container,
          style ? style : {},
          multiline
            ? { height: Math.min(150, Math.max(50, this.state.height)) }
            : {},
        ]}
      >
        <FlexBox
          style={[styles.subContainerMain, action ? {} : { borderRadius: 5 }]}
        >
          {Boolean(label) && <Text style={styles.label}>{label}</Text>}
          <Input
            keyboardType={keyboardType}
            multiline={multiline}
            numberOfLines={4}
            onChangeText={onChange}
            onContentSizeChange={event => {
              this.setState({ height: event.nativeEvent.contentSize.height })
            }}
            placeholder={placeholder || ''}
            secureTextEntry={secure}
            style={styles.input}
            value={value}
          />
        </FlexBox>
        {action && MyIcon && (
          <FlexBox style={styles.subContainerIcon}>
            <TouchableOpacity onPress={this.handlePress}>
              <MyIcon name={action.iconName} size={30} style={styles.icon} />
            </TouchableOpacity>
          </FlexBox>
        )}
      </FlexBox>
    )
  }

  private handlePress = (e: GestureResponderEvent) => {
    if (this.props.action && this.props.action.callbackPress) {
      this.props.action.callbackPress(this.props.value)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  icon: {
    color: '#fff',
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    flex: 2,
    fontSize: 26,
  },
  label: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  subContainerIcon: {
    alignItems: 'center',
    backgroundColor: Colors.button,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    flex: 0,
    justifyContent: 'center',
    width: 50,
  },
  subContainerMain: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    padding: 5,
  },
})
