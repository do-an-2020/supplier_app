/**
 * thêm list vào redux
 */

import {
  IPayloadAddError,
  NOTIFICATION_ADD_ERROR,
  IPayloadAddDataList,
  NOTIFICATION_ADD_DATA_LIST,
  IPayloadUpdateRead,
  NOTIFICATION_UPDATE_READ,
  IPayloadSetCount,
  NOTIFICATION_SET_COUNT,
} from './types'
import store from '../store'

export const addDataListNotification = (payload: IPayloadAddDataList) => {
  store.dispatch({
    type: NOTIFICATION_ADD_DATA_LIST,
    payload,
  })
}

/**
 * update đã đọc cho 1 item
 */

export const updateReadNotification = (payload: IPayloadUpdateRead) => {
  store.dispatch({
    type: NOTIFICATION_UPDATE_READ,
    payload,
  })
}

/**
 * add error
 */

export const addErrorNotication = (payload: IPayloadAddError) => {
  store.dispatch({
    type: NOTIFICATION_ADD_ERROR,
    payload,
  })
}

/**
 * set count
 */

export const setCountNotification = (payload: IPayloadSetCount) => {
  store.dispatch({
    type: NOTIFICATION_SET_COUNT,
    payload,
  })
}
