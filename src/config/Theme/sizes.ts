import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const textSize = {
  smallest: 8,
  small: 10,
  normal: 14,

  large: 18,
  huge: 26,

  h1: 26,
  h2: 20,
  h3: 18,
  h4: 14,

  title: 18,
  header: 16,
  body: 14,
  cation: 12,
}

const margin = 24

const sizes = {
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  margin: 24,

  margin1_2: margin / 2,

  margin1_3: margin / 3,

  margin1_4: margin / 4,

  margin1_6: margin / 6,

  margin1_8: margin / 8,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,

  pt: width / 375,

  // device
  width,
  height,

  ...textSize,
}

export default sizes
