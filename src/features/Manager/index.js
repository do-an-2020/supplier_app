import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'

class Manager extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text> Manager </Text>
      </View>
    )
  }
}

Manager.propTypes = {}

export default Manager
