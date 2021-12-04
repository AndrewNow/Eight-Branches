import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FacultyLeadershipQuery from "../components/Faculty/facultyLeadershipQuery"
import FacultyInstructorQuery from "../components/Faculty/facultyInstructorQuery"
import breakpoints from "../components/breakpoints"

const OurFaculty = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Our Faculty`

  if (data.facultyLeadership.edges.length === 0) {
    return (
      <Layout title={siteTitle}>
        <Seo title="All posts" />
        <p>No leadership faculty member posts found.</p>
      </Layout>
    )
  }
  if (data.facultyInstructor.edges.length === 0) {
    return (
      <Layout title={siteTitle}>
        <Seo title="All posts" />
        <p>No instructor faculty member posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Our Faculty" />
      <FacultyWrapper>
        <SectionWrapper>
          <FacultyHeader>
            <h1>Meet Our Faculty</h1>
            <h6>
              Eight Branches’ greatest asset is our faculty, which is comprised
              of practicing health professionals who share the benefits of their
              expertise with our students.
            </h6>
          </FacultyHeader>

          <h2>Leadership</h2>
          <FacultyGrid>
            <FacultyLeadershipQuery />
          </FacultyGrid>
          <h2>Instructors</h2>
          <FacultyGrid>
            <FacultyInstructorQuery />
          </FacultyGrid>
        </SectionWrapper>
      </FacultyWrapper>
      <OurPartners>
        <h1>Our Partners</h1>
        <h6>
          Eight Branches continues to support our alumni and students through
          our partnerships and connections to several groups and associations.
          We are continuously expanding our network to connect our students with
          internships and other opportunities.
        </h6>
        <LogoGrid>
          <StaticImage
            src="../images/PartnershipLogos/8BClinic.png"
            alt="Eight Branches' Clinic and Apothecary logo"
          />
          <StaticImage
            src="../images/PartnershipLogos/Council.png"
            alt="Council of Traditional Chinese Medicine & Acupuncture Schools of Ontario logo"
          />
          <StaticImage
            src="../images/PartnershipLogos/Channels.png"
            alt="Channels of Wellness logo"
          />
          <StaticImage
            src="../images/PartnershipLogos/Hillgreen.png"
            alt="Hillgreen Oncology Acupuncture & Herbs logo"
          />
          <StaticImage
            src="../images/PartnershipLogos/FTCM.png"
            alt="Federation of Traditional Chinese Medicine Colleges of Canada logo"
          />
          <StaticImage
            src="../images/PartnershipLogos/CCATCM.png"
            alt="Canadian College of Acupuncture & Traditional Chinese Medicine logo"
          />
        </LogoGrid>
      </OurPartners>
    </Layout>
  )
}

export default OurFaculty

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    facultyLeadership: allFile(
      filter: {
        sourceInstanceName: { eq: "facultyLeadership" }
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
          }
        }
      }
    }
    facultyInstructor: allFile(
      filter: {
        sourceInstanceName: { eq: "facultyInstructor" }
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
          }
        }
      }
    }
  }
`
const SectionWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15rem;

  h2 {
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 5rem;
    h2 {
      padding-top: 5rem;
      padding-bottom: 2.5rem;
    }
  }
`

const FacultyWrapper = styled.div`
  width: 100%;
  padding-top: 15rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-white);
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;
  }
`

const FacultyHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 5rem;

  h1 {
    padding-bottom: 2rem;
  }

  h6 {
    width: 60%;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 0rem;

    h1 {
      padding-bottom: 1rem;
    }
    h6 {
      width: 100%;
    }
  }
`

const FacultyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;

  @media (max-width: ${breakpoints.xl}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.s}px) {
    display: inline;
  }
`

const OurPartners = styled.div`
  background-color: var(--color-charcoal);
  color: var(--color-beige);
  padding: 7rem 0;
  margin: 0 auto;
  text-align: center;

  h6 {
    padding: 2rem 0;
    margin: 0 auto;
    width: 50%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    h6 {
      width: 75%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 5rem 0;
    h6 {
      width: 90%;
    }
  }
`

const LogoGrid = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  > * {
    margin: 1rem 2rem;
  }

  @media (max-width: 1600px) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.xxl}px) {
    width: 75%;
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 80%;
    > * {
      margin: 0.5rem 1.5rem;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 85%;

    > * {
      transform: scale(0.8);
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 100%;

    > * {
      margin: 0.5rem 1rem;
      transform: scale(1);
      max-width: 200px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    > * {
      max-width: 145px;
    }
  }
  @media (max-width: ${breakpoints.xs}px) {
    > * {
      max-width: 125px;
    }
  }
`
