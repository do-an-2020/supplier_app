import React, { PureComponent } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Header } from 'src/components'
import { NavigationProp } from '@react-navigation/native'
import { orderStatusList, orderStatus } from 'src/config/const'
import { i18n } from 'src/config'
import TopBar from './TopBar'
import Screen from './Screen'

type Props = {
  navigation: NavigationProp<any, any, any, any, any>
  route: any
}

class Index extends PureComponent<Props> {
  renderScreen: Record<string | number, any> = {}

  activeTab: number = 0

  header: React.RefObject<TopBar> = React.createRef()

  componentDidUpdate(preProps: Props) {
    const { navigation, route } = this.props
    const { type } = route.params
    const newType = preProps.route.params.type

    if (type !== newType && type !== undefined) {
      this.onChangeTopBar(orderStatus[type])
    }

    navigation.setParams({ type: undefined })
  }

  onChangeScreen = (index: number) => {
    this.onChangeTopBar(index)
    this.changeTabHeader(index)
  }

  onChangeTopBar = (index: number) => {
    // nêu đang ở tab đó thì bỏ qua
    if (this.activeTab === index) return

    // ngược lại sẽ hiển thị tab mới và ẩn tab cũ đi
    this.renderScreen[this.activeTab].onHide()

    this.renderScreen[index].onShow()

    // gán biến check tabactive
    this.activeTab = index
  }

  // thay đổi vị trí tab trên thanh Bar
  changeTabHeader = (index: number) => {
    const scrollToIndex = this.header.current?.scrollToIndex
    if (typeof scrollToIndex === 'function') scrollToIndex(index)
  }

  renderTopbar = () => {
    return <TopBar ref={this.header} onChangeTab={this.onChangeTopBar} />
  }

  onSetRef = (index: number, ref: any) => {
    this.renderScreen[index] = ref
  }

  renderContent = () => {
    const { navigation } = this.props
    return (
      <View style={styles.viewScreen}>
        {orderStatusList.map((item, i) => {
          return (
            <Screen
              key={item.id}
              navigation={navigation}
              indexTab={i}
              ref={ref => this.onSetRef(i, ref)}
              type={item.name}
            />
          )
        })}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={i18n.t('tab.order')} />
        {this.renderTopbar()}
        {this.renderContent()}
      </View>
    )
  }
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewScreen: { flex: 1, marginTop: Platform.OS === 'android' ? 0 : 2 },
})
