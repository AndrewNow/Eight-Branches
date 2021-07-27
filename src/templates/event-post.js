import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const EventPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  console.log(previous, next)

  return (
    <Layout title={siteTitle}>
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

          <BlogContent
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>
      </SectionWrapper>
      <ContinueReading>
        <h1>Continue Reading</h1>
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
              {/* check to see if previous exists, if so display previous post */}
              {previous && (
                <BulletinPost key={previous.fields.slug}>
                  <article className="post-list-item">
                    <header>
                      <h6>
                        <Link to={previous.fields.slug} itemProp="url">
                          <span itemProp="headline">
                            {previous.frontmatter.title}
                          </span>
                        </Link>
                      </h6>
                      <Link
                        to={previous.fields.slug}
                        itemProp="url"
                      ></Link>
                      <BulletinDescription>
                        <p>{previous.frontmatter.date}</p>
                      </BulletinDescription>
                    </header>
                  </article>
                </BulletinPost>
              )}
            </li>
            <li>
              {next && (
                <BulletinPost key={next.fields.slug}>
                  <article className="post-list-item">
                    <header>
                      <h6>
                        <Link to={next.fields.slug} itemProp="url">
                          <span itemProp="headline">
                            {next.frontmatter.title}
                          </span>
                        </Link>
                      </h6>
                      <Link to={next.fields.slug} itemProp="url"></Link>
                      <BulletinDescription>
                        <p>{next.frontmatter.date}</p>
                      </BulletinDescription>
                    </header>
                  </article>
                </BulletinPost>
              )}
            </li>
          </ul>
        </nav>
      </ContinueReading>
    </Layout>
  )
}

export default EventPostTemplate

export const pageQuery = graphql`
  query EventPostBySlug(
    $id: String!
    $previousEventId: String
    $nextEventId: String
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
        host
        date(formatString: "DD.MM.YYYY")
        # body
      }
    }
    previous: markdownRemark(id: { eq: $previousEventId }) {
      fields {
        slug
      }
      frontmatter {
        title
        host
        date(formatString: "DD.MM.YYYY")
        # body
      }
    }
    next: markdownRemark(id: { eq: $nextEventId }) {
      fields {
        slug
      }
      frontmatter {
        title
        host
        date(formatString: "DD.MM.YYYY")
        # body
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

  & h1 {
    max-width: 55%;
  }

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
  overflow-x: hidden;

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

  & h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  & a {
    text-decoration: underline;
    font-weight: 800;
    color: var(--color-black);
    transition: ease 0.15s all;
    &:hover {
      color: var(--color-orange);
    }
  }

  & ul,
  ol {
    padding-left: 30vw;
    font-size: 18px;
    line-height: 25px;
    font-family: "Matter-regular";
  }

  & figcaption {
    font-family: "Matter-light";
    letter-spacing: 0.01rem;
    font-style: italic;
    color: #989898;
  }

  & li,
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

    & ol,
    li,
    a,
    em,
    strong,
    code,
    span,
    td,
    tr,
    th,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    div {
      padding-left: 1rem;
    }
  }
`

const ContinueReading = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 15rem;

  & h1 {
    margin: 0 auto;
    margin-bottom: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const BulletinPost = styled.article`
  border-top: 1px solid black;
  justify-self: center;
  width: 550px;
  height: 420px;
  margin-bottom: 5rem;

  & h6 {
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    transition: color ease-in-out 0.15s;

    &:hover {
      color: var(--color-orange);
    }
  }
`

const BulletinDescription = styled.small`
  display: flex;
  justify-content: space-between;

  & p {
    padding-top: 0.75rem;
    font-size: 16px;
    color: #3a3a3a;
  }
`