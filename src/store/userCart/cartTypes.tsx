export type TItem = {
	id: string,
	title: string,
	price: number,
	amount: number,
	availability?: string
}

export type TUserCartState = {
	items: Array<TItem> | [],
	isError: boolean,
	isFetching: boolean,
	total: number,
}
