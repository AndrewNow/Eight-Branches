import * as React from "react"
import styled from "styled-components"
import Navbar from "../components/navbar.js"
import Footer from '../components/footer.js'

export const breakpoints = {
  xs: 375,
  s: 576,
  m: 768,
  l: 992,
  xl: 1280,
  xxl: 1400,
}

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
  padding-bottom: 550px;
`

const Main = styled.main`
  margin: 0 auto;
  border-bottom: 1px solid black;
  position: relative;
  z-index: 2;
`

export default Layout
