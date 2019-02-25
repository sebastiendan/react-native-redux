import { Icon } from 'expo'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RCarousel from 'react-native-snap-carousel'

import Layout from '../constants/Layout'

interface IProps {
  data: any[]
  ItemComponent: any
}

export default class Carousel extends React.Component<IProps, any> {
  public render() {
    const { data, ItemComponent } = this.props
    return (
      <RCarousel
        data={data}
        itemWidth={Layout.window.width}
        lockScrollWhileSnapping={true}
        renderItem={datum => (
          <View style={styles.item}>
            <Icon.Ionicons
              color="#fff"
              name="ios-arrow-back"
              size={30}
              style={{ marginHorizontal: 5, opacity: datum.index }}
            />
            <ItemComponent data={datum.item} />
            <Icon.Ionicons
              color="#fff"
              name="ios-arrow-forward"
              size={30}
              style={{
                marginHorizontal: 5,
                opacity: datum.index === data.length - 1 ? 0 : 1,
              }}
            />
            <Text style={styles.paginator}>{`${datum.index + 1}/${
              data.length
            }`}</Text>
          </View>
        )}
        sliderWidth={Layout.window.width}
      />
    )
  }
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    width: Layout.window.width,
  },
  paginator: {
    color: '#fff',
    position: 'absolute',
    right: 20,
    top: 20,
  },
})
