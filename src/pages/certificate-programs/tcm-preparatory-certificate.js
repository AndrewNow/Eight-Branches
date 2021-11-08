import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import StampLogo from "../../svg/stamplogo"
import breakpoints from "../../components/breakpoints"
import {
  SixSemesterAcupunctureMoxibustionProgramData,
  EightSemesterAcupunctureMoxibustionProgramData,
} from "../../components/CertificatePrograms/certificateprograms"
import { ApplyNow } from "../../components/GeneralComponents/generalcomponents"


const AcupunctureMoxibustion = ({ data }) => {
  const siteTitle =
    data.site.siteMetadata?.title || `TCM Preparatory Certificate`

  return (
    <Layout title={siteTitle}>
      <Seo title="Acupuncture & Moxibustion Program" />
      <LandingSection>
        <ImageWrapper>
          <StaticImage
            src="../../images/Programs/acupuncture.png"
            alt="Image of two practitioners observing apothecary herbs."
            quality={100}
            transformOptions={{ cropFocus: "center" }}
            imgStyle={{ objectFit: "cover" }}
            style={{ minHeight: "100%" }}
          />
        </ImageWrapper>
        <RightSection>
          <LandingTextWrapper>
            <StampLogo />
            <h1>
              Acupuncture <br />& Moxibustion
            </h1>
            <h4>Diploma Program</h4>
          </LandingTextWrapper>
        </RightSection>
      </LandingSection>
      <AboutTheProgram>
        <AboutLeft>
          <h6>About the Program</h6>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            sollicitudin tortor est, sit amet maximus turpis congue at.
            Pellentesque malesuada faucibus condimentum. Duis placerat felis
            tellus, in tempus velit convallis eu. Fusce sollicitudin tortor est,
            sit amet maximus turpis congue at. Pellentesque malesuada faucibus
            condimentum.
          </h3>
        </AboutLeft>
        <AboutRight>
          <div>
            <h6>6 Semester (September Start Date)</h6>
            <p>
              Program Hours: 2400
              <br />
              This program can be completed in 2 years studying full-time{" "}
            </p>
            <DividingLine />
          </div>
          <div>
            <h6>8 Semester (September Start Date)</h6>
            <p>
              Program Hours: 2400
              <br />
              This program can be completed in 3 years studying full-time{" "}
            </p>
            <DividingLine />
          </div>
          <div>
            <p>
              Both programs qualify graduates to write the Pan-Canadian
              regulatory examinations and to become a Registered Acupuncturist
              (R.Ac).
            </p>
          </div>
        </AboutRight>
      </AboutTheProgram>
      <Banner>
        <BannerInner>
          <h1>6 Semester Program</h1>
        </BannerInner>
      </Banner>
      <TableSection>
        <SixSemesterAcupunctureMoxibustionProgramData />
      </TableSection>
      <Banner>
        <BannerInner>
          <h1>8 Semester Program</h1>
        </BannerInner>
      </Banner>
      <TableSection>
        <EightSemesterAcupunctureMoxibustionProgramData />
      </TableSection>
      <ApplyNow />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default AcupunctureMoxibustion

const LandingSection = styled.span`
  display: flex;
  align-items: center;
  background-color: var(--color-darkgreen);

  @media (max-width: ${breakpoints.xl}px) {
    flex-direction: column-reverse;
  }
`

const RightSection = styled.div`
  height: 100%;
  width: 50%;

  @media (max-width: ${breakpoints.xl}px) {
    padding-top: 10rem;
    width: 100%;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 5rem;
    svg {
      width: 40px;
    }
  }
`

const LandingTextWrapper = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h1,
  h6 {
    color: var(--color-white);
  }
  & h4 {
    color: white;
    width: 60%;
    margin-bottom: 3rem;
  }

  & h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    h1 {
      margin-top: 0rem;
      margin-bottom: 1rem;
    }
  }
`

const ImageWrapper = styled.div`
  max-width: 50%;
  overflow-x: hidden;
  height: 95vh;

  @media (max-width: ${breakpoints.xl}px) {
    min-height: auto;
    max-width: 100%;
    width: 100%;
    height: 60vh;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: 30vh;
    overflow: hidden;
  }
`

const AboutTheProgram = styled.section`
  background-color: var(--color-beige);
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 5rem 3rem;
  margin: 0 auto;

  h6 {
    padding: 1rem 0;
  }

  @media (max-width: ${breakpoints.xl}px) {
    flex-direction: column;
    padding: 3.5rem 1.5rem;
}
`

const AboutLeft = styled.div`
  flex-basis: 38%;
  padding: 0rem;

  @media (max-width: ${breakpoints.xl}px) {
    flex-basis: 100%;
    h3 {
      margin-bottom: 2.5rem;
    }
  }
  `
const AboutRight = styled.div`
  flex-basis: 35%;
  margin-left: 10rem;
  @media (max-width: ${breakpoints.xl}px) {
    margin-left: 0rem;
  }
`

const DividingLine = styled.div`
  width: 100%;
  border-top: 1px solid #cbcbcb;
  margin-top: 2.5rem;
  padding-bottom: 2.5rem;
`

const Banner = styled.div`
  background-color: var(--color-lightgreen);
  padding: 3rem 0;

  @media (max-width: ${breakpoints.xl}px) {
    padding: 1rem 0;
  }
`

const BannerInner = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  border-top: 2px solid var(--color-beige);
  border-bottom: 2px solid var(--color-beige);
  color: var(--color-beige);

  h1 {
    padding: 7rem;
  }
  @media (max-width: ${breakpoints.xl}px) {
    h1 {
      padding: 5rem 0rem;
    }
  }
`

const TableSection = styled.section`
  background-color: var(--color-lightestbeige);
  padding-bottom: 10rem;

  @media (max-width: ${breakpoints.xl}px) {
    padding-bottom: 5rem;
  }
`
