import { administrator } from "config/index"
import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useAppDispatch, RootState } from "store"
import { getProductsList } from "store/products"

export const useProducts = () => {

  const dispatch = useAppDispatch()

  const products = useSelector((state: RootState) => state.productsList.products)
  const isFetching = useSelector((state: RootState) => state.productsList.isFetching)
  const isError = useSelector((state: RootState) => state.productsList.isError)
  const user = useSelector((state: RootState) => state.userType.userType)

  useEffect(() => {
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