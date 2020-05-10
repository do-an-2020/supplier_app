/**
 * các màn hình còn lại sẽ thuộc vào stack này
 */

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../features/Home'
import routes from './Routes'
import BottomTab from './BottomTab'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name={routes.home.index} component={Home} />
    </Stack.Navigator>
  )
}

export default MainStack
