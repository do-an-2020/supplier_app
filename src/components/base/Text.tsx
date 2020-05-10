import React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'

type propsCustom = TextProps & {
  children: any
}
// component custom của Text (React-native)
// tại đây có thể đặt màu chữ, fontfamily mặc định cho text
const TextBase = (props: propsCustom) => {
  const { style, children } = props
  return <Text style={[styles.customStyleText, style]}>{children}</Text>
}

export default TextBase

const styles = StyleSheet.create({
  customStyleText: {},
})
