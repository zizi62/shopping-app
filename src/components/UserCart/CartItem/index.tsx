import { AiFillDelete } from 'react-icons/ai'

import { TItem } from 'store/userCart/cartTypes'

import { useCartItem } from './hooks'
import { Wrapper, Amount, Price, CustomLink } from './styled'

type TCartItemProps = {
  item: TItem
}
const CartItem = ({ item }: TCartItemProps) => {

  const { id, title, price, amount } = item

  const {
    deleteItem
  } = useCartItem(id)

  return (
    <Wrapper>
      <CustomLink to={`products/${String(id)}`}>
        {title}
      </CustomLink>

      <Amount>{amount} X </Amount>
      <Price>{price}$</Price>
      <AiFillDelete size={20} color='red' onClick={deleteItem} />
    </Wrapper>
  )
}

export default CartItem