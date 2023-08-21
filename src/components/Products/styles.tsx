import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 10px; 
  padding: 20px; 
  background-color: ${color.lightGrey};
  border-radius: 10px;
`

export const IconsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px;;
`

export const AddNew = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  padding-top: 5px;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }

`