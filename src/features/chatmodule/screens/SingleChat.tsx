import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaConsumer, EdgeInsets } from 'react-native-safe-area-context'
import { Header } from '@dvh/components'
import { sizes } from '@dvh/config'
import io from 'socket.io-client'
import { host } from '@dvh/api/config'
import { IObject } from '@dvh/user'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import ItemChat from './ItemChat'
import InputChat from './InputChat'
import { getMessageByRoom } from '../api'

type IProps = {
  navigation: NavigationProp<any, any, any, any, any>
  route: RouteProp<any, any> & { params: Record<string, any> }
}

type IState = {
  data: Array<Record<string, any>>
}

type IItem = Record<string, any>

const randomId = () => Date.now().toString()

class SingleChat extends Component<IProps, IState> {
  io: any = undefined

  constructor(props: IProps) {
    super(props)
    this.state = {
      data: [],
    }
    this.io = undefined
  }

  componentDidMount() {
    this.onGetData()
    this.connectSocket()
  }

  componentWillUnmount() {
    // this.io = null
    this.io.disconnect()
    delete this.io
  }

  onGetData = () => {
    getMessageByRoom({ authen: this.getAuthen(), room: this.getRoomId() }).then(r => {
      if (r.success && Array.isArray(r.data)) {
        const realData = r.data?.map(i => ({
          ...i,
          self: i.sender.id === this.getUserId(),
        }))
        this.setState({ data: realData })
      }
    })
  }

  getRoomId = () => {
    return ''
  }

  getUserId = () => {
    return ''
  }

  getAuthen = () => {
    return ''
  }

  // func connect socket
  connectSocket = () => {
    console.log('SingleChat -> connectSocket -> this.getUserId()', this.getUserId())

    this.io = io(`${host}`, {
      query: { token: this.getAuthen() },
      // timeout: 10000,
      // jsonp: false,
      // transports: ['websocket'],
      // autoConnect: false,
      // agent: '-',
      // path: '/', // Whatever your path is
      // pfx: '-',
      // key: this.getUserId(), // Using token-based auth.
      // // passphrase: cookie, // Using cookie auth.
      // cert: '-',
      // ca: '-',
      // ciphers: '-',
      // rejectUnauthorized: '-',
      // perMessageDeflate: '-',
      // path: `/${this.getUserId()}/socket.io`,
    })

    this.io.emit('join_room', { room: this.getRoomId() })

    this.io.on('receive_message', (param: IObject) => {
      console.log('SingleChat -> connectSocket -> param', param)
      const newItem: Record<string, any> = {
        id: randomId(),
        message: param.message,
        self: param.sender === this.getUserId(),
      }

      const { data } = this.state
      const checkId = data.findIndex(i => i.id === param?.oldId)

      if (checkId < 0)
        this.setState(state => ({
          data: [newItem].concat(state.data),
        }))
    })
  }

  // func sau khi click vao btn send
  // lưu thông tin vào state  sau đó gọi api để gửi lên server
  onSendMessage = (message: string) => {
    const newItem: Record<string, any> = { id: randomId(), message, self: true }
    this.setState(
      state => ({
        data: [newItem].concat(state.data),
      }),
      () => {
        this.io.emit('send_message', { message, id: newItem.id, room: this.getRoomId() })
      }
    )
  }

  renderItem = ({ item, index }: { item: IItem; index: number }) => {
    return <ItemChat item={item} />
  }

  renderInputChat = () => {
    return <InputChat onSend={this.onSendMessage} />
  }

  render() {
    const { data } = this.state
    return (
      <>
        <Header title="Test" />
        <SafeAreaConsumer>
          {(asset: EdgeInsets | null) => {
            return (
              <View style={[{ paddingBottom: asset?.bottom }, styles.container]}>
                <FlatList
                  contentContainerStyle={styles.content}
                  data={data}
                  renderItem={this.renderItem}
                  keyExtractor={(item: IItem) => `${item.id}`}
                  inverted
                  showsVerticalScrollIndicator={false}
                />
                {this.renderInputChat()}
              </View>
            )
          }}
        </SafeAreaConsumer>
      </>
    )
  }
}

export default SingleChat

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollGrow: {
    flexGrow: 1,
  },
  content: {
    paddingHorizontal: sizes.margin,
  },
})
