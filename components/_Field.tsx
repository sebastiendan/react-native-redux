import { Icon } from 'expo'
import React from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'

import Colors from '../constants/Colors'
import { IField } from '../types/Field'

interface IProps {
  field: IField
  navigation: NavigationScreenProp<any>
  style?: StyleProp<any>
}

class Field extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const { field, navigation, style } = this.props
    field.isEditable = field.isEditable || true

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (field.isEditable) {
            navigation.navigate('SettingsEdit', {
              label: field.label,
              type: field.type,
              value: field.value,
            })
          }
        }}
        style={[
          styles.container,
          style ? style : {},
          field.type === 'image' ? styles.containerColumn : styles.containerRow,
        ]}
      >
        <Text style={styles.label}>{field.label}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {field.type === 'text' && (
            <Text style={styles.text}>{field.value}</Text>
          )}
          {field.type === 'image' && (
            <View>
              <Image
                resizeMode="contain"
                source={field.value as ImageSourcePropType}
                style={styles.image}
              />
            </View>
          )}
          {field.isEditable && (
            <Icon.MaterialIcons
              color={Colors.settingsLine}
              name="edit"
              size={20}
              style={{ marginLeft: 10 }}
            />
          )}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.settingsEdit,
    paddingRight: 16,
    paddingVertical: 16,
  },
  containerColumn: {
    alignItems: 'flex-start',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    maxHeight: 200,
    maxWidth: 200,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.settingsLine,
    fontSize: 18,
  },
})

export default withNavigation(Field)
