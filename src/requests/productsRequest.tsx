import { TNewProduct } from "store/products/productsTypes"
import { BASE_URL, headers } from "./config"

export const getProducts = async () => {
	try {
		const response = await fetch(`${BASE_URL}/products`, {
			method: 'GET',
			headers,
		})
		return await response.json()
	} catch (error) {
		throw new Error()
	}
}

export const getSingleProduct = async (id: string) => {
	try {
		const response = await fetch(`${BASE_URL}/products/${id}`, {
			method: 'GET',
			headers,
		})
		return await response.json()
	} catch (error) {
		throw new Error()
	}
}

export const addProduct = async (product: TNewProduct) => {
	try {
		const response = await fetch(`${BASE_URL}/products`, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				title: product.title,
				img: product.img,
				description: product.description,
				price: product.price
			}),
		})
		return await response.json()
	} catch (error) {
		throw new Error()
	}
}

export const updateProduct = async (product: TNewProduct) => {
	try {
		const response = await fetch(`${BASE_URL}/products/${product.id}`, {
			method: 'PUT',
			headers,
			body: JSON.stringify({
				title: product.title,
				img: product.img,
				description: product.description,
				price: product.price
			}),
		})
		return await response.json()
	} catch (error) {
		throw new Error()
	}
}

export const deleteProduct = async (id: string) => {
	try {
		const response = await fetch(`${BASE_URL}/products/${id}`, {
			method: 'DELETE',
			headers,
		})
		return await response.json()
	} catch (error) {
		throw new Error()
	}
}