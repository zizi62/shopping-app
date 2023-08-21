import { administrator } from "config/index";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, RootState } from "store";
import { getProductsList } from "store/products";

export const useProducts = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const products = useSelector((state: RootState) => state.productsList.products)
  const isFetching = useSelector((state: RootState) => state.productsList.isFetching)
  const isError = useSelector((state: RootState) => state.productsList.isError)
  const user = useSelector((state: RootState) => state.userType.userType)

  useEffect(() => {
    if (!user) navigate('/')
    dispatch(getProductsList())
  }, [dispatch, navigate, user])

  const isAdministrator = user === administrator

  return {
    isAdministrator,
    products,
    isFetching,
    isError,
  }
}