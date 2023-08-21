import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
`

export const ProductBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border: 2px solid #ccc;
  padding: 20px;
  margin: 20px auto;
`

export const ProductImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  max-height: 400px;
`

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Price = styled.p`
  font-size: 20px;
  color: ${color.orange};;
`
export const ButtonsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin: 0 auto;
  margin-top: 8px;
  justify-content: space-between;
`