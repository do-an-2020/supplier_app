import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

type IProps = {}

type IState = {}

class Profile extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    )
  }
}

export default Profile
