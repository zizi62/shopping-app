import type { ReactNode } from 'react'
import { useMemo } from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

import { CloseButton, ModalContainer, ModalWindow } from './styles'

type Props = {
  children: ReactNode,
  close: () => void,
  isOpen: boolean,
}

const Modal = ({
  children,
  close,
  isOpen,
}: Props) => {
  const modalRoot = useMemo(
    () => document.getElementById('modal-root'),
    [],
  )

  return (isOpen && modalRoot)
    ? ReactDOM.createPortal(
      <ModalContainer>
        <ModalWindow>
          <CloseButton onClick={close} >
            <AiOutlineClose size={18} cursor={'pointer'} />
          </CloseButton>
          {children}
        </ModalWindow>
      </ModalContainer>
      ,
      modalRoot,
    )
    : null
}

export default Modal