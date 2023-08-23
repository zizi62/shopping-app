import { administrator } from "config/index"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useAppDispatch, RootState } from "store"
import { getProductsList } from "store/products"
import { getUser } from "store/userType"

export const useProducts = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const products = useSelector((state: RootState) => state.productsList.products)
  const isFetching = useSelector((state: RootState) => state.productsList.isFetching)
  const isError = useSelector((state: RootState) => state.productsList.isError)
  const user = useSelector((state: RootState) => state.userType.userType)

  useEffect(() => {
    if (products.length) return
    if (!user) navigate('/')
    dispatch(getUser())
    dispatch(getProductsList())
  }, [dispatch])

  const isAdministrator = user === administrator

  return {
    isAdministrator,
    products,
    isFetching,
    isError,
  }
}