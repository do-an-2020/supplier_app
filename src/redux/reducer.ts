import { combineReducers } from 'redux'
import { userReducer } from '@dvh/user'
import appInfoReducer from './appInfo/reducer'
import orderReducer from './order/reducer'
import notificationReducer from './notification/reducer'

console.log('userReducer', userReducer)

const rootReducer = combineReducers({
  ...userReducer,
  appInfo: appInfoReducer,
  order: orderReducer,
  notification: notificationReducer,
})

export default rootReducer
