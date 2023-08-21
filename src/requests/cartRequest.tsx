import { TItem } from "store/userCart/cartTypes"

export const saveCart = (items: Array<TItem>) => {
  localStorage.setItem('cart', JSON.stringify(items))
}

export const getCart = () => {
  const items = localStorage.getItem('cart')
  return items && JSON.parse(items)
}

export const clearCart = () => {
  localStorage.removeItem('cart')
}
