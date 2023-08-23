import React, { useState } from 'react'

import { TNewProduct, TProduct } from 'store/products/productsTypes'
import { updateOneProduct, addNewProduct, getProductsList } from 'store/products'
import { useAppDispatch } from 'store/index'
import { defaultValues } from '../config'

export const useProductForm = (product?: TProduct) => {

  const dispatch = useAppDispatch()
  const defaultProductValues = {
    img: product?.img || '',
    title: product?.title || '',
    description: product?.description || '',
    price: product?.price || 0,
    id: product?.id
  }
  const [formValues, setFormValues] = useState<TNewProduct>(defaultProductValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormValues({
      ...formValues,
      [id]: value,
    })
  }
  const submitFunc = product ? updateOneProduct : addNewProduct

  const isFieldsFilled =
    formValues.description
    && (formValues.price > 0)
    && formValues.title

  const handleSubmit = () => {
    if (!isFieldsFilled) return
    setFormValues(defaultValues)
    dispatch(submitFunc(formValues))
      .then(() => dispatch(getProductsList()))
  }

  return {
    isFieldsFilled,
    handleSubmit,
    handleChange,
    formValues,
  }
}