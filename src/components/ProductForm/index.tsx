import Button from 'components/Button';
import { TProduct } from 'store/products/productsTypes';

import { useProductForm } from './hooks'

import {
  FormContainer,
  FormGroup,
  FormHeader,
  Input,
  Label,
  TextArea
} from './styles'

type TProductFormProps = {
  product?: TProduct
}

const ProductForm = ({ product }: TProductFormProps) => {
  const {
    isFieldsFilled,
    handleSubmit,
    handleChange,
    formValues,
  } = useProductForm(product)

  return (
    <FormContainer>
      <FormHeader>Edit Product</FormHeader>
      <div>
        <FormGroup>
          <Label htmlFor='img'>Image:</Label>
          <Input
            type='text'
            id='img'
            value={formValues.img}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='title'>Title:</Label>
          <Input
            type='text'
            id='title'
            value={formValues.title}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='description'>Description:</Label>
          <TextArea
            id='description'
            value={formValues.description}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='price'>Price:</Label>
          <Input
            type='number'
            id='price'
            value={formValues.price}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <Button
          isDisabled={!isFieldsFilled}
          title='Save'
          onClick={handleSubmit} />
      </div>
    </FormContainer>
  )
}

export default ProductForm