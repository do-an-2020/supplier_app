import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text> Order </Text>
      </View>
    )
  }
}

Order.propTypes = {}

export default Order
