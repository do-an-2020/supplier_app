import {
  IPayloadAddOrderList,
  ORDER_ADD_LIST_BY_TYPE,
  IPayloadUpdateItem,
  ORDER_UPDATE_ITEM_BY_TYPE,
  IPayloadAddError,
  ORDER_ADD_ERROR_GET_LIST,
} from './types'
import store from '../store'

/**
 * func add them data vao redux
 */
export const orderAddListByType = (payload: IPayloadAddOrderList) => {
  store.dispatch({
    type: ORDER_ADD_LIST_BY_TYPE,
    payload,
  })
}

/**
 * func update vi tri cua item order trong redux
 */

export const orderUpdateItem = (payload: IPayloadUpdateItem) => {
  store.dispatch({
    type: ORDER_UPDATE_ITEM_BY_TYPE,
    payload,
  })
}

/**
 * func add error vao redux
 */
export const orderAddErrorByType = (payload: IPayloadAddError) => {
  store.dispatch({
    type: ORDER_ADD_ERROR_GET_LIST,
    payload,
  })
}
