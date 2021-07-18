import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <SectionWrapper>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <Header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>
              {post.frontmatter.readtime} minute read | {post.frontmatter.date}
            </p>
          </Header>
          <BlogContentHeader>
            <h6>{post.frontmatter.description}</h6>
          </BlogContentHeader>
          <GatsbyImage
            image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            alt={post.frontmatter.description}
          />
          <BlogContent
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />

          <hr />
          <footer></footer>
        </article>
      </SectionWrapper>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
        readtime
        date(formatString: "DD.MM.YYYY")
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 1150
              quality: 90
              placeholder: BLURRED
              formats: [WEBP]
              aspectRatio: 1.75
            )
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

const SectionWrapper = styled.div`
  width: 75%;
  margin: 0 auto;

  & img {
    /* padding-bottom: 5rem; */
    /* padding-top: 5rem; */
  }
`


const Header = styled.div`
  margin-top: 15rem;

  & p {
    color: #989898;
    padding-top: 3rem;
    font-size: 16px;
    line-height: 26px;
  }
`

const BlogContentHeader = styled.section`
  padding-left: 25vw;
  padding-bottom: 5rem;
`

const BlogContent = styled.section`
  padding-top: 5rem;

  & * {
    padding-left: 25vw;
  }

  & img {
    padding-left: 0;
  }


  & p {
    font-size: 24px;
    line-height: 35px;
    font-family: "Matter-light";
  }

  & h2, h3, h4, h5, h6 {
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  & a {
    text-decoration: underline;
    font-weight: 800;
    color: var(--color-black);
    transition: ease .15s all;
    &:hover {
      color: var(--color-orange);
    }
  }


  & ul, ol {
    padding-left: 30vw;
    font-size: 18px;
    line-height: 25px;
    font-family: "Matter-regular";
  }


  & li, a, em, strong, code, span, td, tr, th {
    padding-left: 0;
  }

  & ul {
    & li {
      padding-left: 0rem;
      & ul {
        padding-left: 1rem;
      }
    }
    & p {
      padding-left: 0;
    }
  }

  & blockquote {
    border-left: 2px solid var(--color-darkgreen);
    padding-left: 1rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
    
    & p {
      font-family: "Matter-regular";
      padding-left: 1rem;
      font-size: 36px;
      line-height: 38.5px;
    }

    & ol, li, a, em, strong, code, span, td, tr, th, h1, h2, h3, h4, h5, h6, div {
      padding-left: 1rem;
    }
  }
`