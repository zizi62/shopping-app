import { TItem } from 'store/userCart/cartTypes'
import Button from 'components/Button'

import { useUserCart } from './hooks'
import {
  Wrapper,
  Title,
  ItemsBlock,
  Total
} from './styled'

import CartItem from './CartItem'

const UserCart = () => {
  const {
    items,
    total,
    deleteAllItems,
  } = useUserCart()

  return (
    <Wrapper>
      <Title>Cart</Title>
      <ItemsBlock>
        {items.map((item: TItem) => <CartItem key={item.id} item={item} />)}
      </ItemsBlock>
      <Total>
        Total: {total}$.
      </Total>
      {items.length > 0 &&
        <Button
          onClick={deleteAllItems}
          title='Clear cart'
        />}
    </Wrapper>
  )
}

export default UserCart