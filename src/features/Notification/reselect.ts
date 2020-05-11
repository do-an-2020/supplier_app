import { createSelector } from 'reselect'

export const testOrderReselect = () => {}

export const reselect = createSelector(
  (state: any) => state.notification,
  notification => {
    return {
      ...notification,
    }
  }
)
