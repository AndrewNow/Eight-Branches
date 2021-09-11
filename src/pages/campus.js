import React, { useEffect, useCallback, useState, useRef } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useEmblaCarousel } from "embla-carousel/react"
import { useRecursiveTimeout } from "../components/Embla/useRecursiveTimeout"
import breakpoints from "../components/breakpoints"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GoogleMaps } from "../components/GeneralComponents/generalcomponents"
const Campus = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Campus`

  // ---------- INTERSECTION OBSERVER LOGIC ----------
  const ref = useRef()
  const [SectionRef1, sectionInView1] = useInView({
    root: null,
    threshold: 0.85,
    triggerOnce: true,
  })
  const [SectionRef2, sectionInView2] = useInView({
    root: null,
    threshold: 0.85,
    triggerOnce: true,
  })

  const setRefs = useCallback(
    node => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      SectionRef1(node)
      SectionRef2(node)
    },
    [SectionRef1, SectionRef2]
  )

  // ---------- FRAMER LOGIC ----------
  const fadeIn = {
    visible: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.75,
        staggerChildren: 0.35,
      },
    },
    hidden: {
      top: 30,
      opacity: 0,
    },
  }

  // ---------- Initialize Embla Carousel ----------
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    // containScroll: "trimSnaps",
  })

  // ---------- Embla config for autoplay scrolling ----------
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

  // ---------- Embla config for progressbar ----------
  const [scrollProgress, setScrollProgress] = useState(0)
  const onScroll = useCallback(() => {
    if (!embla) return
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [embla, setScrollProgress])

  // ---------- Run configurations ----------
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
          <Card
            ref={SectionRef1}
            variants={fadeIn}
            initial="hidden"
            animate={sectionInView1 ? "visible" : "hidden"}
          >
            <CardText variants={fadeIn}>
              <motion.h4 variants={fadeIn}>Our Apothecary</motion.h4>
              <motion.h6 variants={fadeIn}>
                Discover the Eight Branches apothecary, which houses a unique &
                extensive collection of raw Chinese herbs & granules.
              </motion.h6>
            </CardText>
            <StaticImage
              src="../images/Facilities/apothecary.png"
              alt="Images of traditional Chinese herbs and granules."
              quality={100}
              width={450}
              height={450}
            />
          </Card>

          <Card
            ref={SectionRef2}
            variants={fadeIn}
            initial="hidden"
            animate={sectionInView2 ? "visible" : "hidden"}
          >
            <StaticImage
              src="../images/Facilities/library.png"
              alt="Images of a woman reading in our library, with a traditional Chinese scroll painting behind her."
              quality={100}
              width={450}
              height={450}
            />
            <CardText variants={fadeIn}>
              <motion.h4 variants={fadeIn}>Our Library</motion.h4>
              <motion.h6 variants={fadeIn}>
                Eight Branches has an ever expanding library. Students can
                browse our collection in person or through our online catalogue.
              </motion.h6>
            </CardText>
          </Card>
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

      <TorontoBannerMobile>
        <TorontoText>
          <h2>Conveniently Located</h2>
          <p>
            Our academy is in the heart of Midtown Toronto, a pleasant
            neighborhood rich in character and with a long history of embracing
            healthy and community-focused lifestyles.
          </p>
        </TorontoText>

        <StaticImage
          src="../images/Facilities/torontomobile.png"
          alt="Images of Toronto's skyline on a sunny day, with a body of water in the foreground."
          quality={100}
        />
      </TorontoBannerMobile>

      <GoogleMaps />
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

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 7rem;
  }
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

  & h6 {
    width: 47.5%;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 2.5rem;

    h6 {
      width: 90%;
    }
  }
`

const Embla = styled.div`
  border-radius: 20px;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 15rem;

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    padding-bottom: 1rem;
  }
`

const EmblaViewport = styled.div`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;

  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
  }
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
`

const EmblaSlide = styled.div`
  /* flex: 0 0 80%; */
  position: relative;
  min-width: 100%;
  padding-left: 10px;
  height: 650px;
  cursor: grab;

  @media (max-width: ${breakpoints.m}px) {
    height: 200px;
  }
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

const EmblaProgress = styled.div`
  position: relative;
  background-color: white;
  max-width: 930px;
  width: calc(100% - 40px);
  height: 10px;
  overflow: hidden;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  top: -75px;

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 50px;
    top: -30px;
    height: 7px;
  }
`
const EmblaProgressBar = styled.div`
  position: absolute;
  background-color: var(--color-lightestgreen);
  border-radius: 20px;
  width: 100%;
  top: -75px;
  bottom: -75px;
  left: -100%;

  @media (max-width: ${breakpoints.m}px) {
    top: -30px;
  }
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

  @media (max-width: ${breakpoints.m}px) {
    & h1 {
      padding-bottom: 2.5rem;
    }
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 15rem;
  width: 80%;

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    padding-bottom: 5rem;
  }
`

const Card = styled(motion.div)`
  display: flex;
  overflow: hidden;
  width: 72.5%;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;

  margin-bottom: 5rem;

  &:nth-child(odd) {
    align-self: flex-start;
  }
  &:nth-child(even) {
    align-self: flex-end;
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
    width: 100%;

    &:nth-child(odd) {
      align-self: center;
    }
    &:nth-child(even) {
      align-self: center;
    }
  }
`

const CardText = styled(motion.div)`
  width: 65%;
  padding: 4rem 6rem;

  & h4 {
    padding-bottom: 2rem;
  }

  &:nth-child(odd) {
    border-right: 1px solid black;
  }
  &:nth-child(even) {
    border-left: 1px solid black;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    padding: 2rem;
    border: none;

    & h4 {
      padding-bottom: 1rem;
    }

    &:nth-child(odd) {
      border-right: none;
      border-bottom: 1px solid black;
    }
    &:nth-child(even) {
      border-left: none;
      border-top: 1px solid black;
    }
  }
`

const TorontoBanner = styled.div`
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`
const TorontoBannerMobile = styled.div`
  display: none;

  @media (max-width: ${breakpoints.m}px) {
    display: inline-block;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    border-bottom: 1px solid black;
  }
`

const TorontoText = styled.div`
  position: absolute;
  color: white;
  z-index: 20;
  bottom: 5rem;
  left: 15rem;
  width: 55%;

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    left: 0vw;
    bottom: 0vw;
    padding: 7vw 5vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    backdrop-filter: blur(2px);
    overflow: hidden;
  }
`