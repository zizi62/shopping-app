import { administrator } from 'config'
import { getCartTotal } from 'helpers/getCartTotal'
import { getUpdatedCartItems } from 'helpers/getUpdatedCartItems'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch, RootState } from 'store/index'
import { getCartItems } from 'store/userCart'

export const useHeader = () => {
  const dispatch = useAppDispatch()
  const [isCartOpen, setCartOpen] = useState(false)

  const user = useSelector((state: RootState) => state.userType.userType)
  const items = useSelector((state: RootState) => state.userCart.items) || []
  const products = useSelector((state: RootState) => state.productsList.products)

  const isAdministrator = user === administrator

  useEffect(() => {
    if (isAdministrator) return
    dispatch(getCartItems())
  }, [dispatch, isAdministrator, products])

  const updatedItems = getUpdatedCartItems(items, products)

  const total = getCartTotal(updatedItems)

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

