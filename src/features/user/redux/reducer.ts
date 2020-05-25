import { IInitstateUser, IPUser, USER_SET_AUTHEN, USER_REMOVE_AUTHEN, USER_SET_INFO } from './types'

const initialState: IInitstateUser = {
  email: '',
  authen: '',
  info: {},
}

const userReducer: (
  state: IInitstateUser,
  action: { type: string; payload: IPUser }
) => IInitstateUser = (state = initialState, action) => {
  switch (action.type) {
    // func lưu thông tin authen (bao gồm cả email: có thê sửa thành tên đăng nhâp sau)
    case USER_SET_AUTHEN: {
      const { email, authen } = action.payload
      return Object.assign({}, state, { email, authen })
    }

    // func xoá authen
    case USER_REMOVE_AUTHEN: {
      return Object.assign({}, state, { authen: '', info: {} })
    }

    // func lưu thông tin của user
    case USER_SET_INFO: {
      const { data } = action.payload
      return Object.assign({}, state, { info: data })
    }

    default:
      return state
  }
}

export default { user: userReducer }
