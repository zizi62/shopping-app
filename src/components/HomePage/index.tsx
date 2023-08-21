import Button from 'components/Button'
import { useHomePage } from './hooks'

import {
  Wrapper,
  ButtonsBlock,
  Title
} from './styles'

const HomePage = () => {
  const {
    adminClick,
    customerClick,
  } = useHomePage()

  return (
    <Wrapper>
      <Title>Who are you?</Title>
      <ButtonsBlock>
        <Button
          onClick={adminClick}
          title='Admin'
        />
        <Button
          onClick={customerClick}
          title='Customer'
        />
      </ButtonsBlock>
    </Wrapper>
  )
}

export default HomePage