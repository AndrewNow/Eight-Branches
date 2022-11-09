import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import breakpoints from "../components/breakpoints"

const CareerPostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const siteTitle = frontmatter.title || `Title`
  return (
    <Layout>
      <Seo title={siteTitle} description={frontmatter.description} />
      <Wrapper>
        <Header>
          <h1>{frontmatter.title}</h1>
          {frontmatter.shortDescription && (
            <p>{frontmatter.shortDescription}</p>
          )}
        </Header>
        <Content>
          <BlogContent
            dangerouslySetInnerHTML={{ __html: html }}
            itemProp="articleBody"
          />
        </Content>
        <BackLink to="/careers">
          <p>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 0L0.000156403 6L6.00016 12L7.41016 10.59Z"
                fill="black"
              />
            </svg>
            Back to Careers
          </p>
        </BackLink>
      </Wrapper>
    </Layout>
  )
}

export default CareerPostTemplate

export const pageQuery = graphql`
  query CareerPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        shortDescription
        jobType
      }
    }
  }
`

const Wrapper = styled.article`
  background: var(--color-lightestbeige);
  padding-bottom: 5rem;
  position: relative;
`

const Header = styled.header`
  width: 50%;
  padding-top: 20vh;
  padding-bottom: 5vh;
  margin: 0 auto;
  h1 {
    margin-bottom: 1rem;
  }
  p {
    font-family: "Matter-light";
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 80%;
    padding-bottom: 2.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`

const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 2rem 0;
  p {
    display: block;
    padding: 1rem 0;
    font-family: "Matter-light";
    a {
      color: var(--color-orange);
    }
  }
  a {
    color: var(--color-orange);
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 80%;
    padding-top: 0;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`

const BackLink = styled(Link)`
  color: var(--color-black);
  width: 50%;
  margin: 2rem auto;
  display: block;
  text-decoration: none;

  transition: var(--hover-transition);
  p > svg {
    transition: var(--hover-transition);
    margin-right: 0.75rem;
  }
  :hover {
    text-decoration: underline;

    p > svg {
      transform: translateX(-10px);
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
    width: auto;
  }
`

const BlogContent = styled.section`
  /* overflow-x: hidden; */

  // target image padding -- images are nested in p > span > picture > etc.
  p {
    span {
      margin: 1.5em 0;
    }
  }

  img {
    padding-left: 0;
  }

  p {
    font-size: 24px;
    line-height: 35px;
    font-family: "Matter-light";
  }

  h3 {
    font-family: "Matter-light";
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
    font-weight: 800;
    color: var(--color-black);
    transition: ease 0.15s all;
    :hover {
      color: var(--color-orange);
    }
  }

  ul,
  ol {
    font-size: 18px;
    line-height: 25px;
    font-family: "Matter-regular";
  }

  figcaption {
    font-family: "Matter-light";
    letter-spacing: 0.01rem;
    font-style: italic;
    color: #989898;
  }

  li,
  a,
  em,
  strong,
  code,
  span,
  td,
  tr,
  th,
  figcaption {
    padding-left: 0;
  }

  ul {
    li {
      padding-left: 0.5rem;
      ul {
        padding-left: 0.5rem;
      }
    }
    p {
      padding-left: 0;
    }
  }

  @media (max-width: ${breakpoints.xxl}px) {
    p {
      font-size: 20px;
      line-height: 150%;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    // target image padding -- images are nested in p > span > picture > etc.
    p {
      span {
        margin: 1rem 0;
      }
    }

    * {
      padding-left: 0vw;
    }

    p {
      font-size: 18px;
      line-height: 30px;
      font-family: "Matter-light";
    }

    a {
      text-decoration: underline;
      font-weight: 800;
      color: var(--color-black);
      transition: ease 0.15s all;
      &:hover {
        color: var(--color-orange);
      }
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 16px;
      line-height: 27.5px;
    }
    ul,
    ol {
      font-size: 16px;
      line-height: 27.5px;
      font-family: "Matter-regular";
    }
  }
`
