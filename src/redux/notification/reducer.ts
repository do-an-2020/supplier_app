import {
  IStateNotification,
  IPayload,
  NOTIFICATION_ADD_DATA_LIST,
  NOTIFICATION_UPDATE_READ,
  NOTIFICATION_SET_COUNT,
  NOTIFICATION_ADD_ERROR,
} from './types'

const initialState: IStateNotification = {
  data: [],
  page: {
    current: 1,
    max: 10,
  },
  loading: true,
  error: '',
  count: 0,
}

const notificationReducer = (
  state: IStateNotification = initialState,
  action: { type: string; payload: IPayload }
) => {
  switch (action.type) {
    case NOTIFICATION_ADD_DATA_LIST: {
      const { data, page } = action.payload
      return { ...state, data, page, loading: false }
    }

    case NOTIFICATION_UPDATE_READ: {
      const { id } = action.payload
      const index = state.data.findIndex(i => i.id === id)
      const newData = state.data
      newData[index].unread = false
      return { ...state, data: [...newData] }
    }

    case NOTIFICATION_ADD_ERROR: {
      const { error } = action.payload
      return { ...state, error, loading: false }
    }

    case NOTIFICATION_SET_COUNT: {
      const { count } = action.payload

      return { ...state, count }
    }

    default:
      return state
  }
}

export default notificationReducer
