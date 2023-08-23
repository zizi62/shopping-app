import { TItem } from "store/userCart/cartTypes"

export const getCartTotal = (items: Array<TItem>) => {
  return items.length > 0
    ? items.reduce((sum: number, currentValue: TItem) => {
      return sum + currentValue.price * currentValue.amount
    }, 0)
    : 0
}