import React from 'react'
import { Modal as _Modal, StyleSheet, Text, View } from 'react-native'

import Button from '../components/_Button'
import FlexBox from '../components/_FlexBox'
import Colors from '../constants/Colors'

interface IProps {
  children: any
  onClose?: () => void
  visible: boolean
}

interface IState {
  visible: boolean
}

export default class Modal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { visible: this.props.visible }
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (this.state.visible !== nextProps.visible && nextProps.visible) {
      this.setState({ visible: nextProps.visible })
    }
  }

  public render() {
    const { children, onClose } = this.props
    return (
      <View style={{ marginTop: 22 }}>
        <_Modal
          animationType="slide"
          transparent={false}
          visible={this.state.visible}
          onDismiss={onClose ? onClose : () => null}
        >
          <FlexBox style={[StyleSheet.absoluteFill, styles.container]}>
            <View style={styles.content}>{children}</View>
            <Button
              label="Close"
              onPress={() => {
                this.setState({ visible: false })
              }}
            />
          </FlexBox>
        </_Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    justifyContent: 'center',
  },
  content: {
    marginVertical: 20,
  },
})
