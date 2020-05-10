import { combineReducers } from 'redux'
import appInfoReducer from './appInfo/reducer'
import userReducer from './user/reducer'
import orderReducer from './order/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  appInfo: appInfoReducer,
  order: orderReducer,
})

export default rootReducer
