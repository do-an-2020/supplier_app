import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

type IProps = {}

type IState = {}

class HomeChat extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>HomeChat</Text>
      </View>
    )
  }
}

export default HomeChat
