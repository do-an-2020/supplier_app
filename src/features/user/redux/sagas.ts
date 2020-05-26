import { takeLatest, call, put, select } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist'
import { getAccount } from '../api'
import { userSetInfo } from './actions'

function* onGetUserInfo() {
  const authen = yield select(state => state.user.authen)
  const result = yield call(getAccount, { authen })

  if (result.success) {
    yield put(userSetInfo({ data: result.data }))
  }
}

function* listener() {
  yield takeLatest(REHYDRATE, onGetUserInfo)
}

export default [listener()]
