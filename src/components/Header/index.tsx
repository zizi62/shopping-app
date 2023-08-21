import { BsFillCartCheckFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'

import Modal from 'components/Modal'
import UserCart from 'components/UserCart'

import { useHeader } from './hooks'
import {
  Title,
  Wrapper,
  IconBlock,
  CartIcon,
  Total
} from './styles'

const Header = () => {
  const {
    total,
    user,
    isCartOpen,
    openCart,
    closeCart,
    isAdministrator
  } = useHeader()

  const icon = isAdministrator
    ? <AiFillSetting size={44} color='white' />
    : <CartIcon>
      <Total>Total: {total}$</Total>
      <BsFillCartCheckFill
        size={44}
        color='white'
        onClick={openCart}
        cursor={'pointer'} />
    </CartIcon>

  return (
    <Wrapper>
      <Modal
        isOpen={isCartOpen}
        close={closeCart}>
        <UserCart />
      </Modal>
      <Title>Shopping</Title>
      <IconBlock>{user && icon}</IconBlock>
    </Wrapper>
  )
}

export default Header

