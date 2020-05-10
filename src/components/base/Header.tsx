import React from 'react'
import { Text, View, StyleSheet, ViewProps, StyleProp, TextStyle } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { SafeAreaConsumer } from 'react-native-safe-area-context'
import { colors, scales } from 'src/config'
import Icon from './Icon'
import { elevationShadowStyle } from '../../config/Theme/elevation'

type Props = ViewProps & {
  renderRight?: React.ReactNode
  goBack?: () => void | undefined
  titleStyle?: StyleProp<TextStyle>
  title?: string
  customBack?: React.ReactNode
}

class Headers extends React.PureComponent<Props> {
  render() {
    const {
      renderRight,
      goBack,
      titleStyle = {},
      title,
      style,
      customBack,
      ...restProps
    } = this.props
    return (
      <SafeAreaConsumer>
        {insets => (
          <View
            style={[
              {
                ...elevationShadowStyle(5),
                backgroundColor: colors.primary,
                paddingTop: insets?.top,
                zIndex: 5,
              },
              style,
            ]}
            {...restProps}>
            <View style={styles.container}>
              <View style={styles.viewContent}>
                <Text style={[styles.txtTitle, titleStyle]}>{title && title.toUpperCase()}</Text>
              </View>
              <View style={styles.overView}>
                {typeof goBack === 'function' ? (
                  <TouchableRipple rippleColor={colors.primary} onPress={goBack}>
                    {customBack || (
                      <Icon type="MaterialIcons" name="arrow-back" size={30} color={colors.white} />
                    )}
                  </TouchableRipple>
                ) : (
                  <View style={{ width: 30, height: 30 }} />
                )}

                {typeof renderRight === 'function' ? renderRight() : renderRight}
              </View>
            </View>
          </View>
        )}
      </SafeAreaConsumer>
    )
  }
}

export default Headers

const styles = StyleSheet.create({
  viewContent: { justifyContent: 'center', flex: 1 },
  txtTitle: {
    textAlign: 'center',
    fontSize: scales.moderateScale(17),
    fontWeight: 'bold',
    color: colors.white,
  },
  container: { width: '100%', height: 44 },
  overView: {
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
})
