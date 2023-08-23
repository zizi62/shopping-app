import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { administrator, customer } from 'config'
import { useAppDispatch } from 'store/index'
import { deleteUser, saveUser } from 'store/userType'
import { clearCart } from 'store/userCart'
import { clearProducts } from 'store/products'

export const useHomePage = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearCart())
    dispatch(deleteUser())
    dispatch(clearProducts())
  }, [dispatch])

  const navigate = useNavigate()

  const adminClick = () => {
    dispatch(saveUser(administrator))
      .then(() => navigate('products'))
  }

  const customerClick = () => {
    dispatch(saveUser(customer))
      .then(() => navigate('products'))
  }

  return {
    adminClick,
    customerClick,
  }
}