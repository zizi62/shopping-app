import { administrator } from 'config'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch, RootState } from 'store/index'
import { getCartItems } from 'store/userCart'

export const useHeader = () => {
  const dispatch = useAppDispatch()
  const [isCartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  const user = useSelector((state: RootState) => state.userType.userType)

  const items = useSelector((state: RootState) => state.userCart.items) || []

  const total: number = items.length > 0
    // @ts-expect-error: Unreachable code error
    ? items.reduce((sum: number, currentValue: TItem) => {
      return sum + currentValue.price * currentValue.amount
    }, 0)
    : 0

  const isAdministrator = user === administrator

  const openCart = () => setCartOpen(true)
  const closeCart = () => setCartOpen(false)

  return {
    total,
    user,
    isCartOpen,
    openCart,
    closeCart,
    isAdministrator
  }
}

