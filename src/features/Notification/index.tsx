import React from 'react'
import { View, StyleSheet, FlatListProps } from 'react-native'
import { Header, SyncFlatList } from 'src/components'
import { i18n, sizes, colors } from 'src/config'
import { connect } from 'react-redux'
import { addDataListNotification } from 'src/redux/notification/actions'
import { IPropsSyncFlatList, IStatesSyncFlatList } from 'src/components/customs/SyncFlatList'
import dataFake from './data'
import { reselect } from './reselect'
import Item from './Item'

interface Props extends IPropsSyncFlatList {
  abc: boolean
  // loading: boolean
  // data: itemNotificationType[]
  page: {
    current: number
    max: number
  }
}

interface State extends IStatesSyncFlatList {
  refresh: boolean
}

type itemNotificationType = any

class Notification extends SyncFlatList<Props, State> {
  componentDidMount() {
    this.onGetData(1, [])
  }

  onGetData: (page: number, oldData: itemNotificationType[] | undefined) => void = (
    page,
    oldData
  ) => {
    if (this.isGetData) return

    this.isGetData = true
    // lưu thông tin vào redux

    this.setState({ refresh: false }, () => {
      this.isGetData = false
      addDataListNotification({ data: dataFake, page: { current: 1, max: 10 } })
    })
  }

  renderItem = ({ item }: { item: itemNotificationType }) => {
    return <Item item={item} />
  }

  getPropsList: () => FlatListProps<any> | Record<string, any> = () => {
    return {
      ItemSeparatorComponent: () => <View style={styles.divide} />,
    }
  }

  renderContent() {
    const { loading } = this.props

    if (loading) return this.renderLoading()

    return this.renderList()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={i18n.t('tab.notification')} />
        {this.renderContent()}
      </View>
    )
  }
}

const mapStateToProps = (state: any) => {
  return reselect(state)
}

export default connect(mapStateToProps)(Notification)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

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
  divide: { width: '100%', height: StyleSheet.hairlineWidth, backgroundColor: 'red' },
})
