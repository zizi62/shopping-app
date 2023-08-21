import Product from './Product'
import { TProduct } from '../../store/products/productsTypes'
import { useProducts } from './hooks'

import { AddNew, IconsBlock, ProductsContainer, Wrapper } from './styles'
import BackButton from '../BackButton'
import { AiOutlineFileAdd } from 'react-icons/ai'
import useEdit from '../../hooks/useEdit'
import Modal from '../Modal'
import ProductForm from '../ProductForm'
import ErrorMessage from '../ErrorMessage'
import Loader from '../Loader'

const Products = () => {

  const {
    isAdministrator,
    products,
    isFetching,
    isError,
  } = useProducts()
  const {
    openEditForm,
    closeEditForm,
    isEdit,
  } = useEdit()

  return (
    <Wrapper>
      {isEdit && <Modal
        isOpen={isEdit}
        close={closeEditForm}
      >
        <ProductForm />
      </Modal>}
      <IconsBlock>
        <BackButton />
        {isAdministrator &&
          (<AddNew onClick={openEditForm}>
            <AiOutlineFileAdd size={44} />
          </AddNew>)}
      </IconsBlock>
      {isError ?
        <ErrorMessage />
        : (
          <ProductsContainer>
            {isFetching && <Loader />}
            {products.length > 0 && products.map((product: TProduct) => <Product key={product.id} product={product} />)}
          </ProductsContainer>
        )}
    </Wrapper>
  )
}

export default Products