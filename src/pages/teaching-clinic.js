import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import breakpoints from "../components/breakpoints"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import LeafPattern from "../svg/leafPattern"
import { GoogleMaps } from "../components/generalcomponents"

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
      },
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
  const hideTCImage = {
    visible: {
      y: 0,
    },
    hidden: {
      y: "-100%",
      transition: {
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }
  const hideApptImage = {
    visible: {
      y: 0,
    },
    hidden: {
      y: "-100%",
      transition: {
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }

  // ---------- Parallax for leaf when in view ----------
  const [contentRef, inView] = useInView({
    root: null,
  })

  // ---------- PARALLAX SCROLL LOGIC ----------
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    inView && window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [inView])

  // ---------- Info & data for the "Treatments Offered" section ----------
  // see graphql query for image details
  const acupuncture = data.acupuncture.childImageSharp.gatsbyImageData
  const bodywork = data.bodywork.childImageSharp.gatsbyImageData
  const herbs = data.herbs.childImageSharp.gatsbyImageData

  const TreatmentsData = {
    acupunctureData: {
      id: 0,
      title: "Acupuncture",
      text:
        "Acupuncture involves the insertion of very thin needles through the skin at strategic points on the body. Please note that during your acupuncture treatment you may receive 15 minutes of other allied therapies such as moxibustion, cupping, guasha, or tuina depending on your treatment plan.",
      imagesrc: acupuncture,
      imagealt: "Acupuncture image",
    },
    herbsData: {
      id: 1,
      title: "TCM/Herbs",
      text:
        "This treatment in focused on Chinese Herb prescriptions. Please note that during the treatment you may receive 15 minutes of allied therapies such as acupuncture, moxibustion, cupping, guasha, and tuina depending on your treatment plan.",
      imagesrc: herbs,
      imagealt: "TCM/Herbs image",
    },
    bodyworkData: {
      id: 2,
      title: "Eastern Bodywork",
      text:
        "We provide Eastern bodywork based on concepts in Traditional Chinese Medicine (TCM) for balancing Qi and blood in the meridians.",
      imagesrc: bodywork,
      imagealt: "Bodywork/Shiatsu image",
    },
  }

  const [treatmentsImage, setTreatmentsImage] = useState({
    imagesrc: acupuncture,
    imagealt: "Acupuncture image.",
    key: "0",
  })

  // due to time constraints I had to create state for each option as creating component for each was too complicated (since the state also updates the image on hover)
  const [acupunctureExpanded, setAcupunctureExpanded] = useState(false)
  const [herbsExpanded, setHerbsExpanded] = useState(false)
  const [bodyworkExpanded, setBodyworkExpanded] = useState(false)

  const handleAcupunctureClick = () => (
    setAcupunctureExpanded(!acupunctureExpanded),
    setHerbsExpanded(false),
    setBodyworkExpanded(false),
    setTreatmentsImage({
      imagesrc: TreatmentsData.acupunctureData.imagesrc,
      imagealt: TreatmentsData.acupunctureData.imagealt,
      key: TreatmentsData.acupunctureData.id,
    })
  )
  const handleHerbsClick = () => (
    setHerbsExpanded(!herbsExpanded),
    setAcupunctureExpanded(false),
    setBodyworkExpanded(false),
    setTreatmentsImage({
      imagesrc: TreatmentsData.herbsData.imagesrc,
      imagealt: TreatmentsData.herbsData.imagealt,
      key: TreatmentsData.herbsData.id,
    })
  )

  const handleBodyworkClick = () => (
    setBodyworkExpanded(!bodyworkExpanded),
    setHerbsExpanded(false),
    setAcupunctureExpanded(false),
    setTreatmentsImage({
      imagesrc: TreatmentsData.bodyworkData.imagesrc,
      imagealt: TreatmentsData.bodyworkData.imagealt,
      key: TreatmentsData.bodyworkData.id,
    })
  )

  // ---------- INTERSECTION OBSERVER LOGIC ----------
  const [TeachingClinicRef, TeachingClinicInView] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })
  const [AppointmentRef, AppointmentInView] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <Layout title={siteTitle}>
      <Seo title="Teaching Clinic" />
      {/* <SectionWrapper>
        <ImageBanner>
          <BannerText>
            <h1>The Teaching Clinic</h1>
            <h5>
              Explore affordable, community-based treatments from our
              student-run clinic.
            </h5>
          </BannerText>
          <StaticImage
            src="../images/TeachingClinic/banner.png"
            alt="Beige background image with a tea set in the foreground."
            quality={100}
            layout="constrained"
          />
        </ImageBanner>

        <ImageBannerMobile>
          <BannerText>
            <h1>The Teaching Clinic</h1>
            <h6>
              Explore affordable, community-based treatments from our
              student-run clinic.
            </h6>
          </BannerText>

          <StaticImage
            src="../images/TeachingClinic/mobilebanner.png"
            alt="Beige background image with a bonsai in the foreground."
            quality={100}
            layout="constrained"
          />
        </ImageBannerMobile>
      </SectionWrapper> */}

      <SectionWrapper>
        <ImageBanner>
          <BannerText>
            <h1>The Teaching Clinic</h1>
            <h6>
              Explore affordable, community-based treatments from our
              student-run clinic.
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
            <h1>The Teaching Clinic</h1>
            <h6>
              Explore affordable, community-based treatments from our
              student-run clinic.
            </h6>
          </BannerText>

          <StaticImage
            src="../images/ProgramsImages/mobilebanner.png"
            alt="Beige background image with a bonsai in the foreground."
            quality={100}
            height={400}
            layout="fullWidth"
          />
        </ImageBannerMobile>
      </SectionWrapper>

      <COVIDBanner onClick={() => setOpen(!open)}>
        <h6>Read COVID-19 Update</h6>
        <AnimatePresence exitBeforeEnter>
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
                affordable price. With the recent changes in COVID-19
                statistics, our Eight Branches Teaching Clinic will be reopening
                on February 1st, 2021, and will be operating in a “community
                acupuncture” style.
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
      <HoursSection ref={TeachingClinicRef}>
        <ImageWrapper>
          <HideImageBeige
            variants={hideTCImage}
            initial="visible"
            animate={TeachingClinicInView ? "hidden" : "visible"}
            exit="hidden"
          />
          <StaticImage
            src="../images/TeachingClinic/practitioner.png"
            alt="Image of a practitioners working on a patient, who is lying on a massage table."
            quality={100}
            transformOptions={{ cropFocus: "center" }}
            imgStyle={{ objectFit: "cover" }}
            style={{ minHeight: "100%" }}
          />
        </ImageWrapper>
        <TextWrapper>
          <div>
            <h6>About the clinic</h6>
            <h2>
              Supervised by our most talented instructors, the clinc is a great
              way for our students to gain real-world expertise and knowledge in
              patient care.
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
        <TreatmentsMain>
          <TreatmentsHeaderMobile>Treatments Offered</TreatmentsHeaderMobile>
          <TreatmentsSelection>
            <TreatmentsHeader>Treatments Offered</TreatmentsHeader>
            <div>
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
                    <h6>{TreatmentsData.acupunctureData.text}</h6>
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
                    <h6>{TreatmentsData.herbsData.text}</h6>
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
                    <h6>{TreatmentsData.bodyworkData.text}</h6>
                  </Dropdown>
                )}
              </AnimatePresence>
            </div>
          </TreatmentsSelection>
          <TreatmentsImage>
            <TreatmentsImageWrapper>
              <GatsbyImage
                image={treatmentsImage.imagesrc}
                alt={treatmentsImage.imagealt}
                imgStyle={{
                  borderRadius: "30px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </TreatmentsImageWrapper>
          </TreatmentsImage>
        </TreatmentsMain>
      </TreatmentsOffered>
      <CommonConditions>
        <Inner>
          <h2>
            Common Conditions/
            <br />
            Illnesses We Treat:
          </h2>
          <List>
            <h6>
              Addiction
              <br /> Allergies
              <br /> Anxiety
              <br /> Arthritis
              <br /> Cold & Flu
              <br /> Cough
              <br /> Constipation
              <br />
            </h6>
            <h6>
              Depression
              <br />
              Diarrhea
              <br />
              Facial paralysis
              <br />
              Fatigue
              <br />
              Fibromyalgia
              <br />
              Gastritis
              <br />
              Headaches
              <br />
            </h6>
            <h6>
              Indigestion <br />
              Infertility <br />
              Immune disorders
              <br /> ​Insomnia
              <br /> Menstrual problems
              <br /> Menopause
              <br /> Nausea
            </h6>
            <h6>
              PMS
              <br />
              Sports injuries
              <br />
              Stress
              <br />
              Skin conditions
              <br />
              Sciatica
              <br />
              Urination disorders
            </h6>
          </List>
        </Inner>
      </CommonConditions>
      <BookAnAppointment ref={AppointmentRef}>
        <BookAnAppointmentInner>
          <BookAnAppointmentImage>
            <HideImageSandBeige
              variants={hideApptImage}
              initial="visible"
              animate={AppointmentInView ? "hidden" : "visible"}
              exit="hidden"
            />
            <StaticImage
              src="../images/TeachingClinic/bookanappointment.png"
              alt="Image of an empty massage table with windows in the background, lush green trees casting a calming atmosphere."
              quality={100}
              layout="constrained"
            />
          </BookAnAppointmentImage>
          <InnerText>
            <h1>Book an Appointment</h1>
            <h6>
              Explore low-cost treatments performed by our students with careful
              supervision from certified professionals.
            </h6>
            <BookNowButton>Book A Slot</BookNowButton>
          </InnerText>
        </BookAnAppointmentInner>
      </BookAnAppointment>
      <GoogleMaps />
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
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  aspect-ratio: 24/9;

  @media (max-width: ${breakpoints.m}px) {
    aspect-ratio: 16/9;
  }

  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`

const ImageBannerMobile = styled.div`
  display: none;

  @media (max-width: ${breakpoints.s}px) {
    display: block;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    max-height: 600px;
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

  @media (max-width: ${breakpoints.xl}px) {
    bottom: 2rem;
    width: 40%;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 70%;
    bottom: 1.5rem;

    & h1 {
      padding-bottom: 0.5rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    bottom: 4rem;
    width: 80%;
  }
  @media (max-width: ${breakpoints.xs}px) {
    bottom: 2.5rem;
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

  :hover {
    h6 {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding: 1rem;
  }
`

const COVIDNews = styled(motion.div)`
  width: 60%;

  & p {
    letter-spacing: 0.01rem;
    line-height: 140%;
    padding: 2.5rem 0;
    font-family: "matter-light";
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`

const HoursSection = styled.section`
  background-color: var(--color-beige);
  display: flex;
  position: relative;
  height: 105vh;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
  }
`

const HideImageBeige = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: var(--color-beige);
  top: 0;
  left: 0;
`
const ImageWrapper = styled(motion.div)`
  flex-basis: 50%;
  max-width: 50%;
  min-height: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakpoints.l}px) {
    min-height: auto;
    max-width: 100%;
    width: 100%;
  }
`

const TextWrapper = styled.div`
  flex-basis: 50%;
  /* align-self: center; */
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 0 10rem;

  h6 {
    color: var(--color-darkgreen);
    padding-bottom: 1rem;
  }

  h2 {
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto;
    flex-basis: 100%;
    width: 90%;
    padding: 2rem 0rem;

    h6 {
      padding-bottom: 0.5rem;
    }

    h2 {
      padding-bottom: 2.5rem;
    }
  }
`

const Hours = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;

  h6 {
    padding-right: 1.5rem;
    white-space: nowrap;
    color: black;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 50%;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 70%;
  }
`

const TreatmentsOffered = styled.div`
  background-color: var(--color-darkgreen);
  color: white;
  margin: 0 auto;
  text-align: center;
  width: 100%;
`

const TreatmentsHeader = styled.h1`
  padding-bottom: 5rem;
  text-align: left;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

const TreatmentsHeaderMobile = styled.h1`
  display: none;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 2.5rem;
    width: 60%;
    margin: 0 auto;
    display: inline;
    order: 1;
  }
`

const TreatmentsMain = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  /* padding: 15rem 0; */

  @media (max-width: ${breakpoints.xl}px) {
    width: 95%;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    flex-direction: column-reverse;
    padding-bottom: 5rem;
  }
`

const TreatmentsSelection = styled(motion.div)`
  /* align-self: flex-start; */
  height: 100%;
  display: block;
  width: 50%;
  margin: 5rem 0;
  padding-top: 15rem;
  padding-bottom: 25rem;
  padding-left: 2rem;
  cursor: pointer;

  @media (max-width: ${breakpoints.l}px) {
    padding-top: 2.5rem;
    padding-left: 0rem;
    margin: 0 auto;
    width: 90%;
  }
`

const TreatmentsText = styled(motion.div)`
  order: 2;
  border-bottom: 1px solid white;
  background-color: var(--color-darkgreen);
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

  @media (max-width: ${breakpoints.l}px) {
    padding-left: 0;
    h2 {
      padding: 1.5rem 0rem;
    }
  }
`

const Dropdown = styled(motion.div)`
  border-bottom: 1px solid white;
  background-color: var(--color-darkgreen);
  h6 {
    padding: 3rem;
    text-align: left;
  }
  @media (max-width: ${breakpoints.m}px) {
    h6 {
      padding: 1.5rem;
    }
  }
`

const TreatmentsImage = styled.div`
  height: auto;
  align-self: flex-start;
  position: sticky;
  top: 6rem;
  margin: 6rem 0;

  @media (max-width: ${breakpoints.m}px) {
    border-radius: 0px;
    order: 2;
  }
`

const TreatmentsImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 30px;
  width: auto;
  height: auto;
`

const CommonConditions = styled.section`
  background-color: var(--color-lightestbeige);
  width: 100%;
  padding: 3rem 0;
  @media (max-width: ${breakpoints.m}px) {
    text-align: left;
  }
`

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  border-top: 2px solid var(--color-darkgreen);
  border-bottom: 2px solid var(--color-darkgreen);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    padding: 5rem;
    color: var(--color-darkgreen);
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: ${breakpoints.m}px) {
    border-top: 1px solid var(--color-darkgreen);
    border-bottom: 1px solid var(--color-darkgreen);

    h2 {
      padding: 1rem;
      padding-left: 0rem;
      padding-bottom: 1.5rem;
      margin-left: 0rem;
      text-align: left;
    }
  }
`

const List = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5rem;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-self: end; */
    align-items: start;
    padding-bottom: 2.5rem;
  }
`

const BookAnAppointment = styled.section`
  background-color: var(--color-sandbeige);
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 4rem 0;
`

const BookAnAppointmentInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`

const BookAnAppointmentImage = styled.div`
  width: 60%;
  position: relative;
`

const HideImageSandBeige = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: var(--color-sandbeige);
  top: 0;
  left: 0;
`

const InnerText = styled.div`
  position: relative;
  z-index: 2;
  width: 45%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h1 {
    padding-bottom: 1rem;
  }
  h6 {
    width: 90%;
    margin-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 80%;
  }
`

const BookNowButton = styled.a`
  display: inline;
  cursor: pointer;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-darkgreen);
  color: var(--color-darkgreen);
  padding: 0.35rem 1.5rem;
  text-decoration: none;
  font-family: "Matter-regular";

  transition: 0.25s all ease-in-out;
  &:hover {
    color: var(--color-white);
    background-color: var(--color-darkgreen);
  }
`
