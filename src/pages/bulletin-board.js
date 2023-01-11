import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import breakpoints from "../components/breakpoints"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const News = ({ data, location }) => {
  console.log(data)

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

  console.log(visiblePosts)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="Upcoming Events"
        description="See upcoming Workshops, Webinars and CEU opportunities at Eight Branches.
Interested in hosting one? Contact us as well."
        keywords={[
          `Acupuncture learn online`,
          `Acupuncture school online`,
          `Acupuncture blog online`,
          `learn TCM online`,
          `chinese medicine blog`,
          `learn TCM toronto`,
          `Eight Branches bulletin board`,
          `Eight Branches news`,
          `Eight Branches updates`,
          `Eight Branches events`,
          `Eight Branches rsvp`,
        ]}
      />
      {data.events.edges.length > 0 ? (
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

                const weekday = [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ]
                const months = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ]

                // get weekday
                const formattedDay = new Date(date)
                let day = weekday[formattedDay.getDay()]

                // get month
                const d = new Date(date)
                let month = months[d.getMonth()]

                // get day
                const dd = new Date(date)
                let dayOfTheMonth = dd.getDate()

                // get time in hh:mm
                let time = new Date(date)
                time = time.toLocaleTimeString("en-US", {
                  timeZone: "America/Toronto",
                  timeZoneName: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })

                let suffix = "th"
                if (
                  dayOfTheMonth === 1 ||
                  dayOfTheMonth === 21 ||
                  dayOfTheMonth === 31
                ) {
                  suffix = "st"
                } else if (dayOfTheMonth === 2 || dayOfTheMonth === 22) {
                  suffix = "nd"
                } else if (dayOfTheMonth === 3 || dayOfTheMonth === 23) {
                  suffix = "rd"
                } else if (
                  (dayOfTheMonth >= 4 && dayOfTheMonth < 21) ||
                  (dayOfTheMonth >= 24 && dayOfTheMonth < 31)
                ) {
                  suffix = "th"
                }

                // format into (Day, Month Dayofthemonth Time Locale)
                const formattedEventDate =
                  `${day}, ` +
                  `${month} ` +
                  `${dayOfTheMonth}` +
                  suffix +
                  ` (${time})`

                return (
                  eventDataQuery && (
                    <Event key={slug}>
                      <div>
                        <EventLink to={slug} itemProp="url">
                          <h4>{title}</h4>
                        </EventLink>
                        <h6>Hosted by: {host}</h6>
                        <h6>
                          {!formattedEventDate ||
                          formattedEventDate.includes("undefined")
                            ? "Date TBD"
                            : `${formattedEventDate}`}
                        </h6>
                      </div>
                      <SignUpLink to={slug} itemProp="url">
                        View details
                      </SignUpLink>
                    </Event>
                  )
                )
              })}
            </EventWrapper>
          </SectionWrapper>
        </UpcomingEventsWrapper>
      ) : (
        <NoEventsFallback />
      )}

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
              // const thumbnail = getImage(blogDataQuery.frontmatter.thumbnail)
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
                      {/* {thumbnail && ( */}
                        {/* // <GatsbyImage image={thumbnail} alt={entryTitle} /> */}
                      {/* )} */}
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
          {data.blog.edges?.length > 6 && (
            <>
              {visiblePosts >= data.blog.edges?.length ? (
                // if user hits end of data.blog.edges array, button closes posts
                <LoadMore>
                  <EventsButton onClick={handleClosePosts}>
                    <p>Show less posts</p>
                  </EventsButton>
                </LoadMore>
              ) : (
                // Button to open more posts
                <LoadMore>
                  <EventsButton onClick={handleLoadNewPosts}>
                    <p>Show more posts</p>
                  </EventsButton>
                </LoadMore>
              )}
            </>
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
              # thumbnail {
              #   childImageSharp {
              #     gatsbyImageData(
              #       width: 550
              #       quality: 90
              #       placeholder: BLURRED
              #       formats: [AUTO, WEBP, AVIF]
              #       aspectRatio: 1.75
              #     )
              #   }
              # }
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
              date
              # date(formatString: "dddd, MMMM Do (hh:mma) z")
            }
          }
        }
      }
    }
  }
`
const NoEventsFallback = styled.div`
  background-color: white;
  height: 7rem;
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

  h6 {
    :last-child {
      padding-bottom: 0.5rem;
    }
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
    padding-bottom: 0.75rem;
    /* padding-right: 0.5rem; */
  }
`

const SignUpLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  cursor: pointer;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  margin-top: 1rem;
  padding: 0.35rem 1.5rem;
  text-decoration: none;
  font-family: "Matter-regular";

  transition: 0.25s all ease-in-out;
  :hover {
    color: var(--color-darkgreen);
    background-color: var(--color-white);
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
  /* height: 420px; */
  margin-bottom: 5rem;

  & h6 {
    padding-top: 0.75rem;
    margin-bottom: 1rem;
    transition: var(--hover-transition);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    height: 75px;
    width: 85%;
    overflow: hidden;

    &:hover {
      color: var(--color-orange);
    }
  }
  @media (max-width: 1600px) {
    margin-bottom: 4rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: auto;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-bottom: 3rem;
    h6 {
      height: auto;
    }
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
