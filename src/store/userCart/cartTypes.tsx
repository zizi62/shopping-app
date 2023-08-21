export type TItem = {
	id: string,
	title: string,
	price: number,
	amount: number,
}

export type TUserCartState = {
	items: Array<TItem> | [],
	isError: boolean,
	isFetching: boolean,
	total: number,
}
