import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextBase } from '@dvh/components'
import { sizes } from '@dvh/config'

type IProps = {
  item: Record<string, any>
}

type IState = {}

class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  render() {
    const { item } = this.props
    return (
      <View style={item.self ? styles.viewItemSelf : styles.viewItem}>
        <View style={item.self ? styles.contentItemSelf : styles.contentItem}>
          <TextBase style={item.self ? styles.textSelf : styles.text}>{item.message}</TextBase>
        </View>
      </View>
    )
  }
}

export default Index

const styles = StyleSheet.create({
  container: {},
  viewItemSelf: {
    alignItems: 'flex-end',
  },
  contentItemSelf: {
    backgroundColor: '#2E9AFE',
    borderRadius: 12,
    marginVertical: sizes.margin1_3,
    padding: sizes.margin1_2,
    flexGrow: 0,
  },
  viewItem: { alignItems: 'flex-start' },
  contentItem: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
    marginVertical: sizes.margin1_3,
    padding: sizes.margin1_2,
  },
  textSelf: { color: '#fff', fontSize: 17 },
  text: { fontSize: 17 },
})
