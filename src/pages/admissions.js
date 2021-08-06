import React from 'react'
import { graphql, Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import breakpoints from "../components/breakpoints"
// import { motion } from "framer-motion"

const Admissions = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Admissions`
  
  return (
    <Layout title={siteTitle}>
      <Seo title="Admissions" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Admissions