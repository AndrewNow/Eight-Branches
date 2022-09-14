import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AlumniQuery from "../components/Alumni/alumniQuery"
import breakpoints from "../components/breakpoints"

const Alumni = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Our Alumni`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="Our Faculty"
        keywords={[
          `Eight Branches`,
          `Eight Branches Toronto`,
          `Eight Branches ontario`,
          `Eight Branches faculty`,
          `chinese medicine experts canada`,
          `chinese medicine experts ontario`,
          `chinese medicine experts toronto`,
          `chinese medicine doctor toronto`,
          `chinese medicine doctor ontario`,
          `tcm doctor toronto`,
          `best chinese medicine toronto`,
          `traditional chinese medicine mississauga`,
        ]}
      />
      <AlumniWrapper>
        <SectionWrapper>
          <AlumniHeader>
            <h1>Success Stories</h1>
            <h6>
              Read about our notable alumni and the great things they have gone
              on to do.
            </h6>
          </AlumniHeader>
          {data.alumni.edges.length === 0 ? (
            <p style={{ textAlign: "center" }}>
              Coming soon... No alumni entries to show yet!
            </p>
          ) : (
            <AlumniGrid>
              <AlumniQuery />
            </AlumniGrid>
          )}
        </SectionWrapper>
      </AlumniWrapper>
    </Layout>
  )
}

export default Alumni

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    alumni: allFile(
      filter: {
        sourceInstanceName: { eq: "alumni" }
        internal: { mediaType: { eq: "text/markdown" } }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          childrenMarkdownRemark {
            fields {
              slug
            }
          }
        }
      }
    }
  }
`
const SectionWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15rem;

  h2 {
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 5rem;
    h2 {
      padding-top: 5rem;
      padding-bottom: 2.5rem;
    }
  }
`

const AlumniWrapper = styled.div`
  width: 100%;
  padding-top: 15rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-white);
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;
  }
`

const AlumniHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 5rem;

  h1 {
    padding-bottom: 2rem;
  }

  h6 {
    width: 60%;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 3rem;

    h1 {
      padding-bottom: 1rem;
    }
    h6 {
      width: 100%;
    }
  }
`

const AlumniGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;

  @media (max-width: ${breakpoints.xl}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.s}px) {
    display: inline;
  }
`
