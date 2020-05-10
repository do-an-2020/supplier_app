import { orderStatusList, orderStatusListKey } from 'src/config/const'
import {
  OrderItem,
  ORDER_ADD_LIST_BY_TYPE,
  IPayload,
  ORDER_UPDATE_ITEM_BY_TYPE,
  ORDER_ADD_ERROR_GET_LIST,
} from './types'

const initialState: Record<string, ItemType> = {}

type ItemType = {
  loading: boolean
  data: OrderItem[]
  error: string
  page: {
    current: number
    max: number
  }
}

const initItem: ItemType = {
  loading: true,
  data: [],
  error: '',
  page: {
    current: 1,
    max: 10,
  },
}

// khởi tạo nên cấu trúc dữ liệu trong redux cho order
for (let i = 0; i < orderStatusList.length; i += 1) {
  const element = orderStatusList[i]

  initialState[element.name] = initItem
}

// khởi tạo reducer
const reducer = (
  state: Record<string, ItemType> = initialState,
  action: { type: string; payload: IPayload }
) => {
  switch (action.type) {
    case ORDER_ADD_LIST_BY_TYPE: {
      // lưu mảng order vào redux
      const { type = '', data, page } = action.payload
      // nếu type không thuộc mảng có trước sẽ trả về state cũ
      if (!orderStatusListKey.includes(type)) return state

      // lưu dũ liệu mới
      return { ...state, [type]: { ...state[type], data, page, error: '', loading: false } }
    }

    case ORDER_UPDATE_ITEM_BY_TYPE: {
      const {
        typeUpdate: { from = '', to = '' },
        data,
      } = action.payload
      // nếu from và to ko thuộc dữ liệu thì bỏ qua
      if (!orderStatusListKey.includes(from) || !orderStatusListKey.includes(to)) return state
      // trường hợp luu ngay tại screen
      if (from === to) {
        const index = state[from].data.findIndex(i => i.id === data.id)
        const newData = state[from].data

        newData[index] = data

        return {
          ...state,
          [from]: {
            ...state[from],
            data: [...newData],
          },
        }
      }

      return {
        ...state,
        [from]: {
          ...state[from],
          data: [...state[from].data.filter(i => i.id !== data.id)],
        },
        [to]: {
          ...state[to],
          data: [...[data].concat(state[to].data)],
        },
      }
    }

    case ORDER_ADD_ERROR_GET_LIST: {
      const { type = '', error } = action.payload
      // nếu type không thuộc mảng có trước sẽ trả về state cũ
      if (!orderStatusListKey.includes(type)) return state

      // lưu dũ liệu mới
      return { ...state, [type]: { ...state[type], error, loading: false } }
    }

    default:
      return state
  }
}

export default reducer
