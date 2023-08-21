import { useNavigate } from 'react-router-dom'
import { FaBackspace } from 'react-icons/fa'

import { ButtonBlock } from './styles'

const BackButton = () => {
  const navigate = useNavigate()

  const onClick = () => navigate(-1)

  return (
    <ButtonBlock onClick={onClick}>
      <FaBackspace size={24} /> Back
    </ButtonBlock>
  )
}

export default BackButton