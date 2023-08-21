import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${color.lightGrey};
  border: 1px solid #ccc;
  border-radius: 10px;
  min-width: 500px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export const Title = styled.h3`
  margin: 0 auto;  
`

export const ItemsBlock = styled.div`
   margin-bottom: 15px; 
`

export const Total = styled.p`
  margin-bottom: 15px;
  font-weight: bold;
  text-align: right; 
`
