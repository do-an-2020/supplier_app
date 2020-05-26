import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SingleChatScreen } from '@dvh/chat'
import store from 'src/redux/store'

type IProps = {}

type IState = {}

class Index extends SingleChatScreen {
  getAuthen = () => {
    return store.getState()?.user?.authen
  }

  getUserId = () => {
    return store.getState()?.user?.info?.id
  }

  getRoomId = () => {
    const { route } = this.props
    return route?.params?.id || '5eccccc11f24b83811ab2daa'
  }
}

export default Index
