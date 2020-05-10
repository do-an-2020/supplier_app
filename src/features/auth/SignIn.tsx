import React, { Component } from 'react'
import { Text, View } from 'react-native'

type Props = {}

type State = {}

class SignIn extends Component<Props, State> {
  a: Number

  constructor(props: Props) {
    super(props)
    this.state = {
      a: '10',
    }
    this.a = 10
  }

  render() {
    const { a } = this.state
    return (
      <View>
        <Text>SignIn{a}</Text>
      </View>
    )
  }
}

export default SignIn
