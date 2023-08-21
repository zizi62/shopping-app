import { useAppDispatch } from "store"
import { deleteCartItem, getCartItems } from "store/userCart"

export const useCartItem = (id: string) => {
  const dispatch = useAppDispatch()

  const deleteItem = () => {
    dispatch(deleteCartItem(id))
    dispatch(getCartItems())
  }

  return {
    deleteItem
  }
}