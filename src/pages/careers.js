import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import breakpoints from "../components/breakpoints"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Careers = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Work at Eight Branches`
  return (
    <Layout>
      <Seo
        title={siteTitle}
        description="Interested in teaching or volunteering at Eight Branches? Send us your resume!"
      />
      <Wrapper>
        <Header>
          <h1>Careers</h1>
          <p>
            Interested in working at Eight Branches? Explore our open positions below!
          </p>
        </Header>
        <Jobs>
          <h2>Current Openings</h2>
          {data.careers.edges.length > 0 ? (
            <Job>
              {data.careers.edges?.map((job, idx) => {
                const careerDataQuery = job.node.childrenMarkdownRemark[0]
                if (!careerDataQuery) {
                  return null
                }
                const { title } = careerDataQuery.frontmatter
                const slug = careerDataQuery.fields.slug

                return (
                  <span key={idx}>
                    <Link to={slug} itemProp="url">
                      <h4>{title}</h4>
                    </Link>
                  </span>
                )
              })}
            </Job>
          ) : (
            <p>No job listings available at the moment!</p>
          )}
        </Jobs>
      </Wrapper>
    </Layout>
  )
}

export default Careers

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    careers: allFile(
      filter: {
        sourceInstanceName: { eq: "careers" }
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
              date
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  background: var(--color-lightestbeige);
`

const Header = styled.header`
  width: 50%;
  padding-top: 20vh;
  padding-bottom: 5vh;
  margin: 0 auto;
  text-align: center;
  h1 {
    margin-bottom: 1rem;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 80%;
    text-align: left;
  }
`

const Jobs = styled.section`
  width: 60%;
  margin: 5rem auto;
  margin-bottom: 0;
  padding-bottom: 20vh;
  position: relative;
  h2 {
    color: var(--color-darkgreen);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-brown);
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin: 2.5rem auto;
    margin-bottom: 0rem;
  }
`

const Job = styled.div`
  margin: 1rem 0;

  span {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    transition: var(--hover-transition);
    border-radius: 5px;
    cursor: pointer;
    a {
      padding: 1rem 0;
      width: 100%;
      text-decoration: none;
      color: var(--color-black) !important;
      transition: var(--hover-transition);
      :visited {
        color: var(--color-charcoal);
      }
      :hover {
        color: var(--color-orange) !important;
        text-decoration: underline;
      }
    }
    h4 {
      transition: var(--hover-transition);
    }
    :hover {
      background: #efe9dd70;
      border-radius: 5px;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    span {
      padding: 0 1rem;
    }
  }
`
