import React from 'react'
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import breakpoints from "../components/breakpoints"
// import { motion } from "framer-motion"

const Admissions = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Admissions`
  
  return (
    <Layout title={siteTitle}>
      <Seo title="Admissions" />
      <HeaderWrapper>
        <AdmissionsHeader>
          <h1>Student Admission</h1>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </AdmissionsHeader>
        <StaticImage
          src="../images/Admissions/admissionsbanner.png"
          alt="Image of practitioners checking the tongue health of a student."
          quality={100}
          imgStyle={{ objectFit: "cover" }}
          style={{ minWidth: "100%", maxHeight: "525px" }}
        />
      </HeaderWrapper>
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

export default Admissions

const HeaderWrapper = styled.section`
  width: 100%;
  padding-top: 15rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-beige);
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;
  }
`
const AdmissionsHeader = styled.div`
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