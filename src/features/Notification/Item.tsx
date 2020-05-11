import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { sizes } from 'src/config'
import { TextBase } from 'src/components'

type Props = {
  item: Record<string, any>
  navigation?: NavigationProp<any, any, any, any>
}

type State = {}

class Item extends PureComponent<Props, State> {
  render() {
    const { item } = this.props
    return (
      <View style={styles.container}>
        <TextBase numberOfLines={1} style={styles.title}>
          {item.title}
        </TextBase>
        <TextBase numberOfLines={2} style={styles.content}>
          {item.content}
        </TextBase>
      </View>
    )
  }
}

export default Item

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes.padding / 2,
  },

  title: {
    fontWeight: 'bold',
    paddingBottom: 6,
  },

  content: {},
})
