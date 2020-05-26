import { all } from 'redux-saga/effects'
import { userSaga } from '@dvh/user'

export default function* rootSaga() {
  yield all([...userSaga])
}
