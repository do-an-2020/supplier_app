import React, { Component } from 'react'
import { Text, View } from 'react-native'

type Props = {}

type State = {}

class HomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}

export default HomeScreen
