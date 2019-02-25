import { Icon } from 'expo'
import React from 'react'

import Colors from '../constants/Colors'

interface IProps {
  focused: boolean
  library:
    | 'ionicons'
    | 'materialCommunityIcons'
    | 'fontAwesome'
    | 'simpleLineIcons'
    | 'null'
  name: string
}

export default class SecondaryTabBarIcon extends React.Component<IProps, any> {
  public render() {
    const { library, name } = this.props
    switch (library) {
      case 'ionicons':
        return (
          <Icon.Ionicons
            name={name}
            size={42}
            color={
              this.props.focused
                ? Colors.secondaryTabIconSelected
                : Colors.secondaryTabIconDefault
            }
          />
        )
      case 'fontAwesome':
        return (
          <Icon.FontAwesome
            name={name}
            size={42}
            color={
              this.props.focused
                ? Colors.secondaryTabIconSelected
                : Colors.secondaryTabIconDefault
            }
          />
        )
      case 'materialCommunityIcons':
        return (
          <Icon.MaterialCommunityIcons
            name={name}
            size={42}
            color={
              this.props.focused
                ? Colors.secondaryTabIconSelected
                : Colors.secondaryTabIconDefault
            }
          />
        )
      case 'simpleLineIcons':
        return (
          <Icon.SimpleLineIcons
            name={name}
            size={42}
            color={
              this.props.focused
                ? Colors.secondaryTabIconSelected
                : Colors.secondaryTabIconDefault
            }
          />
        )
    }
  }
}
