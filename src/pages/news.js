import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import contactInfo from "../../site/settings/contact_info.json"
import { GatsbyImage } from "gatsby-plugin-image"

const News = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <UpcomingEventsWrapper>
        <SectionWrapper>
          <h2>Upcoming Events</h2>
        </SectionWrapper>
      </UpcomingEventsWrapper>

      <BulletinWrapper>
        <SectionWrapper>
          <BulletinHeader>
            <h2>Bulletin Board</h2>
            <h6>
              Stay up to date with our school and learn more about TCM
              (traditional Chinese medicine). The bulletin board is the best
              place to find updates.
            </h6>
          </BulletinHeader>
          <Bulletingrid style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <BulletinPost key={post.fields.slug}>
                  <article className="post-list-item">
                    <header>
                      <h6>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h6>
                      <Link to={post.fields.slug} itemProp="url">
                        <GatsbyImage
                          image={
                            post.frontmatter.thumbnail.childImageSharp
                              .gatsbyImageData
                          }
                          alt={post.excerpt}
                        />
                      </Link>
                      <BulletinDescription>
                        <p>{post.frontmatter.readtime} minute read</p>
                        <p>{post.frontmatter.date}</p>
                      </BulletinDescription>
                    </header>
                  </article>
                </BulletinPost>
              )
            })}
          </Bulletingrid>
        </SectionWrapper>
      </BulletinWrapper>
    </Layout>
  )
}

export default News

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
          readtime
          thumbnail {
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
`

const SectionWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`
const BulletinWrapper = styled.div`
  width: 100%;
  top: 65vh;
  padding-top: 5rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-white);
  margin: 0 auto;
`

const UpcomingEventsWrapper = styled.div`
  background-color: var(--color-darkgreen);
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  padding-top: 10rem;

  & h2 {
    color: var(--color-white);
    padding-bottom: 5rem;
  }
`

const Bulletingrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;
`

const BulletinHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1em;
  /* margin-top: 15rem; */
  margin-bottom: 7rem;

  & h6 {
    width: 70%;
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
