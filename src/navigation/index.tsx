import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { IObject } from '@dvh/user'
import { connect } from 'react-redux'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

type props = {
  isLogin?: boolean | undefined
}

const Navigator = ({ isLogin }: props) => {
  return <NavigationContainer>{!isLogin ? <AuthStack /> : <MainStack />}</NavigationContainer>
}

const mapStateToProps = (state: IObject) => {
  return {
    isLogin: state?.user?.authen?.length > 0,
  }
}

export default connect(mapStateToProps)(Navigator)
