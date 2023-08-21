import {
	PayloadAction,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit'

import { getCart, saveCart } from 'requests/cartRequest'

import {
	TItem,
	TUserCartState
} from './cartTypes'

const initialState: TUserCartState = {
	items: [],
	isFetching: false,
	isError: false,
	total:0,
}

export const getCartItems = createAsyncThunk(
	'items/fetch',
	() => {
		const data = getCart()
		return data
	}
)

export const addCartItem = createAsyncThunk(
	'items/add',
	(item: TItem) => {
		const data = getCart()
		let newData
		if (data) {
			newData = data.some((product: TItem) => product.id === item.id)
				? data.map((product: TItem) => {
					if (product.id === item.id)
						return {
							...product,
							amount: product.amount + 1
						}
					else {
						return product
					}
				})
				: [...data, item]
		} else {
			newData = [item]
		}
		saveCart(newData)
		return getCart()
	}
)

export const deleteCartItem = createAsyncThunk(
	'item/delete',
	(id: string) => {
		const data = getCart()
		const newData = data.filter((item: TItem) => item.id !== id)
		saveCart(newData)
		return getCart()
	},
)

const userCartSlice = createSlice({
	name: 'userCart',
	initialState,
	reducers: {
		setTotal(state, action: PayloadAction<{ total: number}>) {
			state.total = action.payload.total
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCartItems.fulfilled, (state, action) => {
				state.items = action.payload
			})
		builder
			.addCase(addCartItem.fulfilled, (state, action) => {
				state.items = action.payload
			})
		builder
			.addCase(deleteCartItem.fulfilled, (state, action) => {
				state.items = action.payload
			})
	}
})

export const {setTotal} = userCartSlice.actions

export default userCartSlice.reducer

