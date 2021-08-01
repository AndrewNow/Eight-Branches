import * as React from "react"
import styled from "styled-components"
import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import breakpoints from './breakpoints'


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

  @media (max-width: ${breakpoints.m}px) {
    h1 {
      font-size: 36px;
      line-height: 46px;
    }
    h2 {
      font-size: 30px;
      line-height: 46px;
    }
    h3 {
      font-size: 28px;
      line-height: 36px;
    }
    h4 {
      font-size: 22px;
      line-height: 32px;
    }
    h5 {
      font-size: 20px;
      line-height: 27px;
    }
    h6 {
      font-size: 18px;
      line-height: 28px;
    }
    p {
      font-size: 16px;
      line-height: 27px;
    }
  }
`

const Main = styled.main`
  margin: 0 auto;
  border-bottom: 1px solid black;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 10rem;
  }
`

export default Layout