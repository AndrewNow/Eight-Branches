import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import contactInfo from "../../site/settings/contact_info.json"

import FacultyLeadershipQuery from "../components/Faculty/facultyLeadershipQuery"
import FacultyInstructorQuery from "../components/Faculty/facultyInstructorQuery"

const OurFaculty = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Our Faculty`


  if (data.facultyLeadership.edges.length === 0) {
    return (
      <Layout title={siteTitle}>
        <Seo title="All posts" />
        <p>No leadership faculty member posts found.</p>
      </Layout>
    )
  }
  if (data.facultyInstructor.edges.length === 0) {
    return (
      <Layout title={siteTitle}>
        <Seo title="All posts" />
        <p>No instructor faculty member posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Our Faculty" />
      <FacultyWrapper>
        <SectionWrapper>
          <FacultyHeader>
            <h1>Meet Our Faculty</h1>
            <h6>
              Eight Branches’ greatest asset is our faculty, which is comprised
              of practicing health professionals who share the benefits of their
              expertise with our students.
            </h6>
          </FacultyHeader>

          <h2>Leadership</h2>
          <FacultyGrid>
            <FacultyLeadershipQuery />
          </FacultyGrid>
          <h2>Instructors</h2>
          <FacultyGrid>

          <FacultyInstructorQuery />
          </FacultyGrid>
        </SectionWrapper>
      </FacultyWrapper>
      {/* <Footer /> */}
    </Layout>
  )
}

export default OurFaculty

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    facultyLeadership: allFile(
      filter: {
        sourceInstanceName: { eq: "facultyLeadership" }
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
    facultyInstructor: allFile(
      filter: {
        sourceInstanceName: { eq: "facultyInstructor" }
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
const SectionWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  & h2 {
    padding-bottom: 5rem;
  }
  padding-bottom: 15rem;
`

const FacultyWrapper = styled.div`
  width: 100%;
  padding-top: 15rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-white);
  margin: 0 auto;
`

const FacultyHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10rem;

  & h1 {
    padding-bottom: 2rem;
  }

  & h6 {
    width: 60%;
  }
`

const FacultyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;
`