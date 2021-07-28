import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import contactInfo from "../../site/settings/contact_info.json"
import { GatsbyImage } from "gatsby-plugin-image"

const OurFaculty = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  if (data.facultyLeadership.edges.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>No faculty member posts found.</p>
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

          <FacultyGrid>
            {data.facultyLeadership.edges?.map(facultyLeadershipData => {
              const leadershipQuery =
                facultyLeadershipData.node.childrenMarkdownRemark[0]
              // Check to see if a query exists; if it has empty data then don't render it
              if (!leadershipQuery) {
                return null
              }
              //abbreviations for the query routes
              const {
                name,
                role,
                briefdescription,
                bio,
                email,
              } = leadershipQuery.frontmatter
              const slug = leadershipQuery.fields.slug
              const portrait =
                leadershipQuery.frontmatter.portrait.childImageSharp
                  .gatsbyImageData
              return (
                // second query check just in case
                leadershipQuery && (
                  <FacultyPost key={slug}>
                    <GatsbyImage image={portrait} alt={name} />
                    <p>{role}</p>
                    <h3>{name}</h3>
                    <FacultyDescription>
                      <p>{briefdescription}</p>
                    </FacultyDescription>
                    <ReadMore>Read More</ReadMore>
                  </FacultyPost>
                )
              )
            })}
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
            frontmatter {
              name
              role
              briefdescription
              bio
              email
              portrait {
                childImageSharp {
                  gatsbyImageData(
                    width: 550
                    quality: 90
                    placeholder: BLURRED
                    formats: [WEBP]
                    aspectRatio: 1.75
                  )
                }
              }
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
            frontmatter {
              title
              role
              briefdescription
              bio
              email
              portrait {
                childImageSharp {
                  gatsbyImageData(
                    width: 550
                    quality: 90
                    placeholder: BLURRED
                    formats: [WEBP]
                    aspectRatio: 1.75
                  )
                }
              }
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

const FacultyPost = styled.article`
  border: 1px solid black;
  justify-self: center;
  width: 550px;
  height: 580px;
  margin-bottom: 5rem;
  padding: 1.5rem 2rem;
  transition: var(--hover-transition);


  & p {
    padding-top: 1rem;
    letter-spacing: 0.01rem;
  }

  & h6 {
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    transition: var(--hover-transition);

    &:hover {
      color: var(--color-orange);
    }
  }


  &:hover {
    background-color: var(--color-lightgreen);
  }
`

const FacultyDescription = styled.small`
  display: flex;
  justify-content: space-between;

  & p {
    padding-top: 0.75rem;
    font-size: 16px;
    color: #3a3a3a;
  }
`

const ReadMore = styled.button`
  margin-top: 2rem;
  font-family: "Matter-light";
  font-size: 18px;
  border: none;
  background: none;
`
