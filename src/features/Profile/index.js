import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    )
  }
}

Profile.propTypes = {}

export default Profile
