import { administrator, noImg } from 'config'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, RootState } from 'store'
import { getProduct, deleteOneProduct, getProductsList, clearProducts } from 'store/products'
import { addCartItem } from 'store/userCart'

export const useProductPage = (id: string) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const product = useSelector((state: RootState) => state.productsList.product)
  const isFetching = useSelector((state: RootState) => state.productsList.isFetching)
  const user = useSelector((state: RootState) => state.userType.userType)

  useEffect(() => {
    if (id === product?.id) return
    if (!user) navigate('/')
    clearProducts()
    dispatch(getProduct(id))
  }, [dispatch, id])

  const isAdministrator = user === administrator

  const img = product?.img || noImg

  const deleteProduct = () => {
    if (!product) return
    dispatch(deleteOneProduct(product?.id))
      .then(() => dispatch(getProductsList()))
    navigate('/products')
  }

  const addItem = () => {
    if (!product) return
    dispatch(addCartItem({
      title: product.title,
      id: product.id,
      price: product.price,
      amount: 1,
    }))
  }

  return {
    isFetching,
    user,
    addItem,
    deleteProduct,
    isAdministrator,
    img,
    product,
  }
}