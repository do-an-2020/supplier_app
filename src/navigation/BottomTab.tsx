import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Order from '../features/Order/List'
import Profile from '../features/Profile'
import Notification from '../features/Notification'
import Home from '../features/Home'
import SingleChatScreen from '../features/Chat/SingleChat'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Manager">
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Manager" component={SingleChatScreen} options={{ tabBarVisible: false }} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default BottomTab
