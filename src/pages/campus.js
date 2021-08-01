import React, { useEffect, useCallback, useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useEmblaCarousel } from "embla-carousel/react"
import { useRecursiveTimeout } from "../components/Embla/useRecursiveTimeout"
import contactInfo from "../../site/settings/contact_info.json"
import { breakpoints } from '../components/layout'

const Campus = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Campus`

  //Initialize Embla Carousel
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    // containScroll: "trimSnaps",
  })

  //Embla config for autoplay scrolling
  const AUTOPLAY_INTERVAL = 3000
  const autoplay = useCallback(() => {
    if (!embla) return
    if (embla.canScrollNext()) {
      embla.scrollNext()
    } else {
      embla.scrollTo(0)
    }
  }, [embla])
  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL)

  //Embla config for progressbar
  const [scrollProgress, setScrollProgress] = useState(0)
  const onScroll = useCallback(() => {
    if (!embla) return
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [embla, setScrollProgress])

  //Run configurations
  useEffect(() => {
    if (!embla) return
    onScroll()
    play()
    embla.on("scroll", onScroll)
    embla.on("pointerDown", stop)
  }, [embla, play, onScroll, stop])

  return (
    <Layout title={siteTitle}>
      <Seo title="Our Campus" />
      <HeaderWrapper>
        <CampusHeader>
          <h1>Our Campus</h1>
          <h5>
            Eight Branches offers students a range of classroom environments to
            suit different types of study, including academic classrooms, a
            serene studio and a teaching clinic, which features 8 fully equipped
            teaching spaces.
          </h5>
        </CampusHeader>

        <Embla>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              {data.CampusImages.edges.map((image, index) => {
                return (
                  <EmblaSlide key={index}>
                    <EmblaSlideInner>
                      <GatsbyImage
                        image={image.node.childImageSharp.gatsbyImageData}
                        alt={
                          "Images of the campus, including lecture halls, teaching "
                        }
                      />
                    </EmblaSlideInner>
                  </EmblaSlide>
                )
              })}
            </EmblaContainer>
          </EmblaViewport>

          <EmblaProgress>
            <EmblaProgressBar
              style={{ transform: `translateX(${scrollProgress}%)` }}
            />
          </EmblaProgress>
        </Embla>
      </HeaderWrapper>

      <Facilities>
        <h1>Facilities</h1>
        <CardWrapper>
          <Apothecary>
            <ApothecaryText>
              <h4>Our Apothecary</h4>
              <h6>
                Discover the Eight Branches apothecary, which houses a unique &
                extensive collection of raw Chinese herbs & granules.
              </h6>
            </ApothecaryText>
            <StaticImage
              src="../images/Facilities/apothecary.png"
              alt="Images of traditional Chinese herbs and granules."
              quality={100}
              width={450}
              height={450}
            />
          </Apothecary>

          <Library>
            <StaticImage
              src="../images/Facilities/library.png"
              alt="Images of a woman reading in our library, with a traditional Chinese scroll painting behind her."
              quality={100}
              width={450}
              height={450}
            />
            <LibraryText>
              <h4>Our Library</h4>
              <h6>
                Eight Branches has an ever expanding library. Students can
                browse our collection in person or through our online catalogue.
              </h6>
            </LibraryText>
          </Library>
        </CardWrapper>
      </Facilities>
      <TorontoBanner>
        <TorontoText>
          <h2>Conveniently Located</h2>
          <h6>
            Our academy is in the heart of Midtown Toronto, a pleasant
            neighborhood rich in character and with a long history of embracing
            healthy and community-focused lifestyles.
          </h6>
        </TorontoText>

        <StaticImage
          layout="fixed"
          src="../images/Facilities/toronto.jpg"
          alt="Images of Toronto's skyline on a sunny day, with a body of water in the foreground."
          quality={100}
          objectFit="cover"
        />
      </TorontoBanner>

      <MapWrapper>
        <MapFrame>
          <MapText>
            <h3>Visit Us</h3>
            <a href="https://g.page/EightBranches?share" target="blank">
              <h6>
                112 Merton St 3rd floor, <br /> Toronto, ON M4S 2Z8
              </h6>
            </a>
            <h3>Contact Us</h3>
            <a href={`mailto: ${contactInfo.email}`}>
              <h6>{contactInfo.email}</h6>
            </a>

            <a href={`tel: ${contactInfo.phone}`} alt="Main phone number">
              <h6>{contactInfo.phone}</h6>
            </a>
            <a
              href={`tel: ${contactInfo.phone2}`}
              alt="Alternative toll-free phone number"
            >
              <h6>{contactInfo.phone2}</h6>
            </a>
          </MapText>
          <Map>
            <iframe
              src="https://snazzymaps.com/embed/329034"
              width="100%"
              height="600px"
              style={{ borderRadius: "10px", border: "none" }}
            />
          </Map>
        </MapFrame>
      </MapWrapper>
    </Layout>
  )
}

export default Campus

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    CampusImages: allFile(
      filter: { relativeDirectory: { eq: "CampusImages" } }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              width: 1525
              aspectRatio: 1.5
              placeholder: BLURRED
              quality: 85
              blurredOptions: { width: 120 }
              webpOptions: { quality: 90 }
              formats: WEBP
            )
          }
        }
      }
    }
  }
`
const HeaderWrapper = styled.section`
  width: 100%;
  padding-top: 15rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-beige);
  margin: 0 auto;
`

const CampusHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 7.5rem;

  & h1 {
    padding-bottom: 2rem;
  }

  & h5 {
    width: 47.5%;
  }
`

const Embla = styled.div`
  border-radius: 20px;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 15rem;
`

const EmblaViewport = styled.div`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
`

const EmblaSlide = styled.div`
  border-radius: 20px;
  /* flex: 0 0 80%; */
  position: relative;
  min-width: 100%;
  padding-left: 10px;
  height: 650px;
  cursor: grab;
`

const EmblaProgress = styled.div`
  position: relative;
  background-color: white;
  margin-top: 20px;
  max-width: 930px;
  width: calc(100% - 40px);
  height: 10px;
  overflow: hidden;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  top: -75px;
`
const EmblaProgressBar = styled.div`
  position: absolute;
  background-color: var(--color-lightestgreen);
  border-radius: 20px;
  width: 100%;
  top: -75px;
  bottom: -75px;
  left: -100%;
`

const EmblaSlideInner = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: auto;
  min-height: 100%;
  min-width: 100%;
  max-width: none;
  transform: translate(-50%, -50%);
`

const Facilities = styled.section`
  background-color: var(--color-beige);
  display: flex;
  flex-direction: column;

  & h1 {
    color: var(--color-darkgreen);
    margin: 0 auto;
    padding-bottom: 10rem;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 15rem;
  width: 80%;
`

const Apothecary = styled.div`
  display: flex;
  overflow: hidden;
  width: 72.5%;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
`

const ApothecaryText = styled.div`
  border-right: 1px solid black;
  width: 65%;
  padding: 4rem 6rem;

  & h4 {
    padding-bottom: 2rem;
  }
`

const Library = styled.div`
  margin-top: 5rem;
  align-self: flex-end;
  display: flex;
  overflow: hidden;
  width: 72.5%;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
`

const LibraryText = styled.div`
  border-left: 1px solid black;
  width: 65%;
  padding: 4rem 6rem;

  & h4 {
    padding-bottom: 2rem;
  }
`

const TorontoBanner = styled.div`
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`


const TorontoText = styled.div`
  position: absolute;
  color: white;
  z-index: 20;
  bottom: 5rem;
  left: 15rem;
  width: 55%;
`

const MapWrapper = styled.div`
  background-color: var(--color-darkgreen);
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  `
const MapFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  border: 1px solid white;
  width: 95%;
  height: 90%;

  border-radius: 40px;
`
const MapText = styled.div`
  flex-basis: 30%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--color-white);

  & > :nth-child(2) {
    margin-bottom: 5rem;
  }

  & a {
    font-size: 24px;
    line-height: 35px;
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`


const Map = styled.div`
  flex-basis: 60%;
  border-radius: 10px;
  overflow: hidden;
`