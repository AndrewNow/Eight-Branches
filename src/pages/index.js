import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import styled from "styled-components"
import StampLogo from "../svg/stamplogo"
import breakpoints from "../components/breakpoints"
import { motion } from "framer-motion"

const HomePage = () => {
  const hideImage = {
    visible: {
      height: "100%",
    },
    hidden: {
      height: 0,
      transition: {
        delay: 0.5,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }
  const FadeIn = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.25,
        duration: 1,
      },
    },
  }

  return (
    <Layout>
      <Seo title="Home" />
      <LandingSection>
        <LeftSection>
          <HideImage
            variants={hideImage}
            initial="visible"
            animate="hidden"
            exit="hidden"
          />
          <StaticImage
            src="../images/HomePage/tea.png"
            quality={100}
            transformOptions={{ cropFocus: "right" }}
            imgStyle={{ objectFit: "cover" }}
            style={{ minHeight: "100%" }}
          />
        </LeftSection>
        <RightSection>
          <LandingTextWrapper
            variants={FadeIn}
            initial="hidden"
            animate="visible"
          >
            <StampLogo />
            <motion.h1 varaints={FadeIn}>
              Ancient Wisdom, <br />
              Modern Practice
            </motion.h1>
            <motion.h6 variants={FadeIn}>
              Eight Branches offers treatment to the public, hosting classes and
              workshops promoting restoration of health and prevention of
              illness.
            </motion.h6>
          </LandingTextWrapper>
        </RightSection>
      </LandingSection>
      <AboutUsSection>
        <AboutUsTextWrapper>
          <h6>About Us</h6>
          <h3>
            Eight Branches Academy of Eastern Medicine is a Toronto Acupuncture
            School that offers students a comprehensive education with a firm
            foundation in Traditional Chinese Medicine.
          </h3>
          <ReadMore to="/aboutus">Read More</ReadMore>
        </AboutUsTextWrapper>
      </AboutUsSection>
    </Layout>
  )
}

const LandingSection = styled.span`
  height: 100vh;
  display: flex;
  background-color: var(--color-beige);
  align-items: center;
`

const LeftSection = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  /* min-height: 100%; */
  overflow-x: hidden;

  @media (max-width: ${breakpoints.xl}px) {
    min-height: auto;
    max-width: 100%;
    width: 100%;
  }
`

const HideImage = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: var(--color-beige);
  top: 0;
  left: 0;
`

const RightSection = styled.div`
  height: 100%;
  width: 50vw;
`

const LandingTextWrapper = styled(motion.div)`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h1,
  h6 {
    color: var(--color-darkgreen);
  }
  & h6 {
    width: 60%;
    margin-bottom: 3rem;
  }

  & h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  svg {
    /* fill: var(--color-darkgreen); */
  }
`

const AboutUsSection = styled.div`
  background-color: var(--color-darkgreen);
  color: var(--color-white);
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const AboutUsTextWrapper = styled.div`
  width: 80%;

  & p {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 1rem;
  }
  & h4 {
    margin-bottom: 3rem;
  }
`

const ReadMore = styled(Link)`
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 0.5rem 1.6rem;
  text-decoration: none;
  font-family: "Matter-regular";

  transition: 0.25s all ease-in-out;
  &:hover {
    color: var(--color-darkgreen);
    background-color: var(--color-white);
  }
`

export default HomePage
