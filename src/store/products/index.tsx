import {
	createAsyncThunk,
	createSlice,
	// PayloadAction
} from '@reduxjs/toolkit'

import {
	addProduct,
	deleteProduct,
	getProducts,
	getSingleProduct,
	updateProduct
} from 'requests/productsRequest'

import {
	TNewProduct,
	TProductsState
} from './productsTypes'

const initialState: TProductsState = {
	products: [],
	product: null,
	isFetching: false,
	isError: false,
}

export const getProductsList = createAsyncThunk(
	'products/fetch',
	async () => {
		const data = await getProducts()
		return data
	},
)

export const getProduct = createAsyncThunk(
	'product/fetch',
	async (id: string) => {
		const data = await getSingleProduct(id)
		return data
	},
)

export const addNewProduct = createAsyncThunk(
	'product/add',
	async (product: TNewProduct) => {
		const data = await addProduct(product)
		return data
	}
)

export const deleteOneProduct = createAsyncThunk(
	'product/delete',
	async (productId: string) => {
		const data = await deleteProduct(productId)
		return data
	},
)

export const updateOneProduct = createAsyncThunk(
	'product/update',
	async (product: TNewProduct) => {
		const data = await updateProduct(product)
		return data
	}
)

const ProductsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsList.pending, (state) => {
				state.isFetching = true
			})
			.addCase(getProductsList.fulfilled, (state, action) => {
				state.isError = false
				state.products = action.payload
				state.isFetching = false
			})
			.addCase(getProductsList.rejected, (state) => {
				state.isFetching = false
				state.isError = true

			})
		builder
			.addCase(addNewProduct.fulfilled, (state) => {
				state.isError = false
				state.isFetching = true
			})
			.addCase(addNewProduct.rejected, (state) => {
				state.isFetching = false
				state.isError = true

			})
		builder
			.addCase(getProduct.pending, (state) => {
				state.product = null
				state.isFetching = true
			})
			.addCase(getProduct.fulfilled, (state, action) => {
				state.isError = false
				state.product = action.payload
				state.isFetching = false
			})
			.addCase(getProduct.rejected, (state) => {
				state.isFetching = false
				state.isError = true

			})
		builder
			.addCase(deleteOneProduct.pending, (state) => {
				state.isFetching = true
			})
			.addCase(deleteOneProduct.fulfilled, (state) => {
				state.isError = false
				state.isFetching = false
			})
			.addCase(deleteOneProduct.rejected, (state) => {
				state.isFetching = false
				state.isError = true
			})
	}
})

// export const { } = ProductsSlice.actions

export default ProductsSlice.reducer

