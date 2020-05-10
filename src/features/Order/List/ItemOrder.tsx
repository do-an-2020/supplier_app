import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextBase, Touch } from 'src/components'
import { scales, colors } from 'src/config'
import { elevationShadowStyle } from 'src/config/Theme/elevation'

type Props = {
  item: Record<string, any>
}

type State = {}

class ItemOrder extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  renderRow = ({ key, value }: { key: string; value: string }) => {
    return (
      <View style={styles.rowItem}>
        <TextBase style={styles.key}>{key}</TextBase>
        <TextBase style={styles.value}>{value}</TextBase>
      </View>
    )
  }

  onPressItem = () => {
    const { item } = this.props
    console.log('onPressItem -> item', item)
  }

  render() {
    const { item } = this.props
    const { name, time, address, total, status } = item
    return (
      <Touch onPress={this.onPressItem}>
        <View style={styles.viewItem}>
          {this.renderRow({ key: 'Tên', value: name })}
          {this.renderRow({ key: 'Thời gian', value: time })}
          {this.renderRow({ key: 'Địa điểm', value: address })}
          {this.renderRow({ key: 'Tổng tiền', value: total })}
          {this.renderRow({ key: 'Trạng thái', value: status })}
        </View>
      </Touch>
    )
  }
}

export default ItemOrder

const styles = StyleSheet.create({
  rowItem: {
    flexDirection: 'row',
    paddingVertical: scales.moderateScale(6),
  },
  key: { width: '25%' },
  value: { width: '70%' },
  viewItem: {
    ...elevationShadowStyle(2),
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: scales.verticalScale(12),
    paddingHorizontal: scales.horizontalScale(12),
    marginHorizontal: 2,
    paddingVertical: scales.verticalScale(12),
  },
})
