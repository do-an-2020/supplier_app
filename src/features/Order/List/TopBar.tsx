import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { colors, scales, i18n } from 'src/config'
import { elevationShadowStyle } from 'src/config/Theme/elevation'
import { TextBase } from 'src/components/base'
import { orderStatusList, OrderItemType } from 'src/config/const'

type IProps = {
  onChangeTab: (index: number) => void
}

type IStates = {
  data: OrderItemType[]
  index: number
}

class TopTab extends Component<IProps, IStates> {
  flatlist: any

  constructor(props: IProps) {
    super(props)
    this.state = {
      data: orderStatusList,
      index: 0,
    }
  }

  // func khi click vào 1 item
  onChangeTab = (item: OrderItemType, index: number) => {
    this.setState({ index }, () => {
      const { onChangeTab } = this.props
      this.flatlist.scrollToIndex({ index, animated: true, viewPosition: 0.5 })
      if (typeof onChangeTab === 'function') onChangeTab(index)
    })
  }

  // di chuyển đến tab tương ứng
  scrollToIndex: (index: number) => void = (index: number) => {
    this.setState({ index }, () => {
      this.flatlist.scrollToIndex({ index, animated: true, viewPosition: 0.5 })
    })
  }

  onSetRef = (ref: any) => {
    this.flatlist = ref
  }

  renderTabItem = ({ item, index: i }: { item: OrderItemType; index: number }) => {
    const { index } = this.state
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.onChangeTab(item, i)}>
        <View style={[styles.tabItem, { backgroundColor: 'red', opacity: index === i ? 1 : 0.5 }]}>
          <TextBase style={[styles.labelTab]}>{i18n.t(item.displayName).toUpperCase()}</TextBase>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { data, index } = this.state
    return (
      <View style={styles.viewContainer}>
        <FlatList
          ref={this.onSetRef}
          data={data}
          extraData={[data, index]}
          horizontal
          keyExtractor={item => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          renderItem={this.renderTabItem}
        />
      </View>
    )
  }
}

export default TopTab

const styles = StyleSheet.create({
  tabItem: {
    padding: scales.moderateScale(24),
    paddingVertical: scales.moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: scales.verticalScale(40),
  },
  labelTab: {
    fontSize: scales.horizontalScale(10),
  },
  viewContainer: { ...elevationShadowStyle(3), backgroundColor: '#fff' },

  active: {},
  inActive: {},
})
