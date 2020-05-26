import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { sizes } from '@dvh/config'
import { TextBase, Touch } from '@dvh/components'

type IProps = {
  onSend: (message: string) => void
}

type IState = {
  message: string
}

class InputChat extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      message: '',
    }
  }

  onChangeMessage = (text: string) => {
    this.setState({ message: text })
  }

  onSend = () => {
    const { onSend } = this.props
    if (typeof onSend === 'function') {
      const { message } = this.state
      onSend(message)
      this.setState({ message: '' })
    }
  }

  render() {
    const { message } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput value={message} onChangeText={this.onChangeMessage} />
        </View>
        <Touch onPress={this.onSend} style={styles.viewBtn}>
          <TextBase>Gửi</TextBase>
        </Touch>
      </View>
    )
  }
}

export default InputChat

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewInput: {
    marginVertical: sizes.margin1_4,
    marginHorizontal: sizes.margin,
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: '#2E9AFE',
    flex: 1,
    paddingHorizontal: sizes.margin1_2,
    paddingVertical: sizes.margin1_3,
  },
  viewBtn: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: sizes.margin,
    paddingHorizontal: sizes.margin,
  },
})
