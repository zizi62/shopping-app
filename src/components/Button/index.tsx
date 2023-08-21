import { ButtonBlock } from './styles'

type TButtonPrors = {
  title: string,
  onClick: () => void,
  isDisabled?: boolean,
}

const Button = (props: TButtonPrors) => {
  const { title, onClick, isDisabled } = props

  return (
    <ButtonBlock onClick={onClick} isDisabled={isDisabled}>
      {title}
    </ButtonBlock>
  )
}

export default Button