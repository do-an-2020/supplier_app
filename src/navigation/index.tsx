import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

type props = {
  isLogin?: boolean | undefined
}

const Navigator = ({ isLogin }: props) => {
  return <NavigationContainer>{!isLogin ? <AuthStack /> : <MainStack />}</NavigationContainer>
}

export default Navigator
