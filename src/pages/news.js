import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import contactInfo from "../../site/settings/contact_info.json"
import { GatsbyImage } from "gatsby-plugin-image"
import Footer from '../components/footer'

const News = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  if (data.blog.edges.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>No bulletin board posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <UpcomingEventsWrapper>
        <SectionWrapper>
          <h2>Upcoming Events</h2>

          <EventWrapper>
            {data.events.edges?.map(eventData => {
              const eventDataQuery = eventData.node.childrenMarkdownRemark[0]
              if (!eventDataQuery) {
                return null
              }
              const { title, date, host } = eventDataQuery.frontmatter
              const slug = eventDataQuery.fields.slug

              return (
                eventDataQuery && (
                  <Event>
                    <EventLink to={slug} itemProp="url">
                      <h4 key={slug}>{title}</h4>
                    </EventLink>
                    <p>With {host}</p>
                    <p>{date}</p>
                    <SignUpLink to={slug} itemProp="url">
                      <p>Sign up here</p>
                    </SignUpLink>
                  </Event>
                )
              )
            })}
          </EventWrapper>
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

          <Bulletingrid>
            {data.blog.edges?.map(blogData => {
              const blogDataQuery = blogData.node.childrenMarkdownRemark[0]
              // Check to see if a query exists; if it has empty data then don't render it
              if (!blogDataQuery) {
                return null
              }
              //abbreviations for the query routes
              const { title, date, readtime } = blogDataQuery.frontmatter
              const slug = blogDataQuery.fields.slug
              const entryTitle = title || slug
              const thumbnail =
                blogDataQuery.frontmatter.thumbnail.childImageSharp
                  .gatsbyImageData
              return (
                // second query check just in case
                blogDataQuery && (
                  <BulletinPost key={slug}>
                    <h6>
                      <Link to={slug} itemProp="url">
                        <span itemProp="headline">{entryTitle}</span>
                      </Link>
                    </h6>
                    <Link to={slug} itemProp="url">
                      <GatsbyImage image={thumbnail} alt={entryTitle} />
                    </Link>
                    <BulletinDescription>
                      <p>{readtime} minute read</p>
                      <p>{date}</p>
                    </BulletinDescription>
                  </BulletinPost>
                )
              )
            })}
          </Bulletingrid>
        </SectionWrapper>
      </BulletinWrapper>
      {/* <Footer /> */}
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
    blog: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
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
              description
              date(formatString: "DD.MM.YYYY", locale: "est")
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
    }
    events: allFile(
      filter: {
        sourceInstanceName: { eq: "events" }
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
              host
              date(formatString: "dddd, MMMM Do (hh:mma)", locale: "est")
            }
          }
        }
      }
    }
  }
`

const UpcomingEventsWrapper = styled.div`
  background-color: var(--color-darkgreen);
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  padding-top: 15rem;
  padding-bottom: 10rem;

  & h2 {
    color: var(--color-white);
    padding-bottom: 5rem;
  }
`

const SectionWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const EventWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;

  & article:not(:first-child) {
    border-left: 1px solid var(--color-white);
    padding-left: 5rem;
  }
`

const Event = styled.article`
  max-width: 33%;
  color: var(--color-white);
  margin-bottom: 5rem;

  & p {
    padding-bottom: 1rem;
    font-family: "Matter-light";
  }
`
const EventLink = styled(Link)`
  text-decoration: none;
  
  & h4 {
    color: var(--color-white);
    padding-bottom: 0.5rem;
  }
`

const SignUpLink = styled(Link)`
  text-decoration: none;
  & p {
    font-family: "Matter-light";
    padding-bottom: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--color-white);
    border: 1px solid var(--color-white);
    border-radius: 10px;
    width: 160px;
    height: 40px;
    transition: var(--hover-transition);

    &:hover {
      background-color: var(--color-white);
      color: var(--color-darkgreen);
    }
  }
`

const BulletinWrapper = styled.div`
  width: 100%;
  top: 70vh;
  padding-top: 5rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-white);
  margin: 0 auto;
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
    transition: var(--hover-transition);

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
