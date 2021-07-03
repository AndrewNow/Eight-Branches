import * as React from "react"
import styled from "styled-components"
import contactInfo from '../../site/settings/contact_info.json'
import Navbar from '../components/navbar.js'


const Layout = ({ children }) => {

  return (
    <GlobalWrapper>
      <Navbar />
      <Main>{children}</Main>
      <Footer>
        Eight Branches © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
          {contactInfo.phone}
          {contactInfo.address.street}
      </Footer>
    </GlobalWrapper>
  )
}

const GlobalWrapper = styled.div`
  margin: 0 auto;
`

const Main = styled.main`
  margin: 0 auto;
`

const Footer = styled.footer`
  height: 463px;
  background-color: var(--color-beige);
`

export default Layout