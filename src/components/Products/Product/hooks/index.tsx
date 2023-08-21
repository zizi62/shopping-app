import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { administrator, noImg } from 'config'
import { useAppDispatch, RootState } from 'store'
import { deleteOneProduct, getProductsList } from 'store/products'
import { TProduct } from 'store/products/productsTypes'
import { addCartItem } from 'store/userCart'

export const useProduct = (product: TProduct) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClick = () => navigate(`${product.id}`)

  const user = useSelector((state: RootState) => state.userType.userType)

  const isAdministrator = user === administrator

  const img = product?.img || noImg

  const deleteProduct = () => {
    dispatch(deleteOneProduct(product.id))
      .then(() => dispatch(getProductsList()))
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
    handleClick,
    isAdministrator,
    deleteProduct,
    addItem,
    img,
  }
}