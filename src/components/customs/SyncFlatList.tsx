import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  FlatList,
  FlatListProps,
} from 'react-native'
import { sizes, colors } from 'src/config'

export interface IPropsSyncFlatList {
  data?: any[]
  page?: {
    current: number
    max: number
  }
  loading?: boolean
  error?: string | null | undefined
}

export interface IStatesSyncFlatList {
  refresh: boolean
}

// interface SyncFlatList<P = {} | IPropsSyncFlatList, S = {} | IStatesSyncFlatList>
//   extends Component<P, S> {}

abstract class SyncFlatList<
  P extends IPropsSyncFlatList,
  S extends IStatesSyncFlatList
> extends Component<P & IPropsSyncFlatList, S & IStatesSyncFlatList> {
  isGetData: boolean = false

  constructor(props: IPropsSyncFlatList) {
    super(props)
    this.state = {
      refresh: false,
    }
  }

  onGetData = (page: number, oldData: any[]) => {
    console.log('SyncFlatList -> onGetData -> oldData', oldData)
    console.log('SyncFlatList -> onGetData -> page', page)
  }

  // khi load lại page
  onRefresh = () => {
    this.setState({ refresh: true }, () => {
      this.isGetData = false

      this.onGetData(1, [])
    })
  }

  getPropsList: () => FlatListProps<any> | {} = () => {
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

  renderItem = ({ item }: { item: any }) => {
    return <Text>{item.id}</Text>
  }

  renderList = () => {
    const { data } = this.props
    const { refresh } = this.state

    return (
      <FlatList
        contentContainerStyle={styles.contentStyle}
        data={data}
        keyExtractor={(item: any) => `${item.id}`}
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
    return this.renderList()
  }
}

export default SyncFlatList

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
