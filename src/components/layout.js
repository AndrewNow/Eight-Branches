import * as React from "react"
import styled from "styled-components"
import Navbar from "../components/navbar.js"
import Footer from '../components/footer.js'

const Layout = ({ children }) => {
  return (
    <GlobalWrapper>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </GlobalWrapper>
  )
}

const GlobalWrapper = styled.div`
  margin: 0 auto;
`

const Main = styled.main`
  margin: 0 auto;
`

export default Layout
