import { useEffect } from "react"
import { useSelector } from "react-redux"

import { clearCart } from "requests/cartRequest"
import { useAppDispatch, RootState } from "store"
import { getCartItems, setTotal } from "store/userCart"

export const useUserCart = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch
    dispatch(getCartItems())
  }, [dispatch])

  const deleteAllItems = () => {
    if (items.length === 0) return
    dispatch(clearCart)
    dispatch(getCartItems())
  }

  const items = useSelector((state: RootState) => state.userCart.items) || []

  const total: number = items.length > 0
    // @ts-expect-error: Unreachable code error
    ? items.reduce((sum: number, currentValue: TItem) => {
      return sum + currentValue.price * currentValue.amount;
    }, 0)
    : 0

  useEffect(() => {
    dispatch(setTotal({ total }))
  }, [dispatch, total])

  return {
    items,
    total,
    deleteAllItems,
  }
}