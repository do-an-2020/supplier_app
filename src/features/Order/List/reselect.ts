import { createSelector } from 'reselect'

export const testOrderReselect = () => {}

export const reselect = createSelector(
  (state: any) => state.order,
  (state: any, props: any) => props.name,
  (order, name) => {
    return {
      ...order[name],
    }
  }
)
