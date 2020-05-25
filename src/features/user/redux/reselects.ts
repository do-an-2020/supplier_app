// reselect authen

import { createSelector } from 'reselect'
import { IObject, IInitstateUser } from './types'

// select authen
export const selectAuthen = createSelector(
  (state: IObject) => state.user,
  (user: IInitstateUser) => user.authen
)

// select use info
export const selectUserInfo = createSelector(
  (state: IObject) => state.user,
  (user: IInitstateUser) => user.info
)
