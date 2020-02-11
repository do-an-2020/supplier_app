import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'

class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text> Notification </Text>
      </View>
    )
  }
}

Notification.propTypes = {}

export default Notification
