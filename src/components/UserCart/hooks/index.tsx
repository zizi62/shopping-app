import { getCartTotal } from "helpers/getCartTotal"
import { getUpdatedCartItems } from "helpers/getUpdatedCartItems"
import { useEffect } from "react"
import { useSelector } from "react-redux"

import { clearCart } from "requests/cartRequest"
import { useAppDispatch, RootState } from "store"

import { getCartItems } from "store/userCart"

export const useUserCart = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  const deleteAllItems = () => {
    dispatch(clearCart)
    dispatch(getCartItems())
  }

  const items = useSelector((state: RootState) => state.userCart.items) || []
  const products = useSelector((state: RootState) => state.productsList.products)

  const updatedItems = getUpdatedCartItems(items, products)

  const total = getCartTotal(updatedItems)
  
  return {
    items: updatedItems,
    total,
    deleteAllItems,
  }
}