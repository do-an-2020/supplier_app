import { combineReducers } from 'redux'
import appInfoReducer from './appInfo/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  appInfo: appInfoReducer,
})

export default rootReducer
