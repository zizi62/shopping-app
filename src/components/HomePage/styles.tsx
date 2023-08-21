import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`

export const ButtonsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  padding: 20px 0;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }

`

export const Title = styled.h3`
  padding: 20px;
  margin: 0 auto;
`