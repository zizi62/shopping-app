export type TProduct = {
	img?: string
	id: string,
	title: string,
	description: string,
	price: number,
}

export type TNewProduct = {
	id?: string,
	img?: string
	title: string,
	description: string,
	price: number,
}

export type TProductsState = {
	products: Array<TProduct> | [],
	product: TProduct | null,
	isError: boolean,
	isFetching: boolean,
}



