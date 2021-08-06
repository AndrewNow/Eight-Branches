import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import breakpoints from "../components/breakpoints"
import { motion, AnimatePresence } from "framer-motion"

const TeachingClinic = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Teaching Clinic`
  const [open, setOpen] = useState(false)

  const Covid = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        ease: "easeOut",
      }
    },
  }

  const dropdown = {
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        ease: "easeOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        ease: "easeOut",
      },
    },
  }

  // ---------- Info & data for the "Treatments Offered" section ----------
  const acupuncture = data.acupuncture.childImageSharp.gatsbyImageData
  const bodywork = data.bodywork.childImageSharp.gatsbyImageData
  const herbs = data.herbs.childImageSharp.gatsbyImageData

  const TreatmentsData = {
    acupunctureData: {
      id: 0,
      title: "Acupuncture",
      text: "Lorem Ipsum",
      imagesrc: acupuncture,
      imagealt: "Acupuncture image",
    },
    herbsData: {
      id: 1,
      title: "TCM/Herbs",
      text: "Lorem Ipsum",
      imagesrc: herbs,
      imagealt: "TCM/Herbs image",
    },
    bodyworkData: {
      id: 2,
      title: "Bodywork/Shiatsu",
      text: "Lorem Ipsum",
      imagesrc: bodywork,
      imagealt: "Bodywork/Shiatsu image",
    },
  }

  const [treatmentsImage, setTreatmentsImage] = useState({
    imagesrc: acupuncture,
    imagealt: "test",
    key: "0",
  })

  // due to time constraints I had to create state for each option as creating component for each was too complicated (since the state also updates the image on hover)

  const [acupunctureExpanded, setAcupunctureExpanded] = useState(false)
  const [herbsExpanded, setHerbsExpanded] = useState(false)
  const [bodyworkExpanded, setBodyworkExpanded] = useState(false)

  const handleAcupunctureClick = () => (
    setAcupunctureExpanded(!acupunctureExpanded),
    setHerbsExpanded(false),
    setBodyworkExpanded(false)
  )
  const handleHerbsClick = () => (
    setHerbsExpanded(!herbsExpanded),
    setAcupunctureExpanded(false),
    setBodyworkExpanded(false)
  )

  const handleBodyworkClick = () => (
    setBodyworkExpanded(!bodyworkExpanded),
    setHerbsExpanded(false),
    setAcupunctureExpanded(false)
  )

  return (
    <Layout title={siteTitle}>
      <Seo title="Teaching Clinic" />
      <SectionWrapper>
        <ImageBanner>
          <BannerText>
            <h1>The Teaching Clinic</h1>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing.</h5>
          </BannerText>

          <StaticImage
            src="../images/TeachingClinic/banner.png"
            alt="Beige background image with a tea set in the foreground."
            quality={100}
            layout="constrained"
          />
        </ImageBanner>
      </SectionWrapper>
      <COVIDBanner onClick={() => setOpen(!open)}>
        <h6>Read COVID-19 Update</h6>
        <AnimatePresence>
          {open && (
            <COVIDNews
              variants={Covid}
              initial="closed"
              animate={open ? "open" : "closed"}
              exit="closed"
            >
              <motion.p variants={Covid} exit="closed">
                Eight Branches continually supports the community by offering
                acupuncture, herbs, and bodywork/shiatsu treatments at an
                affordable price. With the recent changes in COVID-19 statistics, our Eight Branches Teaching Clinic will be reopening on February 1st,
                2021, and will be operating in a “community acupuncture” style.
                <br />
                <br />
                Extensive clinic safety and disinfection protocols are in place
                to ensure our site remains safe for all patients, students, and
                staff. 24-hours prior to your appointment, you will receive a
                COVID pre-screening form that must be filled out. We strongly
                encourage patients to wear loose clothing to their appointments.
                When you arrive at the clinic, we will check your temperature
                and do an in-person screening.
                <br />
                <br />
                We require all students to wear a face mask and shield and all
                patients attending clinic must wear a face mask. Waiting areas
                will be removed so we kindly ask that patients wait in their
                vehicle until their appointment time. These practices have been
                implemented in order to keep our patients, students, and staff
                members safe, as well as maintain the highest standards of
                cleanliness and ensure social distancing is practiced.
                <br />
                <br />
                Patients can now conveniently schedule their Teaching Clinic
                appointments online.{" "}
              </motion.p>
            </COVIDNews>
          )}
        </AnimatePresence>
      </COVIDBanner>

      <HoursSection>
        <ImageWrapper>
          <StaticImage
            src="../images/TeachingClinic/apothecary.jpg"
            alt="Image of two practitioners observing apothecary herbs."
            quality={100}
            transformOptions={{ cropFocus: "center" }}
            aspectRatio={1 / 1}
          />
        </ImageWrapper>
        <TextWrapper>
          <div>
            <h6>About the clinic</h6>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </h2>
          </div>
          <h6>Clinic Hours</h6>
          <Hours>
            <h6>
              Monday
              <br />
              Tuesday
              <br />
              Wednesday
              <br />
              Thursday
              <br />
              Friday
              <br />
              Saturday
              <br />
              Sunday
              <br />
            </h6>
            <h6>
              6 pm - 10 pm
              <br />
              Closed
              <br />
              6 pm - 10 pm
              <br />
              6 pm - 10 pm
              <br />
              1:30 pm - 5:30 pm
              <br />
              4 pm - 8 pm
              <br />
              Closed
            </h6>
          </Hours>
        </TextWrapper>
      </HoursSection>
      <TreatmentsOffered>
        <h1>Treatments Offered</h1>

        <TreatmentsMain>
          <TreatmentsItem>
            {/* ------------ ACUPUNCTURE TREATMENT ------------  */}
            {/* ------------ ACUPUNCTURE TREATMENT ------------  */}

            <TreatmentsText
              onHoverStart={() =>
                setTreatmentsImage({
                  imagesrc: TreatmentsData.acupunctureData.imagesrc,
                  imagealt: TreatmentsData.acupunctureData.imagealt,
                  key: TreatmentsData.acupunctureData.id,
                })
              }
              onClick={handleAcupunctureClick}
            >
              <h2>{TreatmentsData.acupunctureData.title}</h2>
              <motion.svg
                animate={{ rotate: acupunctureExpanded ? 45 : 0 }}
                width="35"
                height="35"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 16H32" stroke="white" />
                <path d="M16 0L16 32" stroke="white" />
              </motion.svg>
            </TreatmentsText>
            <AnimatePresence>
              {acupunctureExpanded && (
                <Dropdown
                  variants={dropdown}
                  initial="closed"
                  animate={acupunctureExpanded ? "expanded" : "closed"}
                  exit="closed"
                >
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </h6>
                </Dropdown>
              )}
            </AnimatePresence>

            {/* ------------ TCM/HERBS TREATMENT ------------  */}
            {/* ------------ TCM/HERBS TREATMENT ------------  */}
            <TreatmentsText
              onHoverStart={() =>
                setTreatmentsImage({
                  imagesrc: TreatmentsData.herbsData.imagesrc,
                  imagealt: TreatmentsData.herbsData.imagealt,
                  key: TreatmentsData.herbsData.id,
                })
              }
              onClick={handleHerbsClick}
            >
              <h2>{TreatmentsData.herbsData.title}</h2>
              <motion.svg
                animate={{ rotate: herbsExpanded ? 45 : 0 }}
                width="35"
                height="35"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 16H32" stroke="white" />
                <path d="M16 0L16 32" stroke="white" />
              </motion.svg>
            </TreatmentsText>
            <AnimatePresence>
              {herbsExpanded && (
                <Dropdown
                  variants={dropdown}
                  initial="closed"
                  animate={herbsExpanded ? "expanded" : "closed"}
                  exit="closed"
                >
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </h6>
                </Dropdown>
              )}
            </AnimatePresence>

            {/* ------------ BODYWORK TREATMENT ------------  */}
            {/* ------------ BODYWORK TREATMENT ------------  */}
            <TreatmentsText
              onHoverStart={() =>
                setTreatmentsImage({
                  imagesrc: TreatmentsData.bodyworkData.imagesrc,
                  imagealt: TreatmentsData.bodyworkData.imagealt,
                  key: TreatmentsData.bodyworkData.id,
                })
              }
              onClick={handleBodyworkClick}
            >
              <h2>{TreatmentsData.bodyworkData.title}</h2>
              <motion.svg
                animate={{ rotate: bodyworkExpanded ? 45 : 0 }}
                width="35"
                height="35"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 16H32" stroke="white" />
                <path d="M16 0L16 32" stroke="white" />
              </motion.svg>
            </TreatmentsText>
            <AnimatePresence>
              {bodyworkExpanded && (
                <Dropdown
                  variants={dropdown}
                  initial="closed"
                  animate={bodyworkExpanded ? "expanded" : "closed"}
                  exit="closed"
                >
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </h6>
                </Dropdown>
              )}
            </AnimatePresence>
          </TreatmentsItem>
          <TreatmentsImage>
            <GatsbyImage
              image={treatmentsImage.imagesrc}
              alt={treatmentsImage.imagealt}
            />
          </TreatmentsImage>
        </TreatmentsMain>
      </TreatmentsOffered>
    </Layout>
  )
}
export default TeachingClinic

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    acupuncture: file(
      relativePath: { eq: "TeachingClinic/treatments/acupuncture.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          quality: 100
          blurredOptions: { width: 10 }
        )
      }
    }
    bodywork: file(
      relativePath: { eq: "TeachingClinic/treatments/bodywork.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          quality: 100
          blurredOptions: { width: 10 }
          placeholder: NONE
        )
      }
    }
    herbs: file(relativePath: { eq: "TeachingClinic/treatments/herbs.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          quality: 100
          placeholder: NONE
          blurredOptions: { width: 10 }
        )
      }
    }
  }
`

const SectionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-beige);
`

const ImageBanner = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  bottom: 0;

  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

const BannerText = styled.div`
  position: absolute;
  z-index: 20;
  top: 37.5%;
  left: 12.5%;
  width: 37.5%;

  & h1 {
    padding-bottom: 0.5rem;
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

const COVIDBanner = styled(motion.div)`
  cursor: pointer;
  padding: 2rem;
  width: 100%;
  background-color: var(--color-charcoal);
  color: var(--color-beige);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const COVIDNews = styled(motion.div)`
  width: 60%;

  & p {
    letter-spacing: 0.01rem;
    line-height: 28px;
    padding-top: 2.5rem;
  }
`

const HoursSection = styled.section`
  background-color: var(--color-beige);
  display: flex;
`

const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  flex-basis: 50%;
`

const TextWrapper = styled.div`
  flex-basis: 50%;
  padding: 7.5rem;

  & h6 {
    color: var(--color-darkgreen);
    padding-bottom: 1rem;
  }
  & h2 {
    padding-bottom: 5rem;
  }
`

const Hours = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

  & h6 {
    color: black;
  }
`

const TreatmentsOffered = styled.div`
  background-color: var(--color-darkgreen);
  color: white;
  margin: 0 auto;
  text-align: center;
  width: 100%;

  & h1 {
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
`

const TreatmentsMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
  padding-bottom: 10rem;
`
const TreatmentsItem = styled(motion.div)`
  flex-basis: 50%;
  padding-left: 2rem;
  cursor: pointer;
`

const TreatmentsText = styled(motion.div)`
  border-bottom: 1px solid white;
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  & h2 {
    padding: 1.5rem;
  }

  &:first-child {
    border-top: 1px solid white;
  }
`

const Dropdown = styled(motion.div)`
  border-bottom: 1px solid white;
  
  h6 {
    padding: 3rem;
    text-align: left;
  }
`

const TreatmentsImage = styled.div`
  flex-basis: 45%;
  border-radius: 20px;
  overflow: hidden;
`
