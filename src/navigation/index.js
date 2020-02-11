import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Proptypes from 'prop-types'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

const Navigator = ({ isLogin }) => {
  return <NavigationContainer>{isLogin ? <AuthStack /> : <MainStack />}</NavigationContainer>
}

Navigator.propTypes = {
  isLogin: Proptypes.bool,
}

export default Navigator
