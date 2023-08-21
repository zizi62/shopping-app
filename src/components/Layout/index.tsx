import { Outlet } from 'react-router-dom'

import { Main, Wrapper } from './styles'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout