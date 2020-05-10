import React, { Component } from 'react'
import { Text, View } from 'react-native'

type Props = {}

type State = {}

class SignUp extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>SignUp</Text>
      </View>
    )
  }
}

export default SignUp
