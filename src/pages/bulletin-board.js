import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import breakpoints from "../components/breakpoints"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const News = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `News`

  // Only display 6 posts at first
  const [visiblePosts, setVisiblePosts] = useState(6)

  // When user clicks on the load more button, load 2 more posts (see: MORE_POSTS)
  const MORE_POSTS = 6
  const handleLoadNewPosts = () =>
    setVisiblePosts(visiblePosts => visiblePosts + MORE_POSTS)
  // When we reach the end of the array, load more posts button becomes a "close posts" button
  const handleClosePosts = () => setVisiblePosts(6)

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
      <Seo title="News" />
      <UpcomingEventsWrapper>
        <SectionWrapper>
          <h2>Upcoming Events</h2>

          <EventWrapper>
            {data.events.edges?.slice(0, 3).map(eventData => {
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
                    <p>Hosted by: {host}</p>
                    <p>{date}</p>
                    <SignUpLink to={slug} itemProp="url">
                      <p>View details</p>
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
            {data.blog.edges?.slice(0, visiblePosts).map(blogData => {
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
          {/* {console.log(data.blog.edges?.length)}
          {console.log(visiblePosts)} */}
          {visiblePosts >= data.blog.edges?.length ? (
            // if user hits end of data.blog.edges array, button closes posts
            <LoadMore>
              <EventsButton onClick={handleClosePosts}>
                <p>View less posts</p>
              </EventsButton>
            </LoadMore>
          ) : (
            // Button to open more posts
            <LoadMore>
              <EventsButton onClick={handleLoadNewPosts}>
                <p>Load more posts</p>
              </EventsButton>
            </LoadMore>
          )}
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
  position: sticky;
  z-index: 1;
  width: 100%;
  top: 0;
  padding-top: 15rem;

  h2 {
    color: var(--color-white);
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    position: relative;
    padding-top: 10rem;

    h2 {
      padding-bottom: 2.5rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    padding-top: 7rem;
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
  article:first-child {
    padding-right: 2.5rem;
  }
  article:not(:first-child) {
    border-left: 1px solid var(--color-white);
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    article:not(:first-child) {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;

    article:not(:first-child) {
      border-top: 1px solid white;
      padding-left: 0rem;
      padding-top: 2.5rem;
      border-left: none;
    }
  }
`

const Event = styled.article`
  min-width: 33%;
  max-width: 40%;
  color: var(--color-white);
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    padding-bottom: 1rem;
    font-family: "Matter-light";
  }

  @media (max-width: ${breakpoints.xxl}px) {
    min-width: 33%;
    max-width: 50%;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 2.5rem;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
  }
`
const EventLink = styled(Link)`
  text-decoration: none;

  h4 {
    color: var(--color-white);
    padding-bottom: 0.5rem;
    /* padding-right: 0.5rem; */
  }
`

const SignUpLink = styled(Link)`
  text-decoration: none;
  p {
    font-size: 18px;
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
  @media (max-width: ${breakpoints.xl}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.m}px) {

  }
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: 1fr;

    column-gap: 0rem;
  }
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

  @media (max-width: ${breakpoints.m}px) {
    gap: 0em;
    display: flex;
    flex-direction: column;
    & h6 {
      width: 100%;
    }
    & h2 {
      padding-bottom: 1rem;
    }
  }
`

const BulletinPost = styled.article`
  border-top: 1px solid black;
  justify-self: center;
  max-width: 550px;
  height: 420px;
  margin-bottom: 5rem;

  & h6 {
    padding-top: 0.75rem;
    margin-bottom: 1rem;
    transition: var(--hover-transition);
    -webkit-line-clamp: 1;
    display: -webkit-box; 
    line-clamp: 1;
    width: 100%;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &:hover {
      color: var(--color-orange);
    }
  }

  @media (max-width: ${breakpoints.xxl}px) {
    margin-bottom: 3.5rem;
    height: auto;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: auto;
    height: auto;
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
      font-size: 12px;
      letter-spacing: 0.02rem;
    }
  }
`

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  padding-top: 1rem;
`

const EventsButton = styled.button`
  background: none;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 0.25rem;
  cursor: pointer;
  margin: 0 auto;
  font-family: "Matter-regular";
  transition: var(--hover-transition);
  p {
    transition: var(--hover-transition);
  }
  :hover {
    p {
      color: var(--color-orange);
    }
    border: 1px solid var(--color-orange);
  }
  p {
    color: black;
    font-size: 18px;
    font-family: "Matter-light";
    padding-bottom: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 160px;
  }
`
