import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { administrator, customer } from 'config'
import { useAppDispatch } from 'store/index'
import { getUser, saveUser } from 'store/userType'

export const useHomePage = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const navigate = useNavigate();

  const adminClick = () => {
    dispatch(saveUser(administrator))
    navigate('products')
  }
  const customerClick = () => {
    dispatch(saveUser(customer))
    navigate('products')
  }

  return {
    adminClick,
    customerClick,
  }
}