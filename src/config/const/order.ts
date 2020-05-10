import _ from 'lodash'

export type typeObject = Record<string | number, any>

// trạng thái của order
export const orderStatus: typeObject = {
  init: 1,
  confirm: 2,
  cancel: 3,
  shipping: 4,
  done: 5,
}

// key của từng value dựa vào index (có thể là do database trả về)
export const orderStatusName: typeObject = {
  1: 'init',
  2: 'confirm',
  3: 'cancel',
  4: 'shipping',
  5: 'done',
}

// tên hiển thị đối với tưngf trạng thái order
export const orderStatusValue: typeObject = {
  init: 'orderStatus.init',
  confirm: 'orderStatus.confirm',
  cancel: 'orderStatus.cancel',
  shipping: 'orderStatus.shipping',
  done: 'orderStatus.done',
}

// danh sách các trạng thái của order
export const orderStatusList: OrderItemType[] = [
  {
    id: orderStatus.init,
    name: orderStatusName[1],
    displayName: orderStatusValue.init,
  },
  {
    id: orderStatus.confirm,
    name: orderStatusName[2],
    displayName: orderStatusValue.confirm,
  },
  {
    id: orderStatus.cancel,
    name: orderStatusName[3],
    displayName: orderStatusValue.cancel,
  },
  {
    id: orderStatus.shipping,
    name: orderStatusName[4],
    displayName: orderStatusValue.shipping,
  },
  {
    id: orderStatus.done,
    name: orderStatusName[5],
    displayName: orderStatusValue.done,
  },
]

export const orderStatusListKey = _.keys(orderStatus)

// type

export type OrderItemType = {
  id: string | number
  name: string
  displayName: string
}
