import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import Proptypes from 'prop-types'
import data from './data'
import { Header, Icon } from '../../components'
import { elevationShadowStyle } from '../../config/Theme/elevation'
import { colors, scales } from '../../config'

class Order extends Component {
  static navigationOptions = () => {
    return {
      header: () => <Header title="xin chao" />,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      dataOrder: data,
    }
  }

  renderRow = ({ title, name }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: scales.moderateScale(6),
        }}>
        <Text style={{ width: '25%' }}>{title}</Text>
        <Text>{name}</Text>
      </View>
    )
  }

  renderItem = ({ item }) => {
    const { name, total, address, status, time } = item
    return (
      <View
        style={{
          ...elevationShadowStyle(2),
          backgroundColor: colors.white,
          borderRadius: 10,
          marginVertical: scales.verticalScale(12),
          paddingHorizontal: scales.horizontalScale(12),
          marginHorizontal: 2,
          paddingVertical: scales.verticalScale(12),
        }}>
        {this.renderRow({ title: 'Tên', name })}
        {this.renderRow({ title: 'Thời gian', name: time })}
        {this.renderRow({ title: 'Địa điểm', name: address })}
        {this.renderRow({ title: 'Tổng tiền', name: total })}
        {this.renderRow({ title: 'Trạng thái', name: status })}
      </View>
    )
  }

  render() {
    const { dataOrder } = this.state
    return (
      <View style={{ flex: 1 }}>
        <Header title="xin chao" />
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{
              paddingHorizontal: scales.horizontalScale(22),
              paddingVertical: scales.verticalScale(12),
            }}
            showsVerticalScrollIndicator={false}
            data={dataOrder}
            renderItem={this.renderItem}
            keyExtractor={item => `${item.id}`}
          />
        </SafeAreaView>
      </View>
    )
  }
}

Order.propTypes = {}

export default Order
