import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FooterStamp from "../svg/footerStamp"
import breakpoints from "../components/breakpoints"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const EventPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

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

  const date = post.frontmatter.date

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
  if (dayOfTheMonth === 1 || dayOfTheMonth === 21 || dayOfTheMonth === 31) {
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
    `${day}, ` + `${month} ` + dayOfTheMonth + suffix + ` (${time})`

  const image = getImage(post.frontmatter.thumbnail)

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
              <p>Hosted by: {post.frontmatter.host}</p>
              <p>
                Event date:
                {!post.frontmatter.date ||
                post.frontmatter.date === "Invalid date"
                  ? " Date TBD"
                  : " " + formattedEventDate}
              </p>
              {post.frontmatter.link && (
                <EventLink
                  href={post.frontmatter.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  RSVP Here
                </EventLink>
              )}
            </Header>
            {image && (
              <HeaderImg>
                <GatsbyImage image={image} alt={post.frontmatter.description} />
              </HeaderImg>
            )}
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
          <h1>Other Upcoming Events</h1>
          <ContinueReadingPostWrapper>
            <div>
              {/* check to see if previous exists, if so display previous post */}
              {previous && (
                <BulletinPost key={previous.fields.slug}>
                  <h6>
                    <Link to={previous.fields.slug} itemProp="url">
                      {previous.frontmatter.title}
                    </Link>
                  </h6>
                  <Link to={previous.fields.slug} itemProp="url"></Link>
                  <BulletinDescription>
                    <p>
                      {!previous.frontmatter.date ||
                      previous.frontmatter.date === "Invalid date"
                        ? "Date TBD"
                        : `${previous.frontmatter.date}`}
                    </p>
                  </BulletinDescription>
                </BulletinPost>
              )}
            </div>
            <div>
              {next && (
                <BulletinPost key={next.fields.slug}>
                  <h6>
                    <Link to={next.fields.slug} itemProp="url">
                      {next.frontmatter.title}
                    </Link>
                  </h6>
                  <Link to={next.fields.slug} itemProp="url"></Link>
                  <BulletinDescription>
                    <p>
                      {!next.frontmatter.date ||
                      next.frontmatter.date === "Invalid date"
                        ? "Date TBD"
                        : `${next.frontmatter.date}`}
                    </p>
                  </BulletinDescription>
                </BulletinPost>
              )}
            </div>
          </ContinueReadingPostWrapper>
          <ReturnBack>
            <ProgramLink to="/bulletin-board">
              <LinkWrapper>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.41L3.42 6L8 10.59L6.59 12L0.590001 6L6.59 -1.23266e-07L8 1.41Z"
                    fill="black"
                  />
                </svg>
                <p>Return to Bulletin Board</p>{" "}
              </LinkWrapper>
            </ProgramLink>
          </ReturnBack>
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
        link
        date
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 1150
              quality: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              aspectRatio: 1.75
            )
          }
        }
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

  h1 {
    max-width: 65%;
    padding-bottom: 2rem;
  }

  p {
    color: #989898;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    h1 {
      padding-bottom: 1rem;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    h1 {
      max-width: 80%;
      padding-bottom: 1rem;
    }
    p {
      padding-bottom: 0rem;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    p {
      padding: 0rem;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;

    h1 {
      padding-bottom: 1rem;
      max-width: 100%;
    }
  }
`

const HeaderImg = styled.div`
  margin: 3rem 0;
`

const EventLink = styled.a`
  margin-top: 2.5rem;
  padding: 0.35rem 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  cursor: pointer;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-orange);
  color: var(--color-orange);
  text-decoration: none;
  font-family: "Matter-regular";

  transition: 0.25s all ease-in-out;
  :hover {
    color: var(--color-white);
    background-color: var(--color-orange);
  }
  @media (max-width: ${breakpoints.xxl}px) {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }
  @media (max-width: ${breakpoints.s}px) {
    margin-top: 2rem;
    margin-bottom: 0rem;
  }
`

const BlogContent = styled.section`
  padding-top: 5rem;
  overflow-x: hidden;
  * {
    padding-left: 25vw;
    > iframe {
      padding-left: 0;
      aspect-ratio: 16/9;
      width: 100%;
      height: auto;
    }
  }

  // target image padding -- images are nested in p > span > picture > etc.
  p {
    span {
      /* margin: 1.5em 0; */
    }
  }

  img {
    padding-left: 0;
  }

  p {
    font-size: 22px;
    line-height: 175%;
    font-family: "Matter-light";
    margin-bottom: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 4rem;
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
    padding-left: 30vw;
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

  ul,
  ol {
    li {
      font-size: 22px;
      line-height: 150%;
      padding-left: 1rem;
      padding-bottom: 1rem;
      font-family: "Matter-light";
      strong {
        font-family: "Matter-regular";
      }
    }
  }

  blockquote {
    border-left: 2px solid var(--color-darkgreen);
    padding-left: 1rem;
    margin-top: 5rem;
    margin-bottom: 5rem;

    p {
      font-family: "Matter-regular";
      padding-left: 1rem;
      font-size: 36px;
      line-height: 38.5px;
    }

    ol,
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

  ol {
    padding-top: 3rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    * {
      padding-left: 15vw;
    }
    p {
      font-size: 20px;
      line-height: 150%;
    }
    ul,
    ol {
      padding-left: 20vw;
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

    ul,
    ol {
      li {
        font-size: 18px;
        line-height: 30px;
      }
      padding-left: 2rem;
      font-size: 18px;
      line-height: 30px;
      font-family: "Matter-regular";
    }

    ul {
      li {
        padding-left: 1rem;
        ul {
          padding-left: 1rem;
        }
      }
      p {
        padding-left: 0;
      }
    }

    blockquote {
      border-left: 2px solid var(--color-darkgreen);
      padding-left: 0rem;
      margin: 2.5rem auto;

      p {
        font-family: "Matter-regular";
        padding-left: 1rem;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 2.5rem;
    * {
      padding-left: 0vw;
    }

    // target image padding -- images are nested in p > span > picture > etc.
    p {
      span {
        margin: 1rem 0;
      }
    }

    p {
      font-size: 16px;
      line-height: 27.5px;
      font-family: "Matter-light";
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
      li {
        font-size: 16px;
        line-height: 27.5px;
      }
      padding-left: 1.5rem;
      font-size: 16px;
      line-height: 27.5px;
      font-family: "Matter-regular";
    }

    ul {
      li {
        padding-left: 0.5rem;
        ul {
          padding-left: 1rem;
        }
      }
      p {
        padding-left: 0;
      }
    }

    blockquote {
      border-left: 2px solid var(--color-darkgreen);
      padding-left: 0rem;
      margin: 2.5rem auto;

      p {
        font-family: "Matter-regular";
        padding-left: 1rem;
        font-size: 18px;
        line-height: 27.5px;
      }
    }
  }
`

const ContinueReading = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 15rem;

  h1 {
    margin: 0 auto;
    margin-bottom: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    margin-top: 10rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    margin-top: 10rem;
    h1 {
      margin-bottom: 4rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      text-align: center;
    }
  }
`

const BulletinPost = styled.article`
  border-top: 1px solid black;
  justify-self: center;
  width: 550px;
  margin-bottom: 5rem;
  margin: 0 3rem;
  position: relative;

  h6 {
    a {
      height: 70px;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      line-clamp: 2;
      width: 100%;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    padding-top: 0.75rem;
    /* padding-bottom: 1rem; */
    transition: color ease-in-out 0.15s;

    :hover {
      color: var(--color-orange);
    }
  }

  small > p {
    padding-top: 0;
  }
  @media (max-width: ${breakpoints.m}px) {
    small > p {
      padding-top: 0.5rem;
    }
    h6 {
      a {
        height: auto;
      }
    }
    margin: 0 auto;
    width: auto;
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.s}px) {
    small {
      padding-top: 0rem;
    }
  }
`

const BulletinDescription = styled.small`
  display: flex;
  justify-content: space-between;

  p {
    padding-top: 0.75rem;
    font-size: 16px;
    color: #3a3a3a;
  }
`

const EndArticle = styled.div`
  margin-top: 7.5rem;
  margin-bottom: 20rem;
  display: flex;

  svg {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    svg {
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

  @media (max-width: ${breakpoints.xl}px) {
    width: 95%;
    padding-bottom: 7rem;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 95%;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    flex-direction: column;
    padding-bottom: 2.5rem;
  }
`

const ReturnBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`

const ProgramLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: baseline;
  font-family: "matter-light";

  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  p {
    padding-left: 0.75rem;
    padding-top: 1rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: var(--hover-transition);
  }

  :hover {
    p {
      color: #00000095;
    }
    svg {
      opacity: 0.65;
      transform: translate3d(-8px, 0, 0);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`
