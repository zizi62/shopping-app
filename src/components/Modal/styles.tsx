import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.cover};
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWindow = styled.div`
  position: relative;  
  max-width: 90%;
  background-color: ${color.white};
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 30px;
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: 1000;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Container = styled.div`

`
