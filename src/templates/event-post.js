import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FooterStamp from "../svg/footerStamp"
import breakpoints from "../components/breakpoints"

const EventPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BgColor>
        <SectionWrapper>
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <Header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
            </Header>
            <BlogContentHeader>
              <h6>{post.frontmatter.description}</h6>
            </BlogContentHeader>

            <BlogContent
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <EndArticle>
              <FooterStamp />
            </EndArticle>
          </article>
        </SectionWrapper>
        <ContinueReading>
          <h1>Other upcoming events</h1>
          <ContinueReadingPostWrapper>
            <div>
              {/* check to see if previous exists, if so display previous post */}
              {previous && (
                <BulletinPost key={previous.fields.slug}>
                  <article>
                    <h6>
                      <Link to={previous.fields.slug} itemProp="url">
                        {previous.frontmatter.title}
                      </Link>
                    </h6>
                    <Link to={previous.fields.slug} itemProp="url"></Link>
                    <BulletinDescription>
                      <p>{previous.frontmatter.date}</p>
                    </BulletinDescription>
                  </article>
                </BulletinPost>
              )}
            </div>
            <div>
              {next && (
                <BulletinPost key={next.fields.slug}>
                  <article>
                    <h6>
                      <Link to={next.fields.slug} itemProp="url">
                        {next.frontmatter.title}
                      </Link>
                    </h6>
                    <Link to={next.fields.slug} itemProp="url"></Link>
                    <BulletinDescription>
                      <p>{next.frontmatter.date}</p>
                    </BulletinDescription>
                  </article>
                </BulletinPost>
              )}
            </div>
          </ContinueReadingPostWrapper>
        </ContinueReading>
      </BgColor>
    </Layout>
  )
}

export default EventPostTemplate

export const pageQuery = graphql`
  query EventPostBySlug($id: String!, $previousId: String, $nextId: String) {
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
        date(formatString: "dddd, MMMM Do (hh:mma)")
        # body
      }
    }
    previous: markdownRemark(id: { eq: $previousId }) {
      fields {
        slug
      }
      frontmatter {
        title
        host
        date(formatString: "dddd, MMMM Do")
        # body
      }
    }
    next: markdownRemark(id: { eq: $nextId }) {
      fields {
        slug
      }
      frontmatter {
        title
        host
        date(formatString: "dddd, MMMM Do")
        # body
      }
    }
  }
`
const BgColor = styled.div`
  background-color: var(--color-white);
  position: relative;
  z-index: 5;
`

const SectionWrapper = styled.div`
  width: 75%;
  margin: 0 auto;

  & img {
    /* padding-bottom: 5rem; */
    /* padding-top: 5rem; */
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`

const Header = styled.div`
  padding-top: 15rem;

  & h1 {
    max-width: 55%;
  }

  & p {
    color: #989898;
    padding-top: 3rem;
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;
    & h1 {
      max-width: 100%;
    }
    & p {
      padding-top: 1rem;
    }
  }
`

const BlogContentHeader = styled.section`
  padding-left: 25vw;
  /* padding-bottom: 5rem; */
  padding-bottom: 2.5rem;

  @media (max-width: ${breakpoints.m}px) {
    padding-left: 0rem;
  }
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
  @media (max-width: ${breakpoints.m}px) {
    padding-top: 0rem;
    * {
      padding-left: 0rem;
    }

    & p {
      font-size: 16px;
      line-height: 27.5px;
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
  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    margin-top: 10rem;

    & h1 {
      width: 90%;
      text-align: center;
    }
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
  @media (max-width: ${breakpoints.m}px) {
    width: auto;
    height: auto;

    & h6 {
      padding-bottom: 0.5rem;
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
  @media (max-width: ${breakpoints.m}px) {
    & p {
      padding-top: 0rem;
    }
  }
`

const EndArticle = styled.div`
  margin-top: 7.5rem;
  margin-bottom: 25rem;
  display: flex;

  & svg {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
    & svg {
      width: 30px;
    }
  }
`

const ContinueReadingPostWrapper = styled.div`
  width: 75%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding-bottom: 10rem;

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`
