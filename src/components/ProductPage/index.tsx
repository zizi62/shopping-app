import { useParams } from 'react-router-dom'

import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import ProductForm from 'components/ProductForm';
import useEdit from 'hooks/useEdit';

import { useProductPage } from './hooks';
import {
  Wrapper,
  ProductBlock,
  ProductImg,
  Title,
  Description,
  Price,
  ButtonsBlock
} from './styles';

const ProductPage = () => {
  const { id } = useParams();

  const {
    isFetching,
    addItem,
    deleteProduct,
    img,
    product,
    isAdministrator,
  } = useProductPage(String(id))

  const {
    openEditForm,
    closeEditForm,
    isEdit,
  } = useEdit()

  return (
    <Wrapper>
      <Modal
        isOpen={isEdit}
        close={closeEditForm}
      >
        {product && <ProductForm product={product} />}
      </Modal>
      <BackButton />
      {isFetching && <Loader />}
      <ProductBlock>
        <ProductImg src={img} alt='Product image' />
        <Title>{product?.title}</Title>
        <Description>{product?.description}</Description>
        <Price>Price: {product?.price}$</Price>
      </ProductBlock>
      {isAdministrator
        ? (
          <ButtonsBlock>
            <Button title='edit' onClick={openEditForm} />
            <Button title='delete' onClick={deleteProduct} />
          </ButtonsBlock>
        )
        : (
          <Button title='add to cart' onClick={addItem} />
        )}
    </Wrapper>
  )
}

export default ProductPage