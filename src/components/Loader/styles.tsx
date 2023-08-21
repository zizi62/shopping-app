import styled from 'styled-components/macro'
import { color } from 'config/stylesConst'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.cover};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 36px; 
`

