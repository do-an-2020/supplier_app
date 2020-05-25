export type IObject = Record<string, any>
// interface
export interface IInitstateUser {
  email: string
  authen: string
  info: IObject
}

export interface IPSetAuthen {
  email?: string
  authen: string
}

export interface IPSetInfo {
  data: IObject
}

export interface IPUser extends IPSetInfo, IPSetAuthen {}

// type function
export const USER_SET_AUTHEN = 'USER_SET_AUTHEN'
export const USER_REMOVE_AUTHEN = 'USER_REMOVE_AUTHEN'
export const USER_SET_INFO = 'USER_SET_INFO'
