import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const Wrapper = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
`
export const Price = styled.p`
  font-size: 16px;
  color: ${color.orange};
  margin-right: 10px;
  min-width: 40px;
  text-align: end;
`

export const Amount = styled.p`
  font-size: 16px;
  margin-right: 10px;
`

export const CustomLink = styled(Link)`
  font-size: 16px;
  flex: 1;
  font-weight: bold;
  margin-right: 10px;
  text-decoration: none;
  color: ${color.darkGray};

  &:visited {
    text-decoration: none;
    color: ${color.darkGray};
  }
`