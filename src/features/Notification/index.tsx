import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'src/components'
import { i18n } from 'src/config'

type Props = {
  loading: boolean
  data: itemNotificationType[]
  page: {
    current: number
    max: number
  }
}

type State = {
  refresh: boolean
}

type itemNotificationType = any[]

class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      refresh: false,
    }
  }

  onGetData: (page: number, oldData: itemNotificationType) => void = (page, oldData) => {}

  render() {
    return (
      <View style={styles.container}>
        <Header title={i18n.t('tab.notification')} />
      </View>
    )
  }
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
