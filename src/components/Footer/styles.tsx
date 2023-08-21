import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${color.darkGray}; 
  color: ${color.white};
  padding: 20px; 
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  font-size: 12px; 
`

