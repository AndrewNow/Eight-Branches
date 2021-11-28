import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { useInView } from "react-intersection-observer"
import breakpoints from "../../components/breakpoints"
import LeafPattern from "../../svg/leafPattern"
import StampLogo from "../../svg/stamplogo"
import { motion } from "framer-motion"
import { ApplyNow, AcademicAdvisor } from "../../components/generalcomponents"

const OurPrograms = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Our Programs`

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
  const [Card1Ref, Card1InView] = useInView({
    root: null,
    triggerOnce: true,
    threshold: 0.75,
  })
  const [Card2Ref, Card2InView] = useInView({
    root: null,
    triggerOnce: true,
    threshold: 0.75,
  })
  const [Card3Ref, Card3InView] = useInView({
    root: null,
    triggerOnce: true,
    threshold: 0.75,
  })

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
      y: 0,
      transition: {
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.15,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: 25,
      opacity: 0,
    },
  }
  const fadeCards = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  }

  const hideImage = {
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

  return (
    <Layout title={siteTitle}>
      <Seo title="Our Programs" />

      <SectionWrapper>
        <ImageBanner>
          <BannerText variants={fadeIn} initial="hidden" animate="visible">
            <motion.h1 variants={fadeIn}>Our Programs</motion.h1>
            <motion.h5 variants={fadeIn}>
              Our academy offers a rich experience across a wide gamut of
              academic environments. Explore our programs to find one that suits
              you best.
            </motion.h5>
          </BannerText>
          <StaticImage
            src="../../images/TeachingClinic/banner.png"
            alt="Beige background image with a tea set in the foreground."
            quality={100}
            layout="constrained"
          />
        </ImageBanner>

        <ImageBannerMobile>
          <BannerText variants={fadeIn} initial="hidden" animate="visible">
            <motion.h1 variants={fadeIn}>Our Programs</motion.h1>
            <motion.h5 variants={fadeIn}>
              Our academy offers a rich experience across a wide gamut of
              academic environments. Explore our programs to find one that suits
              you best.
            </motion.h5>
          </BannerText>

          <StaticImage
            src="../../images/TeachingClinic/mobilebanner.png"
            alt="Beige background image with a bonsai in the foreground."
            quality={100}
            layout="constrained"
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
              <BorderRadius>
                <HideImage
                  style={{ backgroundColor: "var(--color-beige)" }}
                  variants={hideImage}
                  initial="visible"
                  animate={sectionInView1 ? "hidden" : "visible"}
                  exit="hidden"
                />
                <StaticImage
                  src="../../images/Programs/programs-acupuncture.png"
                  alt="A practitioner carefully performs acupuncture on a patient's foot."
                  quality={100}
                  transformOptions={{ cropFocus: "center" }}
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                />
              </BorderRadius>
            </ProgramImage>
            <ProgramText
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView1 ? "visible" : "hidden"}
              ref={SectionRef1}
            >
              <motion.h1 variants={fadeIn}>
                Acupuncture & <br />
                Moxibustion
              </motion.h1>
              <motion.h6 variants={fadeIn}>
                This program qualifies graduates to write the Pan-Canadian
                regulatory examinations and to become a Registered Acupuncturist
                (R.Ac).
              </motion.h6>
              <ProgramLink
                variants={fadeIn}
                to="/programs/diploma-programs/acupuncture-and-moxibustion"
              >
                <LinkWrapper variants={fadeIn}>
                  <p>View Program</p>{" "}
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
              </ProgramLink>
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
              <BorderRadius>
                <HideImage
                  style={{ backgroundColor: "var(--color-brown)" }}
                  variants={hideImage}
                  initial="visible"
                  animate={sectionInView2 ? "hidden" : "visible"}
                  exit="hidden"
                />
                <StaticImage
                  src="../../images/Programs/programs-cupping.png"
                  alt="A practitioner performs cupping on a patient with 6 cups on their back."
                  quality={100}
                  transformOptions={{ cropFocus: "center" }}
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                />
              </BorderRadius>
            </ProgramImage>
            <ProgramText
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView2 ? "visible" : "hidden"}
              ref={SectionRef2}
            >
              <motion.h1 variants={fadeIn}>
                Traditional Chinese <br /> Medicine Practitioner
              </motion.h1>
              <motion.h6 variants={fadeIn}>
                This program qualifies graduates to write the Pan-Canadian
                regulatory examinations and to become a Registered Acupuncturist
                (R.Ac) and a Registered TCM Practitioner (R.TCMP).
              </motion.h6>
              <ProgramLink
                variants={fadeIn}
                to="/programs/diploma-programs/TCMP"
              >
                <LinkWrapper variants={fadeIn}>
                  <p>View Program</p>{" "}
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
              </ProgramLink>
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
              <BorderRadius>
                <HideImage
                  style={{ backgroundColor: "var(--color-sandbeige)" }}
                  variants={hideImage}
                  initial="visible"
                  animate={sectionInView3 ? "hidden" : "visible"}
                  exit="hidden"
                />
                <StaticImage
                  src="../../images/Programs/programs-tcmp.png"
                  alt="A professor leads a group in Tai Chi in one of our salons."
                  quality={100}
                  transformOptions={{ cropFocus: "center" }}
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                />
              </BorderRadius>
            </ProgramImage>
            <ProgramText
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView3 ? "visible" : "hidden"}
              ref={SectionRef3}
            >
              <motion.h1 variants={fadeIn}>
                Post-Graduate <br />
                Advanced TCMP
              </motion.h1>
              <motion.h6 variants={fadeIn}>
                This one year post-graduate program is available for R. TCMPs to
                qualify as an Advanced Registered Traditional Chinese Medicine
                Practitioner or Doctor of Traditional Chinese Medicine,
                according to different Provincial designations.
              </motion.h6>
              <ProgramLink
                variants={fadeIn}
                to="/programs/diploma-programs/advanced-TCMP"
              >
                <LinkWrapper variants={fadeIn}>
                  <p>View Program</p>{" "}
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
              </ProgramLink>
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
                This program qualifies graduates to apply for professional
                membership as a Registered Herbalist (RH) with the Ontario
                Herbalists Association and to write the Pan-Canadian regulatory
                examinations. Herbology graduates can become a Registered TCM
                Herbalist. (R.TCM.H)
              </motion.h6>
              <ProgramLink
                variants={fadeIn}
                to="/programs/diploma-programs/herbology"
              >
                <LinkWrapper variants={fadeIn}>
                  <p>View Program</p>{" "}
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
              </ProgramLink>
            </ProgramText>
            <ProgramImage
              variants={fadeIn}
              initial="hidden"
              animate={sectionInView4 ? "visible" : "hidden"}
            >
              <BorderRadius>
                <HideImage
                  style={{ backgroundColor: "var(--color-salmon)" }}
                  variants={hideImage}
                  initial="visible"
                  animate={sectionInView4 ? "hidden" : "visible"}
                  exit="hidden"
                />
                <StaticImage
                  src="../../images/Programs/programs-herbology.png"
                  alt="A picture of a collection of herbs and jars from our Apothecary."
                  quality={100}
                  transformOptions={{ cropFocus: "center" }}
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                />
              </BorderRadius>
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
          <Card
            variants={fadeCards}
            ref={Card1Ref}
            animate={Card1InView ? "visible" : "hidden"}
            intial="hidden"
          >
            <CardText>
              <h4>Acupuncture & Moxibustion Certificate</h4>
              <CertificateLink to="/programs/certificate-programs/acupuncture-and-moxibustion">
                <CertificateLinkWrapper>
                  <p>View Program</p>
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
                </CertificateLinkWrapper>
              </CertificateLink>
            </CardText>
            <CardImage>
              <StaticImage
                src="../../images/Programs/certificate-acupuncture.png"
                alt="A picture of a prosthetic foot with illustrated acupuncture points."
                quality={100}
                transformOptions={{ cropFocus: "center" }}
                imgStyle={{ objectFit: "cover" }}
                style={{ width: "100%", height: "100%" }}
              />
            </CardImage>
          </Card>
          <Card
            variants={fadeCards}
            ref={Card2Ref}
            animate={Card2InView ? "visible" : "hidden"}
            intial="hidden"
          >
            <CardText>
              <h4>Certificate in Asian Bodywork Therapy</h4>
              <CertificateLink to="/programs/certificate-programs/asian-bodywork-therapy">
                <CertificateLinkWrapper>
                  <p>View Program</p>
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
                </CertificateLinkWrapper>
              </CertificateLink>
            </CardText>
            <CardImage>
              <StaticImage
                src="../../images/Programs/certificate-bodywork.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
                quality={100}
                transformOptions={{ cropFocus: "center" }}
                imgStyle={{ objectFit: "cover" }}
                style={{ width: "100%", height: "100%" }}
              />
            </CardImage>
          </Card>
          <Card
            variants={fadeCards}
            ref={Card3Ref}
            animate={Card3InView ? "visible" : "hidden"}
            intial="hidden"
          >
            <CardText>
              <h4>TCM Preparatory Certificate</h4>
              <CertificateLink to="/programs/certificate-programs/tcm-preparatory-certificate">
                <CertificateLinkWrapper>
                  <p>View Program</p>
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
                </CertificateLinkWrapper>
              </CertificateLink>
            </CardText>
            <CardImage>
              <StaticImage
                src="../../images/Programs/certificate-tcm.png"
                alt="A practitioner performs moxibustion, igniting a bundle of herbs."
                quality={100}
                transformOptions={{ cropFocus: "center" }}
                imgStyle={{ objectFit: "cover" }}
                style={{ width: "100%", height: "100%" }}
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
      filter: { relativeDirectory: { eq: "Programs" } }
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

const BannerText = styled(motion.div)`
  position: absolute;
  z-index: 20;
  top: 25%;
  left: 10%;
  width: 37.5%;
  h1 {
    white-space: nowrap;
    padding-bottom: 0.5rem;
  }

  h5 {
    margin-top: 1rem;
    width: 100%;
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 50%;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    left: 5vw;
    top: 30vw;

    h1 {
      padding-bottom: 0.5rem;
    }
    h5 {
      font-size: 17px;
      margin-top: 0rem;
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

  :nth-child(1) {
    background-color: var(--color-beige);
  }
  :nth-child(2) {
    background-color: var(--color-brown);
  }
  :nth-child(3) {
    background-color: var(--color-sandbeige);
  }
  :nth-child(4) {
    background-color: var(--color-salmon);
  }
  @media (max-width: ${breakpoints.xl}px) {
    max-height: 85vh;
  }

  @media (max-width: ${breakpoints.l}px) {
    min-height: 50vh;
  }

  @media (max-width: ${breakpoints.m}px) {
    max-height: none;
    height: auto;
    padding: 2rem 0;
  }
`

const HideImage = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const ProgramInner = styled.div`
  width: 90%;
  padding: 6rem 0;
  align-self: center;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
  position: relative;

  :nth-child(odd) {
    flex-direction: row-reverse;
  }
  :nth-child(even) {
    flex-direction: row;
  }

  @media (max-width: ${breakpoints.xl}px) {
    /* padding: 5rem 1rem; */
    justify-content: space-between;
  }
  @media (max-width: ${breakpoints.l}px) {
    /* padding: 2.5rem 0; */
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
    padding: 2rem 0;
    :nth-child(odd) {
      flex-direction: column;
    }
    :last-child {
      flex-direction: column-reverse;
    }
  }
`

const ProgramImage = styled(motion.div)`
  z-index: 2;
  position: relative;
  overflow: hidden;
  margin: 0.5rem;
  height: 100%;
  @media (max-width: ${breakpoints.xxl}px) {
    margin: 1rem;
    max-width: 35vw;
    align-self: center;
  }
  @media (max-width: ${breakpoints.xl}px) {
    max-width: 40vw;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin: 2rem 0;
    max-width: 100%;
  }
`

const ProgramText = styled(motion.div)`
  max-width: 45%;
  padding-top: 1rem;
  position: relative;
  z-index: 2;
  align-self: center;

  h1 {
    padding-bottom: 1rem;
    white-space: nowrap;
  }

  h6 {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    h1 {
      font-size: 50px;
      line-height: 58px;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    max-width: 50%;
    padding-top: 0rem;
    /* margin: 0 2rem; */
    margin-left: 2rem;

    h1 {
      font-size: 40px;
      line-height: 130%;
    }
    h6 {
      max-width: 90%;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    h1 {
      white-space: normal;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    max-width: 100%;
    padding-top: 0rem;
    margin: 0;

    h1 {
      font-size: 45px;
    }

    h6 {
      max-width: 90%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      font-size: 36px;
    }
    h6 {
      max-width: 100%;
    }
  }
`

const ProgramLink = styled(Link)`
  color: black;
  text-decoration: none;
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

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`

const SvgWrapper = styled.div`
  position: absolute;
  top: -85%;
  left: 50px;
  z-index: 1;
  filter: opacity(0.5);
  :nth-child(2) {
    right: 50px;
    left: auto;
    transform: rotate(360deg);
  }
  @media (max-width: ${breakpoints.m}px) {
    scale: 0.85;
    left: -15%;
    top: -20%;
    :nth-child(2) {
      right: -5%;
      left: auto;
      top: -10%;
      transform: rotate(360deg);
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    left: -50%;
    top: -50%;
    scale: 0.75;

    :nth-child(2) {
      right: -50%;
      top: -10%;
      left: auto;
      transform: rotate(360deg);
    }
  }
`

const BorderRadius = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
  }
  @media (max-width: ${breakpoints.s}px) {
    border-radius: 5px;
  }
`

const CertificateLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline;
  margin-top: 2rem;
  cursor: pointer;

  p {
    color: black;
  }
  @media (max-width: ${breakpoints.l}px) {
    margin-top: 0;
  }
`

const CertificateLinkWrapper = styled.div`
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
      padding-top: 0;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`

const CertificatePrograms = styled.section`
  background-color: var(--color-lightestbeige);
  padding-top: 10rem;

  p:last-child {
    font-size: 22px;
    line-height: 34px;
    margin: 0 auto;
    padding-top: 1rem;
    padding-bottom: 10rem;
    width: 80%;
    color: #00000060;

    strong {
      color: #00000090;
    }
  }

  @media (max-width: 1600px) {
    p:last-child {
      width: 85%;
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding-top: 7rem 0;
    p:last-child {
      font-size: 18px;
      line-height: 150%;
      width: 90%;
      padding-bottom: 7rem;
      strong {
        font-size: 18px;
        line-height: 150%;
      }
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    p:last-child {
      width: 95%;
      font-size: 16px;
      strong {
        font-size: 16px;
      }
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 5rem;

    p:last-child {
      width: 90%;
      padding-bottom: 5rem;
    }
    svg {
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

  h1 {
    padding-top: 2rem;
    padding-bottom: 5rem;
  }
  svg {
    fill: black;
    filter: brightness(0);
    /* filter: invert(1); */
  }

  @media (max-width: ${breakpoints.m}px) {
    h1 {
      padding-top: 0rem;
    }
  }
`

const Cards = styled(motion.div)`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 5rem;

  @media (max-width: 1600px) {
    width: 85%;
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.l}px) {
    /* width: 95%; */
  }

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    padding-bottom: 0rem;
    width: 70%;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

const Card = styled(motion.div)`
  overflow: hidden;
  width: 32%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 3;
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
  }
`

const CardText = styled.div`
  padding: 2.5rem 2rem;
  height: 50%;
  h4 {
    width: 90%;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    h4 {
      font-size: 26px;
      line-height: 130%;
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h4 {
      font-size: 23px;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    padding: 3.5rem 1.5rem;
    h4 {
      font-size: 30px;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 1.5rem;
    h4 {
      font-size: 25px;
    }
  }
`

const CardImage = styled.div`
  border-top: 1px solid black;
  overflow: hidden;
  position: relative;
  z-index: 2;
  height: 50%;
  @media (max-width: ${breakpoints.m}px) {
    height: 250px;
  }
`
