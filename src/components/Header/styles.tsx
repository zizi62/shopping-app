import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const Wrapper = styled.div`
  position:relative;
  width: 100%;
  background-color: ${color.darkGray}; 
  position: fixed;
  color: ${color.white};
  padding: 20px; 
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`

export const Title = styled.h1`
  font-size: 36px; 
`

export const IconBlock = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`

export const CartIcon = styled.div`
  display: flex;
  align-items: center;
  min-width: 60px;

`

export const Total = styled.p`
  font-size: 28px;
  color: ${color.orange};
  font-weight: bold;
  margin-right: 8px;
`