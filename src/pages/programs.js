import React, { useState, useEffect, useCallback, useRef } from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useInView } from "react-intersection-observer"
import breakpoints from "../components/breakpoints"
import LeafPattern from "../svg/leafPattern"
import StampLogo from "../svg/stamplogo"
import { motion } from "framer-motion"
import {
  ApplyNow,
  AcademicAdvisor,
} from "../components/GeneralComponents/generalcomponents"

const OurPrograms = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Our Programs`

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
  const [SectionRef3, sectionInView3] = useInView({
    root: null,
    threshold: 0.85,
    triggerOnce: true,
  })
  const [SectionRef4, sectionInView4] = useInView({
    root: null,
    threshold: 0.85,
    triggerOnce: true,
  })
  const [contentRef, inView] = useInView({
    root: null,
  })
  const [contentRef2, inView2] = useInView({
    root: null,
  })

  const setRefs = useCallback(
    node => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      SectionRef1(node)
      SectionRef2(node)
      SectionRef3(node)
      SectionRef4(node)
      contentRef(node)
      contentRef2(node)
    },
    [
      SectionRef1,
      SectionRef2,
      SectionRef3,
      SectionRef4,
      contentRef,
      contentRef2,
    ]
  )

  // ---------- PARALLAX SCROLL LOGIC ----------

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    inView && window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [inView])

  useEffect(() => {
    inView2 && window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [inView2])

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

  return (
    <Layout title={siteTitle}>
      <Seo title="Our Programs" />
      <SectionWrapper>
        <ImageBanner>
          <BannerText>
            <h1>Our Programs</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
          </BannerText>

          <StaticImage
            src="../images/ProgramsImages/image61.png"
            alt="Beige background image with a bonsai in the foreground."
            quality={100}
            layout="fullWidth"
          />
        </ImageBanner>

        <ImageBannerMobile>
          <BannerText>
            <h1>Our Programs</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
          </BannerText>

          <StaticImage
            src="../images/ProgramsImages/mobilebanner.png"
            alt="Beige background image with a bonsai in the foreground."
            quality={100}
            height={530}
            layout="fullWidth"
          />
        </ImageBannerMobile>
      </SectionWrapper>

      <ProgramContainer>
        <ProgramSection>
          <ProgramInner>
            <ProgramImage
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView1 ? "visible" : "hidden"}
            >
              <StaticImage
                src="../images/ProgramsImages/moxibustion.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
                quality={100}
                width={590}
              />
            </ProgramImage>
            <ProgramText
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView1 ? "visible" : "hidden"}
              ref={SectionRef1}
            >
              <motion.h1 variants={fadeIn}>Acupuncture & Moxibustion</motion.h1>
              <motion.h6 variants={fadeIn}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </motion.h6>
            </ProgramText>
          </ProgramInner>
        </ProgramSection>

        <ProgramSection>
          <SvgWrapper
            ref={contentRef}
            style={{
              transform: `translate3D(0, calc(225px + ${
                offsetY * -0.175
              }px), 0) rotate(180deg)`,
            }}
          >
            <LeafPattern />
          </SvgWrapper>
          <ProgramInner>
            <ProgramImage
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView2 ? "visible" : "hidden"}
            >
              <StaticImage
                src="../images/ProgramsImages/cupping.png"
                alt="A practitioner performs cupping on a patient with 6 cups on their back."
                quality={100}
                width={590}
              />
            </ProgramImage>
            <ProgramText
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView2 ? "visible" : "hidden"}
              ref={SectionRef2}
            >
              <motion.h1 variants={fadeIn}>
                Traditional Chinese Medicine Practitioner
              </motion.h1>
              <motion.h6 variants={fadeIn}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.h6>
            </ProgramText>
          </ProgramInner>
        </ProgramSection>

        <ProgramSection>
          <ProgramInner>
            <ProgramImage
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView3 ? "visible" : "hidden"}
            >
              <StaticImage
                src="../images/ProgramsImages/tcmp.png"
                alt="A professor leads a group in Tai Chi in one of our salons."
                quality={100}
                width={590}
              />
            </ProgramImage>
            <ProgramText
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView3 ? "visible" : "hidden"}
              ref={SectionRef3}
            >
              <motion.h1 variants={fadeIn}>Advanced TCMP</motion.h1>
              <motion.h6 variants={fadeIn}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.h6>
            </ProgramText>
          </ProgramInner>
        </ProgramSection>

        <ProgramSection>
          <ProgramInner>
            <ProgramText
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView4 ? "visible" : "hidden"}
              ref={SectionRef4}
            >
              <motion.h1 variants={fadeIn}>Herbology</motion.h1>
              <motion.h6 variants={fadeIn}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.h6>
            </ProgramText>
            <ProgramImage
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView4 ? "visible" : "hidden"}
            >
              <StaticImage
                src="../images/ProgramsImages/herbology.png"
                alt="A picture of a collection of herbs and jars from our Apothecary."
                quality={100}
                width={590}
              />
            </ProgramImage>
          </ProgramInner>
          <SvgWrapper
            ref={contentRef2}
            style={{
              transform: `translate3D(0, calc(425px + ${
                offsetY * -0.175
              }px), 0) rotate(0deg)`,
            }}
          >
            <LeafPattern />
          </SvgWrapper>
        </ProgramSection>
      </ProgramContainer>

      <CertificatePrograms>
        <Title>
          <StampLogo />
          <h1>Certificate Programs</h1>
        </Title>
        <Cards>
          <Card>
            <CardText>
              <h4>Acupuncture & Moxibustion Certificate</h4>
            </CardText>
            <CardImage>
              <StaticImage
                src="../images/ProgramsImages/acupuncture.png"
                alt="A picture of a prosthetic foot with illustrated acupuncture points."
                quality={100}
                height={590}
              />
            </CardImage>
          </Card>
          <Card>
            <CardText>
              <h4>Certificate in Asian Bodywork Therapy</h4>
            </CardText>
            <CardImage>
              <StaticImage
                src="../images/ProgramsImages/bodywork.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
                quality={100}
                height={590}
              />
            </CardImage>
          </Card>
          <Card>
            <CardText>
              <h4>TCM Preparatory Certificate</h4>
            </CardText>
            <CardImage>
              <StaticImage
                src="../images/ProgramsImages/massage.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
                quality={100}
                height={590}
              />
            </CardImage>
          </Card>
        </Cards>
        <p>
          Certificate programs are designed for general interest or Regulated
          Health Practitioners interested in practicing TCM Modalities as an
          <strong> adjunct therapy to their primary method of treatment</strong>
          . You must complete one of our diploma programs if you would like to
          practice as a Registered TCMP Practitioner, Registered Acupuncturist
          or Registered Herbalist.
        </p>
      </CertificatePrograms>
      <ApplyNow />
      <AcademicAdvisor />
    </Layout>
  )
}

export default OurPrograms

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    ProgramssImages: allFile(
      filter: { relativeDirectory: { eq: "ProgramsImages" } }
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
const SectionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-beige);
  & h2 {
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    & h2 {
      padding-top: 5rem;
      padding-bottom: 2.5rem;
    }
  }
`

const ImageBanner = styled.div`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

const ImageBannerMobile = styled.div`
  display: none;

  @media (max-width: ${breakpoints.m}px) {
    display: block;
    width: 100%;
    /* height: 75vh; */
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
`

const BannerText = styled.div`
  position: absolute;
  z-index: 20;
  bottom: 5rem;
  left: 5vw;
  width: 37.5%;

  & h1 {
    padding-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    bottom: 2.5rem;

    & h1 {
      padding-bottom: 0.5rem;
    }
  }
  @media (max-width: ${breakpoints.xs}px) {
    bottom: 1rem;
  }
`

const ProgramContainer = styled.section`
  background-color: var(--color-beige);
`

const ProgramSection = styled.div`
  max-height: 70vh;
  position: relative;
  overflow: hidden !important;

  &:nth-child(1) {
    background-color: var(--color-beige);
  }
  &:nth-child(2) {
    background-color: var(--color-brown);
  }
  &:nth-child(3) {
    background-color: var(--color-sandbeige);
  }
  &:nth-child(4) {
    background-color: var(--color-salmon);
  }

  @media (max-width: ${breakpoints.m}px) {
    max-height: none;
    padding: 2rem 0;
  }
`

const ProgramInner = styled.div`
  max-width: 90%;
  padding: 6rem 5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 0 auto;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  &:nth-child(even) {
    flex-direction: row;
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
    padding: 2.5rem 0;

    &:nth-child(odd) {
      flex-direction: column;
    }
    &:last-child {
      flex-direction: column-reverse;
    }
  }
`

const ProgramText = styled(motion.div)`
  max-width: 45%;
  padding-top: 1rem;
  position: relative;
  z-index: 2;

  & h1 {
    padding-bottom: 1rem;
  }

  & h6 {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.m}px) {
    max-width: 100%;
    padding-top: 0rem;

    & h6 {
      max-width: 100%;
      padding-bottom: 2.5rem;
    }
  }
`
const SvgWrapper = styled.div`
  position: absolute;
  top: -85%;
  left: 50px;
  z-index: 1;

  &:nth-child(2) {
    right: 50px;
    left: auto;
    transform: rotate(360deg);
  }
`
const ProgramImage = styled(motion.div)`
  z-index: 2;
  position: relative;
  border-radius: 20px !important;
  overflow: hidden;

  @media (max-width: ${breakpoints.m}px) {
    margin: 2rem 0;
  }
`

const CertificatePrograms = styled.section`
  background-color: var(--color-sandbeige);
  padding-top: 10rem;

  & p {
    font-size: 22px;
    line-height: 34px;
    margin: 0 auto;
    padding-top: 1rem;
    padding-bottom: 10rem;
    width: 80%;
    color: #00000060;

    & strong {
      color: #00000090;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 5rem;

    & p {
      font-size: 16px;
      line-height: 24px;
      width: 90%;
      padding-bottom: 5rem;
    }

    & svg {
      width: 30px;
    }
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  & h1 {
    padding-top: 2rem;
    padding-bottom: 5rem;
  }
  & svg {
    filter: invert(1);
  }

  @media (max-width: ${breakpoints.m}px) {
    & h1 {
      padding-top: 0rem;
    }
  }
`

const Cards = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 5rem;

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    flex-direction: column;
    padding-bottom: 0rem;
  }
`

const Card = styled.div`
  overflow: hidden;
  width: 30%;
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`

const CardText = styled.div`
  padding: 2.5rem 2rem;
`

const CardImage = styled.div`
  border-top: 1px solid black;
  overflow: hidden;
`
