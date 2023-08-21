import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  background-color: ${color.white};
`

export const ProductImg = styled.img`
  max-width: 100px;
  height: auto;
  margin-bottom: 10px;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Price = styled.p`
  font-size: 16px;
  color: ${color.orange};
`
export const IconsBlock = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 8px;
  right: 8px;
`

export const ButtonsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 8px;
  justify-content: space-between;
`