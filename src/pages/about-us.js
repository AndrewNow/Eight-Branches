import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import styled from "styled-components"
import breakpoints from "../components/breakpoints"
import { motion } from "framer-motion"
import EightBranches from "../components/AboutUsComponents/eight-branches"

const AboutUs = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `About Us`
  const [expand, setExpand] = useState(false)
  console.log(expand)

  const clickExpand = {
    hidden: {
      height: "300px",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
      height: "auto",
    },
  }
  const hideGradient = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    visible: {
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
      opacity: 1,
    },
  }

  return (
    <Layout title={siteTitle}>
      <Seo title="About Us" />
      <SectionWrapper>
        <ImageBanner>
          <BannerText>
            <h1>
              Ancient Wisdom, <br /> Modern Practice
            </h1>
          </BannerText>

          <StaticImage
            src="../images/AboutUs/banner.png"
            alt="Beige background image with an in the foreground."
            quality={100}
            layout="fullWidth"
          />
        </ImageBanner>

        <ImageBannerMobile>
          <BannerText>
            <h1>
              Ancient Wisdom, <br /> Modern Practice
            </h1>
          </BannerText>

          <StaticImage
            src="../images/AboutUs/banner.png"
            alt="Beige background image with an in the foreground."
            quality={100}
            // height={530}
            layout="fullWidth"
          />
        </ImageBannerMobile>
      </SectionWrapper>
      <AboutUsSection>
        <Left>
          <StaticImage
            src="../images/AboutUs/moxibustion.png"
            alt="A practitioner performing moxibustion and acupuncture on a patient."
            quality={100}
          />
        </Left>
        <Right>
          <h3>
            Eight Branches Academy of Eastern Medicine is a Toronto Acupuncture
            School that offers students a comprehensive education with a firm
            foundation in Traditional Chinese Medicine.
          </h3>
          <HiddenText
            variants={clickExpand}
            initial="hidden"
            animate={expand ? "visible" : "hidden"}
          >
            <Gradient
              variants={hideGradient}
              intial="visible"
              animate={expand ? "hidden" : "visible"}
            />
            <p>
              Before Eight Branches Academy was established, it was Kokoro Dojo
              – a peaceful sanctuary tucked behind the residences and busy
              storefronts in the heart of Toronto's Annex. Kokoro Dojo was a Zen
              Shiatsu school focused on the teachings of Shizuto Masunaga. These
              teachings emphasize personal development through meditation, Qi
              Gong, and extensive hands-on practice, in addition to technical
              instruction.
              <br />
              <br />
              After studying Traditional Chinese Medicine in British Columbia,
              Toronto and Chengdu, our founder was introduced to Kokoro Dojo,
              and found that its principals of practice coincided profoundly
              with his own. He established a thriving practice and became an
              integral part of the Dojo, teaching TCM theory and diagnosis; in
              addition to completing the Zen Shiatsu program himself. ​ Dondrub
              and Diana, who managed the Dojo and clinic, welcomed Ryan’s idea
              of incorporating a technical acupuncture program that included the
              Zen and Taoist principals of the Masunaga traditions. ​ The
              program was received enthusiastically by its students, and driven
              by an increased demand for comprehensive TCM instruction in
              Toronto, Eight Branches Academy of Eastern Medicine was
              established. With the addition of other treatment modalities and
              practitioners, the Dojo developed into Eight Branches Healing Arts
              Centre.
            </p>
          </HiddenText>
          <ExpandButton onClick={() => setExpand(!expand)}>
            <p>Read more</p>
            <motion.svg
              animate={expand ? { rotate: "180deg" } : { rotate: 0 }}
              initial={{ rotate: 0 }}
              width="13"
              height="8"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.115 -6.94355e-07L9 6.79892L15.885 -9.24496e-08L18 2.09312L9 11L-9.14931e-08 2.09312L2.115 -6.94355e-07Z"
                fill="black"
              />
            </motion.svg>
          </ExpandButton>
        </Right>
      </AboutUsSection>
      <SectionWrapper>
        <EightBranches />
      </SectionWrapper>
    </Layout>
  )
}

export default AboutUs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
  color: white;

  & h1 {
    padding-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    bottom: 5rem;

    & h1 {
      padding-bottom: 0.5rem;
    }
  }
  @media (max-width: ${breakpoints.xs}px) {
    bottom: 2.5rem;
  }
`

const AboutUsSection = styled.section`
  background-color: var(--color-sandbeige);
  display: flex;
  justify-content: space-around;
  padding: 10rem 0;
`

const Left = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin-left: 5rem;
`
const Right = styled.div`
  flex-basis: 50%;

  h3 {
    padding-top: 7rem;
    padding-bottom: 2.5rem;
  }
`

const HiddenText = styled(motion.div)`
  width: 65%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  p {
    font-family: "Matter-light";
  }
`

const Gradient = styled(motion.div)`
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(253, 250, 241, 0) 30%,
      #efe9dd 90%
    );
  }
`

const ExpandButton = styled.button`
  width: 65%;
  border: none;
  background: none;
  position: relative;
  padding-top: 1rem;
  margin: 0 auto;
  z-index: 5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding-right: 0.5rem;
    font-size: 20px;
  }
`
