import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './products'
import userTypeReducer from './userType'
import userCartReducer from './userCart'

const store = configureStore({
	reducer: {
		productsList: productsReducer,
		userType: userTypeReducer,
		userCart: userCartReducer,
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
