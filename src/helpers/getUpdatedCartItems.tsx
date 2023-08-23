import { availability } from "config"
import { TProduct } from "store/products/productsTypes"
import { TItem } from "store/userCart/cartTypes"

export const getUpdatedCartItems = (items: Array<TItem>, products: Array<TProduct>) => {
  return items.map((item: TItem) => {
    const curent = products.find((product: TProduct) => product['id'] === item.id)
    if (curent) {
      return {
        ...item,
        price: curent?.price,
        title: curent?.title,
        availability: ''
      }
    } else {
      return {
        ...item,
        price: 0,
        availability: availability.soldOut
      }
    }
  }
)}