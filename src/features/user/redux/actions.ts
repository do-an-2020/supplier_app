import { IPSetAuthen, USER_SET_INFO, USER_REMOVE_AUTHEN, IPSetInfo, USER_SET_AUTHEN } from './types'

// func dispatch luu authen
export const userSetAuthen: (
  payload: IPSetAuthen
) => { type: string; payload: IPSetAuthen } = payload => {
  return {
    type: USER_SET_AUTHEN,
    payload,
  }
}
// func dispatch remove authen
export const userRemoveAuthen: () => { type: string } = () => {
  return { type: USER_REMOVE_AUTHEN }
}

// func dispatch luu user info
export const userSetInfo: (P: IPSetInfo) => { type: string; payload: IPSetInfo } = payload => {
  return {
    type: USER_SET_INFO,
    payload,
  }
}
