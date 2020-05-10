import React, { Component } from 'react'
import { Text, View } from 'react-native'

type Props = {}

type State = {}

class LoadingScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>LoadingScreen</Text>
      </View>
    )
  }
}

export default LoadingScreen
