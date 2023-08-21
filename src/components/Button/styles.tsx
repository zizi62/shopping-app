import styled from 'styled-components/macro'
import { color } from 'config/stylesConst'

type TButtonBlock = {
  isDisabled?: boolean
}

export const ButtonBlock = styled.button<TButtonBlock>`
  display: inline-block;
  min-width: 120px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${color.darkGray};
  color: ${color.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  ${({ isDisabled }) => (isDisabled
    ? `cursor: none;
    `
    : '')}
  
`

export const Title = styled.p`
  font-size: 12px; 
`