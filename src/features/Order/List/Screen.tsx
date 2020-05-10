import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { Screen as RNScreen } from 'react-native-screens'
import Content from './Content'

type Props = {
  navigation: NavigationProp<any, any, any, any, any>
  indexTab: number
  type: string
  name?: string
}

type State = {
  isActive: Boolean
  isShow: Boolean
}

class Screen extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isActive: props.indexTab === 0,
      isShow: props.indexTab === 0,
    }
  }

  // hiển thị màn hình
  // đồng thời active màn hình
  onShow = () => {
    const { isShow } = this.state
    if (!isShow) this.setState({ isShow: true, isActive: true })
  }

  // ẩn màn hình
  onHide = () => {
    const { isShow } = this.state
    if (isShow) this.setState({ isShow: false })
  }

  renderContent = () => {
    const { navigation, type, indexTab } = this.props
    return <Content navigation={navigation} name={type} orderStatus={indexTab} />
  }

  render() {
    const { isActive, isShow } = this.state
    if (!isActive) return null
    return (
      <RNScreen
        stackPresentation="fullScreenModal"
        pointerEvents={isShow ? 'auto' : 'none'}
        active={isShow ? 1 : 0}
        style={isShow ? styles.activeScreen : styles.inActiveScreen}>
        {this.renderContent()}
      </RNScreen>
    )
  }
}

export default Screen

const styles = StyleSheet.create({
  activeScreen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    zIndex: 9999,
  },
  inActiveScreen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    zIndex: 0,
  },
})
