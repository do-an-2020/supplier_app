import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Proptypes from 'prop-types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextBase, Button, TouchWithout } from '../../components'
import { scales, colors } from '../../config'
import routes from '../../navigation/Routes'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onPressCreateNew = () => {
    const { navigation } = this.props
    navigation.replace(routes.auth.signUp)
  }

  render() {
    // useContext
    return (
      <SafeAreaView style={styles.container}>
        <TextBase style={styles.title}>Đăng nhập</TextBase>

        <View style={styles.viewInput}>
          <TextInput placeholder="Số điện thoại" />
        </View>

        <View style={styles.viewInput}>
          <TextInput placeholder="Mật khẩu" />
        </View>

        <View style={styles.viewForgot}>
          <TextBase>Quên mật khẩu?</TextBase>
        </View>

        <Button title={'Đăng nhập'.toUpperCase()} style={styles.btnSignIn} />

        <View style={styles.viewOr}>
          <View style={styles.divider} />
          <TextBase>{'Hoặc'.toUpperCase()}</TextBase>
          <View style={styles.divider} />
        </View>

        <Button title={'facebook'.toUpperCase()} style={styles.btnSignIn} />
        <View style={styles.viewFooter}>
          <TouchWithout onPress={this.onPressCreateNew}>
            <TextBase style={styles.txtCreatenew}>{'Tạo tài khoản mới'.toUpperCase()}</TextBase>
          </TouchWithout>
        </View>
      </SafeAreaView>
    )
  }
}

SignIn.propTypes = {
  navigation: Proptypes.any,
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: scales.horizontalScale(24),
  },
  title: {
    marginTop: scales.verticalScale(24 * 3),
    fontSize: scales.moderateScale(24),
    color: colors.primary,
    fontWeight: '600',
  },
  viewInput: {
    marginTop: scales.verticalScale(24),
    paddingHorizontal: scales.horizontalScale(12),
    borderRadius: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: scales.verticalScale(12),
  },
  viewForgot: {
    marginTop: scales.verticalScale(24),
  },
  viewFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txtCreatenew: {
    color: colors.primary,
    fontSize: scales.moderateScale(20),
    textTransform: 'uppercase',
  },
  btnSignIn: {
    borderRadius: 20,
    marginTop: scales.verticalScale(24),
  },
  viewOr: {
    marginTop: scales.verticalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '40%',
    backgroundColor: 'red',
  },
})
