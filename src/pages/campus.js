import React, { useEffect, useCallback, useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useEmblaCarousel } from "embla-carousel/react"
import { useRecursiveTimeout } from "../components/Embla/useRecursiveTimeout"

const Campus = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Campus`


  //Initialize Embla Carousel
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    containScroll: "trimSnaps",
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
          <h6>
            Eight Branches offers students a range of classroom environments to
            suit different types of study, including academic classrooms, a
            serene studio and a teaching clinic, which features 8 fully equipped
            teaching spaces.
          </h6>
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
              }
            )}
            </EmblaContainer>
          </EmblaViewport>

          <EmblaProgress>
            <EmblaProgressBar
              style={{ transform: `translateX(${scrollProgress}%)` }}
            />
          </EmblaProgress>
        </Embla>
      </HeaderWrapper>
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
              width: 1720
              aspectRatio: 1.5
              placeholder: BLURRED
              quality: 90
              blurredOptions: { width: 80 }
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
  padding-bottom: 10rem;

  & h1 {
    padding-bottom: 2rem;
  }

  & h6 {
    width: 45%;
  }
`

const Embla = styled.div`
  border: 1px solid green;
  border-radius: 20px;
  width: 80vw;
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
  border: 1px solid red;
  /* flex: 0 0 80%; */
  position: relative;
  min-width: 100%;
  padding-left: 10px;
  height: 600px;
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
`
const EmblaProgressBar = styled.div`
  position: absolute;
  background-color: var(--color-lightestgreen);
  border-radius: 20px;
  width: 100%;
  top: 0;
  bottom: 0;
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