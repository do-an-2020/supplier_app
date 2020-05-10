import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native'
import { NavigationProp } from 'src/config/const/navigationHelper'
import { orderAddListByType } from 'src/redux/order/actions'
import { colors, sizes } from 'src/config'
import { FlatList } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import dataFake from '../data'
import ItemOrder from './ItemOrder'
import { reselect } from './reselect'

type OrderItem = Record<string, any>

type Props = {
  navigation: NavigationProp<any, any, any, any, any>
  orderStatus: number
  name: string
  data?: OrderItem[]
  page?: {
    current: number
    max: number
  }
  loading?: number
  error?: string | null | undefined
}

type State = {
  refresh: boolean
}

class Content extends Component<Props, State> {
  isGetData: boolean = false

  constructor(props: Props) {
    super(props)
    this.state = {
      refresh: false,
    }
  }

  componentDidMount() {
    this.onGetData(1, [])
  }

  // func goi api để lấy data
  // sau khi lấy data sẽ lưu toàn bộ thông tin vào redux
  onGetData = (page: number, oldData?: OrderItem[]) => {
    if (this.isGetData) return

    this.isGetData = true
    // lưu thông tin vào redux

    const { name } = this.props
    this.setState({ refresh: false }, () => {
      this.isGetData = false
      orderAddListByType({ type: name, data: dataFake, page: { current: 1, max: 10 } })
    })
  }

  // khi load lại page
  onRefresh = () => {
    this.setState({ refresh: true }, () => {
      this.isGetData = false

      this.onGetData(1, [])
    })
  }

  getPropsList = () => {
    return {}
  }

  onLoadMore = () => {
    const { data, page } = this.props
    if (!Array.isArray(data) || !page || page.current >= page.max) return

    this.onGetData(page.current + 1, data)
  }

  renderFooter = () => {
    const { page } = this.props
    if (!page) return null

    if (page?.current >= page?.max) return null

    return (
      <View style={styles.centerRow}>
        <ActivityIndicator color={colors.primary} />
      </View>
    )
  }

  renderItem = ({ item }: { item: OrderItem }) => {
    return <ItemOrder item={item} />
  }

  renderList = () => {
    const { data } = this.props
    const { refresh } = this.state

    return (
      <FlatList
        contentContainerStyle={styles.contentStyle}
        data={data}
        keyExtractor={(item: OrderItem) => `${item.id}`}
        renderItem={this.renderItem}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={this.onRefresh} />}
        onEndReachedThreshold={0.2}
        onEndReached={this.onLoadMore}
        {...this.getPropsList()}
      />
    )
  }

  renderLoading = () => {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.primary} />
      </View>
    )
  }

  render() {
    const { loading } = this.props

    if (loading) return this.renderLoading()

    return this.renderList()
  }
}

const mapStateToProps = (state: any, props: Props) => {
  return reselect(state, props)
}

export default connect(mapStateToProps)(Content)

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentStyle: {
    flexGrow: 1,
    paddingHorizontal: sizes.padding,
  },

  centerRow: {
    alignItems: 'center',
    paddingVertical: sizes.padding / 2,
  },
})
