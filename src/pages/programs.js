import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import breakpoints from "../components/breakpoints"
import LeafPattern from "../svg/leafPattern"
import StampLogo from "../svg/stamplogo"

const OurPrograms = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Our Programs`

  return (
    <Layout location={location} title={siteTitle}>
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
            alt="Images of Toronto's skyline on a sunny day, with a body of water in the foreground."
            quality={100}
            // objectPosition="50% 20%"
            height={530}
            layout="fullWidth"
          />
        </ImageBanner>
      </SectionWrapper>

      <ProgramContainer>
        <ProgramSection>
          <ProgramInner>
            <ProgramImage>
              <StaticImage
                src="../images/ProgramsImages/moxibustion.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
                quality={100}
                width={590}
              />
            </ProgramImage>
            <ProgramText>
              <h1>Acupuncture & Moxibustion</h1>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </h6>
            </ProgramText>
          </ProgramInner>
        </ProgramSection>

        <ProgramSection>
          <SvgWrapper>
            <LeafPattern />
          </SvgWrapper>
          <ProgramInner>
            <ProgramImage>
              <StaticImage
                src="../images/ProgramsImages/cupping.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
                quality={100}
                width={590}
              />
            </ProgramImage>
            <ProgramText>
              <h1>Traditional Chinese Medicine Practitioner</h1>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
            </ProgramText>
          </ProgramInner>
        </ProgramSection>

        <ProgramSection>
          <ProgramInner>
            <ProgramImage>
              <StaticImage
                src="../images/ProgramsImages/tcmp.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
                quality={100}
                width={590}
              />
            </ProgramImage>
            <ProgramText>
              <h1>Advanced TCMP</h1>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
            </ProgramText>
          </ProgramInner>
        </ProgramSection>

        <ProgramSection>
          <ProgramInner>
            <ProgramText>
              <h1>Herbology</h1>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
            </ProgramText>
            <ProgramImage>
              <StaticImage
                src="../images/ProgramsImages/herbology.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
                quality={100}
                width={590}
              />
            </ProgramImage>
          </ProgramInner>
          <SvgWrapper>
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
                src="../images/ProgramsImages/herbology.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
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
                src="../images/ProgramsImages/herbology.png"
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
                src="../images/ProgramsImages/herbology.png"
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
          <strong> adjunct therapy to their primary method of treatment</strong>.
          You must complete one of our diploma programs if you would like to
          practice as a Registered TCMP Practitioner, Registered Acupuncturist
          or Registered Herbalist.
        </p>
      </CertificatePrograms>

      <ApplyNowSection>
        <ApplyNowInner>
          <h1>Apply Now Lorem ipsum dolor sit amet</h1>
          <ReadMore to="/admissions">Apply Now</ReadMore>
        </ApplyNowInner>
      </ApplyNowSection>
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
    width: 100%;
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

const ProgramText = styled.div`
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
  transform: rotate(180deg);
  left: 50px;
  z-index: 1;

  &:nth-child(2) {
    right: 50px;
    left: auto;
    transform: rotate(360deg);
  }
`
const ProgramImage = styled.div`
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
      color:  #00000090;
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

const ApplyNowSection = styled.section`
  background-color: var(--color-darkgreen);
  height: 67.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;

  @media (max-width: ${breakpoints.m}px) {
    padding: 1rem;
  }
`

const ApplyNowInner = styled.div`
  border: 1px solid white;
  border-radius: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & h1 {
    color: white;
    max-width: 35%;
    text-align: center;
  }

  @media (max-width: ${breakpoints.m}px) {
    border-radius: 20px;
    & h1 {
      max-width: 90%;
    }
  }
`

const ReadMore = styled(Link)`
  margin-top: 2.5rem;
  width: 170px;
  text-align: center;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 0.5rem 1.6rem;
  padding-bottom: 0.6rem;
  text-decoration: none;
  font-family: "Matter-regular";

  transition: 0.25s all ease-in-out;
  &:hover {
    color: var(--color-darkgreen);
    background-color: var(--color-white);
  }
`
