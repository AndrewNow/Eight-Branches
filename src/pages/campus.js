import React, { useEffect, useCallback, useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import useEmblaCarousel from "embla-carousel-react"
import { useRecursiveTimeout } from "../components/Embla/useRecursiveTimeout"
import breakpoints from "../components/breakpoints"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GoogleMaps } from "../components/generalcomponents"
import { AiOutlineClockCircle } from "react-icons/ai"

const Campus = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Campus`

  // ---------- INTERSECTION OBSERVER LOGIC ----------
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
  const [SectionRef3, sectionInView3] = useInView({
    root: null,
    threshold: 0.85,
    triggerOnce: true,
  })

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
  })

  // ---------- Embla config for autoplay scrolling ----------
  const AUTOPLAY_INTERVAL = 1750
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
                        imgStyle={{ objectFit: "cover" }}
                        style={{ height: "100%" }}
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
              <ComingSoon
                variants={fadeIn}
                // href="https://eightbranches.librarika.com/"
                // target="_blank"
                // rel="noreferrer"
              >
                <ComingSoonWrapper variants={fadeIn}>
                  <AiOutlineClockCircle />
                  <p>Coming soon!</p>
                </ComingSoonWrapper>
              </ComingSoon>
            </CardText>

            <CardImage>
              <StaticImage
                src="../images/Facilities/apothecary.png"
                alt="Images of traditional Chinese herbs and granules."
                quality={100}
                transformOptions={{ cropFocus: "center" }}
                imgStyle={{ objectFit: "cover" }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: "inherit",
                  borderTopRightRadius: "inherit",
                }}
              />
            </CardImage>
          </Card>

          <Card
            ref={SectionRef2}
            variants={fadeIn}
            initial="hidden"
            animate={sectionInView2 ? "visible" : "hidden"}
          >
            <CardImage>
              <StaticImage
                src="../images/Facilities/library.png"
                alt="Images of a woman reading in our library, with a traditional Chinese scroll painting behind her."
                quality={100}
                transformOptions={{ cropFocus: "center" }}
                imgStyle={{ objectFit: "cover" }}
                style={{ height: "100%" }}
              />
            </CardImage>
            <CardText variants={fadeIn}>
              <motion.h4 variants={fadeIn}>Our Library</motion.h4>
              <motion.h6 variants={fadeIn}>
                Eight Branches has an ever expanding library. Students can
                browse our collection in person or through our online catalogue.
              </motion.h6>
              <CardLinkOutbound
                variants={fadeIn}
                href="https://eightbranches.librarika.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkWrapper variants={fadeIn}>
                  <p>View Our Catalog</p>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="black"
                    />
                  </svg>
                </LinkWrapper>
              </CardLinkOutbound>
            </CardText>
          </Card>
          <Card
            ref={SectionRef3}
            variants={fadeIn}
            initial="hidden"
            animate={sectionInView3 ? "visible" : "hidden"}
          >
            <CardText variants={fadeIn}>
              <motion.h4 variants={fadeIn}>The Teaching Clinic</motion.h4>
              <motion.h6 variants={fadeIn}>
                Explore affordable, community-based TCM treatments from our
                student-run clinic.
              </motion.h6>
              <CardLink variants={fadeIn} to="/teaching-clinic">
                <LinkWrapper variants={fadeIn}>
                  <p>Learn more</p>{" "}
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="black"
                    />
                  </svg>
                </LinkWrapper>
              </CardLink>
            </CardText>
            <CardImage>
              <StaticImage
                src="../images/Facilities/teachingclinic.png"
                alt="Images of traditional Chinese herbs and granules."
                quality={100}
                transformOptions={{ cropFocus: "center" }}
                imgStyle={{ objectFit: "cover" }}
                style={{ width: "100%", height: "100%" }}
              />
            </CardImage>
          </Card>
        </CardWrapper>
      </Facilities>
      <TorontoBanner>
        <TorontoText>
          <h2>Conveniently Located</h2>
          <h6>
            Our school is in the heart of Midtown Toronto, a pleasant
            neighborhood rich in character and with a long history of embracing
            healthy and community-focused lifestyles. Conveniently located 5
            minutes from Davisville subway station and 10 minutes from local
            parks and walking trails, Eight Branches offers a tranquil learning
            environment with easy access to all the benefits of downtown
            Toronto.
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
              width: 1920
              aspectRatio: 1.5
              placeholder: BLURRED
              quality: 90
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
  padding-top: 12.5rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-lightestbeige);
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

  h1 {
    padding-bottom: 2rem;
  }

  h6 {
    width: 47.5%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    h6 {
      width: 70%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 2.5rem;
    h6 {
      width: 90%;
    }
  }
`

const Embla = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 15rem;

  @media (max-width: ${breakpoints.xl}px) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 10rem;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 5rem;
  }
`

const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;

  border-radius: 20px;
  -webkit-border-radius: 20px;

  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
    -webkit-border-radius: 10px;
  }
  @media (max-width: ${breakpoints.s}px) {
    border-radius: 5px;
    -webkit-border-radius: 5px;
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
  position: relative;
  min-width: 100%;
  /* padding-left: 10px; */
  height: 750px;
  cursor: ew-resize;
  @media (max-width: ${breakpoints.xl}px) {
    height: 530px;
  }
  @media (max-width: ${breakpoints.l}px) {
    height: 400px;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: 300px;
  }
  @media (max-width: ${breakpoints.s}px) {
    height: 200px;
  }
`
const EmblaSlideInner = styled.div`
  display: block;
  height: 100%;
`

const EmblaProgress = styled.div`
  position: relative;
  background-color: white;
  max-width: 930px;
  width: calc(100% - 40px);
  height: 10px;
  overflow: hidden;
  border: 1px solid white;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  top: -60px;

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 50px;
    top: -30px;
    height: 7px;
  }
`
const EmblaProgressBar = styled.div`
  position: absolute;
  background-color: var(--color-lightgreen);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  top: -60px;
  bottom: -60px;
  left: -100%;

  @media (max-width: ${breakpoints.m}px) {
    top: -30px;
  }
`

const Facilities = styled.section`
  background-color: var(--color-lightestbeige);
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 auto;
    padding-bottom: 10rem;
  }
  @media (max-width: ${breakpoints.l}px) {
    h1 {
      padding-bottom: 5rem;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    h1 {
      padding-bottom: 4.5rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      padding-bottom: 2.5rem;
    }
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  padding-bottom: 15rem;

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 5rem;
  }
`

const Card = styled(motion.div)`
  position: relative;
  display: flex;
  width: 72.5%;
  height: 100%;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  margin: 0 auto;
  margin-bottom: 5rem;
  align-items: center;

  @media (max-width: ${breakpoints.xl}px) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.l}px) {
    height: 330px;
  }
  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: 425px;
    flex-direction: column;
    width: 90%;
    margin-bottom: 2rem;

    :nth-child(odd) {
      flex-direction: column-reverse;
    }
  }
`

const CardImage = styled.div`
  width: 55%;
  height: 100%;
  /* position: absolute;
  top: 0;
  left: 0; */
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`

const CardText = styled(motion.div)`
  width: 35%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h4 {
    padding-bottom: 1.5rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    /* padding: 3rem; */
  }

  @media (max-width: ${breakpoints.l}px) {
    h6 {
      font-size: 17px;
    }
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    padding: 1.5rem 1rem;
    border: none;

    h4 {
      padding-bottom: 1rem;
    }
  }
`

const CardLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const CardLinkOutbound = styled.a`
  color: black;
  text-decoration: none;
`
const ComingSoon = styled.div`
  color: black;
  text-decoration: none;
`

const ComingSoonWrapper = styled(motion.div)`
  display: flex;
  align-items: baseline;
  font-family: "matter-regular";

  filter: opacity(0.5);

  svg {
    margin-right: 0.5rem;
    transform: translateY(0.1rem);
  }

  p {
    padding-right: 0.75rem;
    padding-top: 1rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: var(--hover-transition);
  }

  @media (max-width: ${breakpoints.xl}px) {
    p {
      font-size: 17px;
    }
  }
`

const LinkWrapper = styled(motion.div)`
  display: flex;
  align-items: baseline;
  font-family: "matter-regular";

  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  p {
    padding-right: 0.75rem;
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
      transform: translate3d(8px, 0, 0);
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    p {
      font-size: 17px;
    }
  }
`

const TorontoBanner = styled.div`
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`
const TorontoBannerMobile = styled.div`
  display: none;

  @media (max-width: ${breakpoints.s}px) {
    display: inline-block;
    height: 100%;
    width: 100%;
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

  @media (max-width: ${breakpoints.l}px) {
    left: 5rem;
  }
  @media (max-width: ${breakpoints.s}px) {
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
