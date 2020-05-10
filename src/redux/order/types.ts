export const ORDER_ADD_LIST_BY_TYPE = 'ORDER_ADD_LIST_BY_TYPE'

export const ORDER_UPDATE_ITEM_BY_TYPE = 'ORDER_UPDATE_ITEM_BY_TYPE'

export const ORDER_ADD_ERROR_GET_LIST = 'ORDER_ADD_ERROR_GET_LIST'

export type OrderItem = Record<string, any>

export type IPayloadAddOrderList = {
  type?: string
  data: OrderItem[]
  page: {
    current: number
    max: number
  }
}

export type IPayloadUpdateItem = {
  typeUpdate: {
    from: string
    to: string
  }

  type?: string

  data: OrderItem
}

export type IPayloadAddError = {
  type?: string
  error: string
}

export type IPayload = IPayloadAddOrderList & IPayloadUpdateItem & IPayloadAddError
