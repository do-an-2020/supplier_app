export type IItemNotification = Record<string, any>

export type IStateNotification = {
  data: IItemNotification[]
  page: {
    current: number
    max: number
  }
  loading: boolean
  count: number
  error: string
}

export type IPayloadAddDataList = {
  data: IItemNotification[]
  page: {
    current: number
    max: number
  }
}

export type IPayloadAddError = {
  error: string
}

export type IPayloadUpdateRead = {
  id: number | string
}

export type IPayloadSetCount = {
  count: number
}

export type IPayload = IPayloadAddDataList &
  IPayloadUpdateRead &
  IPayloadSetCount &
  IPayloadAddError

export const NOTIFICATION_ADD_DATA_LIST = 'NOTIFICATION_ADD_DATA_LIST'

export const NOTIFICATION_UPDATE_READ = 'NOTIFICATION_UPDATE_READ'

export const NOTIFICATION_ADD_ERROR = 'NOTIFICATION_ADD_ERROR'

export const NOTIFICATION_SET_COUNT = 'NOTIFICATION_SET_COUNT'
