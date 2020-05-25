import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, TextInput } from 'react-native'
import { SafeAreaConsumer, EdgeInsets } from 'react-native-safe-area-context'
import { TextBase, Touch } from '@dvh/components'
import { sizes } from '@dvh/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { signIn } from '../api'

export interface IPropsSignIn {}

export interface IStateSignIn {
  email: string
  password: string
}

class SignIn extends Component<IPropsSignIn, IStateSignIn> {
  constructor(props: IPropsSignIn) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  onChangeEmail = (value: string) => {
    this.setState({ email: value })
  }

  onChangePassword = (value: string) => {
    this.setState({ password: value })
  }

  onSubmit = () => {
    const { email, password } = this.state
    signIn(email, password).then(r => {
      if (r.success && typeof r.data === 'string') {
        this.onSubmitSuccess(r.data)
      }
    })
  }

  onSubmitSuccess = (token?: string) => {
    console.log('SignIn -> onSubmitSuccess -> token', token)
    // save token
  }

  renderTop = () => {
    return <View style={styles.topview} />
  }

  renderInputEmail = () => {
    const { email } = this.state
    return (
      <View style={styles.viewInput}>
        <TextInput
          autoCapitalize="none"
          onChangeText={this.onChangeEmail}
          value={email}
          placeholder="Accounts"
        />
      </View>
    )
  }

  renderInputPassword = () => {
    const { password } = this.state
    return (
      <View style={styles.viewInput}>
        <TextInput
          autoCapitalize="none"
          onChangeText={this.onChangePassword}
          value={password}
          placeholder="Password"
        />
      </View>
    )
  }

  renderButtonSubmit = () => {
    return (
      <Touch onPress={this.onSubmit} style={styles.viewButton}>
        <TextBase style={styles.labelButton}>Log in</TextBase>
      </Touch>
    )
  }

  renderForm = () => {
    return (
      <View style={styles.full}>
        {this.renderInputEmail()}
        {this.renderInputPassword()}
        {this.renderButtonSubmit()}
      </View>
    )
  }

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.flex1}>
        <ScrollView contentContainerStyle={styles.grow} scrollEnabled={false}>
          <SafeAreaConsumer>
            {(asset: EdgeInsets | null) => {
              return (
                <View
                  style={[{ paddingTop: asset?.top, paddingBottom: asset?.bottom }, styles.flex1]}>
                  {this.renderTop()}
                  {this.renderForm()}
                </View>
              )
            }}
          </SafeAreaConsumer>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}

export default SignIn

const styles = StyleSheet.create({
  topview: {
    width: sizes.width,
    height: sizes.width,
  },
  full: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.padding,
  },
  grow: {
    flexGrow: 1,
  },
  viewInput: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: sizes.padding * 2,
    marginTop: 0,
  },
  input: {
    fontSize: 17,
  },

  viewButton: {
    width: '100%',
    borderRadius: 30,
    paddingVertical: sizes.padding / 2,
    backgroundColor: '#58D3F7',
    alignItems: 'center',
  },
  labelButton: {
    fontSize: 18,
    color: '#fff',
  },
  flex1: {
    flex: 1,
  },
})
