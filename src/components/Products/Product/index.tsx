
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdFindInPage } from 'react-icons/md';

import { TProduct } from '../../../store/products/productsTypes'
import Button from '../../Button';

import { ProductImg, Wrapper, Description, Title, Price, IconsBlock, ButtonsBlock } from './styles'

import Modal from '../../Modal';
import useEdit from '../../../hooks/useEdit';

import ProductForm from '../../ProductForm';
import { useProduct } from './hooks';

type TProductProps = {
  product: TProduct
}

const Product = (props: TProductProps) => {
  const { product } = props

  const {
    openEditForm,
    closeEditForm,
    isEdit,
  } = useEdit()

  const {
    handleClick,
    isAdministrator,
    deleteProduct,
    addItem,
    img,
  } = useProduct(product)

  return (
    <Wrapper>
      <Modal
        isOpen={isEdit}
        close={closeEditForm}
      >
        {product && <ProductForm product={product} />}
      </Modal>
      {isAdministrator &&
        <IconsBlock>
          <MdFindInPage size={20} onClick={handleClick} cursor={'pointer'}>
            <Link to={String(product.id)} />
          </MdFindInPage>
          <AiFillEdit size={20} onClick={openEditForm} cursor={'pointer'} />
          <AiFillDelete size={20} color='red' onClick={deleteProduct} cursor={'pointer'} />
        </IconsBlock>
      }
      <ProductImg src={img} alt='Product image' />
      <Title>{product?.title}</Title>
      <Description>{product?.description}</Description>
      <Price>Price: {product?.price}$</Price>
      {!isAdministrator &&
        <ButtonsBlock>
          <Button title='add to cart' onClick={addItem} />
          <Button title='see more' onClick={handleClick} />
        </ButtonsBlock>}
    </Wrapper>
  )
}

export default Product