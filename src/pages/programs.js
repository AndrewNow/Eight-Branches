import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import breakpoints from "../components/breakpoints"

const OurPrograms = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Our Programs`


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Our Programs" />
      <SectionWrapper>
        <h1>Our Programs</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6>
      </SectionWrapper>
    </Layout>
  )
}

export default OurPrograms

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    ProgramssImages: allFile(
      filter: { relativeDirectory: { eq: "ProgramsImages" } }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              width: 1525
              aspectRatio: 1.5
              placeholder: BLURRED
              quality: 85
              blurredOptions: { width: 120 }
              webpOptions: { quality: 90 }
              formats: WEBP
            )
          }
        }
      }
    }
  }
`
const SectionWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15rem;

  & h2 {
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    & h2 {
      padding-top: 5rem;
      padding-bottom: 2.5rem;
    }
  }
`

