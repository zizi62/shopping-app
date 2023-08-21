import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const ButtonBlock = styled.button`
  min-width: 100px;
  display: flex;
  padding: 10px 12px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${color.white};
  color: ${color.darkGray};
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
`
