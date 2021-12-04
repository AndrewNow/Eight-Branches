import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import breakpoints from "../components/breakpoints"
import StampLogo from "../svg/stamplogo"
import { AcademicAdvisor } from "../components/generalcomponents"
import { FaRegCalendar } from "react-icons/fa"
import { AiOutlineClockCircle } from "react-icons/ai"
import { CheckmarkSVG } from "../svg/misc"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const Admissions = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Admissions`

  const hideImage = {
    visible: {
      y: 0,
    },
    hidden: {
      y: "-100%",
      transition: {
        delay: 0.15,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }
  const FadeIn = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.15,
        ease: "easeInOut",
        duration: 1,
      },
    },
    hidden: {
      y: 40,
      opacity: 0,
    },
  }

  const RequirementFadeIn = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: "easeInOut",
        staggerChildren: 0.35,
      },
    },
  }

  // ---------- INTERSECTION OBSERVER LOGIC ----------
  const [HideImageRef, HideImageInView] = useInView({
    root: null,
    threshold: 0.4,
    triggerOnce: true,
  })
  const [Requirement1Ref, Requirement1InView] = useInView({
    root: null,
    threshold: 0.35,
    triggerOnce: true,
  })
  const [Requirement2Ref, Requirement2InView] = useInView({
    root: null,
    threshold: 0.35,
    triggerOnce: true,
  })
  const [Requirement3Ref, Requirement3InView] = useInView({
    root: null,
    threshold: 0.35,
    triggerOnce: true,
  })

  return (
    <Layout title={siteTitle}>
      <Seo title="Admissions" />
      <HeaderWrapper>
        <AdmissionsHeader variants={FadeIn} initial="hidden" animate="visible">
          <motion.h1 variants={FadeIn}>Student Admissions</motion.h1>
          <motion.h6 variants={FadeIn}>
            Interested in studying at Eight Branches? Learn about the admissions
            procedure and ensure that you meet the necessary requirements when
            sending in your application.
          </motion.h6>
        </AdmissionsHeader>
        <AdmissionsImage ref={HideImageRef}>
          <HideImage
            style={{ backgroundColor: "var(--color-lightestbeige)" }}
            variants={hideImage}
            initial="visible"
            animate={HideImageInView ? "hidden" : "visible"}
            exit="hidden"
          />
          <StaticImage
            src="../images/Admissions/admissionsbanner.png"
            alt="Image of practitioners checking the tongue health of a student."
            quality={100}
            imgStyle={{ objectFit: "cover" }}
            style={{ minWidth: "100%", maxHeight: "525px" }}
          />
        </AdmissionsImage>
      </HeaderWrapper>
      <AcademicRequirements>
        <StampLogo fillColor="white" />
        <h1>Academic Requirements</h1>
        <RequirementWrapper>
          <Requirement
            ref={Requirement1Ref}
            variants={RequirementFadeIn}
            initial="hidden"
            animate={Requirement1InView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ ease: "easeInOut" }}
          >
            <h6>
              Minimum of two years post-secondary education, or equivalent
              professional experience;
            </h6>
          </Requirement>
          <Requirement
            ref={Requirement2Ref}
            variants={RequirementFadeIn}
            initial="hidden"
            animate={Requirement2InView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ ease: "easeInOut" }}
          >
            <h6>
              If applying as a mature student, completion of an Eight Branches
              "Mature Student Test" and/or "Canadian Adult Achievement Test"
              and/or equivalent;
            </h6>
          </Requirement>
          <Requirement
            ref={Requirement3Ref}
            variants={RequirementFadeIn}
            initial="hidden"
            animate={Requirement3InView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ ease: "easeInOut" }}
          >
            <h6>
              Strong desire to learn and uphold the principles and ideologies of
              Eastern medicine.
            </h6>
          </Requirement>
        </RequirementWrapper>
      </AcademicRequirements>
      <AdmissionsSection>
        <Left>
          <h2>Admission Guideline</h2>
        </Left>
        <Right>
          <Procedure>
            Prospective students are invited to fill out the following{" "}
            <a
              href="https://eightbranches.classe365.com/form/view/Eight_Branches_Admission_Form"
              target="_blank"
              rel="noreferrer"
            >
              <strong>online admissions form</strong>
            </a>{" "}
            in order to send out their application. The form can also be
            obtained by calling the registration office, or in person if a tour
            of the facility is desired. Please ensure you read all the admission
            guidelines prior to completing the form.
          </Procedure>
          <DividingLine />
          <h3>Application Requirements</h3>
          <ul>
            <li>
              <CheckmarkSVG />
              <h6>
                Submission of properly-completed{" "}
                <a
                  href="https://eightbranches.classe365.com/form/view/Eight_Branches_Admission_Form"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>application form;</strong>
                </a>{" "}
              </h6>
            </li>
            <li>
              <CheckmarkSVG />
              <h6>
                Official transcripts from all post-secondary institutions
                attended (sent directly from the institution);
              </h6>
            </li>
            <li>
              <CheckmarkSVG />
              <h6>Non-refundable application fee;</h6>
            </li>
            <li>
              <CheckmarkSVG />
              <p>$50 for domestic students</p>
            </li>
            <li>
              <CheckmarkSVG />
              <p>$100 for international students</p>
            </li>
            <li>
              <CheckmarkSVG />
              <h6>
                Two letters of recommendation attesting to your individual
                learning capacities, skills and attitude;
              </h6>
            </li>
            <li>
              <CheckmarkSVG />
              <h6>
                Personal letter (200-300 words) detailing your abilities,
                purpose and motivation for studying at Eight Branches Academy.
              </h6>
            </li>
          </ul>
          <DividingLine />
          <h3>Application Procedure:</h3>
          <h5>
            Once all documentation and application fees are received, each
            applicant will be contacted to schedule an interview. Successful
            applicants will be notified of their acceptance by mail and
            instructed on how to proceed with enrollment.
            <br /> <br />
            Prospective students for whom English is not their primary language
            may be required to submit a TOEFL (Test of English as a Foreign
            Language) exam in which they received a passing grade, and
            demonstrate satisfactory written/oral comprehension of English.
          </h5>
          {/* <DividingLine />
          <h3>Mailing Instructions:</h3>
          <h5>
            Eight Branches Academy of Eastern Medicine
            <br />
            112 Merton Street, 3rd Floor <br />
            Toronto, ON <br />
            M4S 2Z8
            <br />
            Attention: Admissions
          </h5> */}
        </Right>
      </AdmissionsSection>
      <BannerWrapper>
        <BannerImage>
          <StaticImage
            src="../images/Admissions/bannerimage.png"
            alt="Image of a hall of practicing tables."
            quality={100}
            transformOptions={{ cropFocus: "center" }}
            imgStyle={{ objectFit: "cover" }}
            style={{ width: "100%" }}
          />
        </BannerImage>
      </BannerWrapper>
      <AdmissionsSection>
        <Left>
          <h2>Application Deadlines</h2>
        </Left>
        <Right>
          <h5>
            Applications are due thirty days prior to the commencement of term.
            Students are encouraged to apply early as space is limited. Late
            applicants will be considered on a case-by-case basis.
            <br />
            <br />
            The academic year is split into three terms: Fall, Winter, and
            Spring, each term is 15 weeks in duration.
          </h5>
          <DividingLine />
          <Term>
            <h3>Fall Term</h3>
            <TermInner>
              <TermItem>
                <FaRegCalendar size={21} />
                <DeadlineText>
                  Start Date: September 8, 2020 <br /> End Date: December 19,
                  2020
                </DeadlineText>
              </TermItem>
              <TermItem>
                <AiOutlineClockCircle size={24} />
                <DeadlineText>Applications due: August 8, 2020</DeadlineText>
              </TermItem>
            </TermInner>
          </Term>
          <DividingLine />
          <Term>
            <h3>Winter Term</h3>
            <TermInner>
              <TermItem>
                <FaRegCalendar size={21} />
                <DeadlineText>
                  Start Date: September 8, 2020 <br /> End Date: December 19,
                  2020
                </DeadlineText>
              </TermItem>
              <TermItem>
                <AiOutlineClockCircle size={24} />
                <DeadlineText>Applications due: August 8, 2020</DeadlineText>
              </TermItem>
            </TermInner>
          </Term>
          <DividingLine />
          <Term>
            <h3>Fall Term</h3>
            <TermInner>
              <TermItem>
                <FaRegCalendar size={21} />
                <DeadlineText>
                  Start Date: September 8, 2020 <br /> End Date: December 19,
                  2020
                </DeadlineText>
              </TermItem>
              <TermItem>
                <AiOutlineClockCircle size={24} />
                <DeadlineText>Applications due: August 8, 2020</DeadlineText>
              </TermItem>
            </TermInner>
          </Term>
        </Right>
      </AdmissionsSection>
      <AcademicAdvisor />
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
  background-color: var(--color-lightestbeige);
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;
  }
`
const AdmissionsHeader = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 7.5rem;
  position: relative;
  z-index: 10;

  h1 {
    padding-bottom: 2rem;
  }

  h6 {
    width: 40%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    h6 {
      width: 60%;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    h6 {
      width: 60%;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 2.5rem;

    h6 {
      width: 90%;
    }
  }

  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 4rem;
    h1 {
      padding-bottom: 1rem;
    }
    h6 {
      width: 95%;
    }
  }
`

const AdmissionsImage = styled.div`
  position: relative;
  height: 100%;
`

const HideImage = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const AcademicRequirements = styled.section`
  background-color: var(--color-darkgreen);
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.5rem 0;
  flex-direction: column;

  h1 {
    text-align: center;
    padding: 2rem;
  }
  @media (max-width: ${breakpoints.l}px) {
    padding: 3.5rem 0;
    h1 {
      padding-top: 0rem;
    }
    svg {
      max-width: 40px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
  }
`

const RequirementWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;

  h6 {
    margin: 0 auto;
    width: 90%;
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 95%;
  }

  @media (max-width: ${breakpoints.m}px) {
    /* width: 55%; */
    width: 75%;
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 95%;
  }
`

const Requirement = styled(motion.div)`
  cursor: default;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid white;
  border-radius: 20px;
  height: 200px;
  width: 35%;
  margin: 2.5rem 1.5rem;
  padding: 1rem;

  @media (max-width: ${breakpoints.xl}px) {
    height: auto;
    width: auto;
    border-radius: 20px;
    margin: 0.75rem 1rem;
    padding: 0.75rem 1rem;
  }
  @media (max-width: ${breakpoints.l}px) {
    margin: 0.5rem 0.75rem;
    padding: 0.5rem;
    border-radius: 15px;
  }
  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
    margin: 0.75rem 1rem;
    padding: 0.75rem 0.5rem;
  }
`

const AdmissionsSection = styled.section`
  background-color: var(--color-lightestbeige);
  display: flex;
  justify-content: space-evenly;
  padding-top: 10rem;
  padding-bottom: 10rem;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`

const Left = styled.div`
  position: sticky;
  align-self: flex-start;
  color: var(--color-darkgreen);
  top: 10rem;
  left: 5rem;
  width: 30%;

  @media (max-width: ${breakpoints.l}px) {
    position: relative;
    top: auto;
    left: auto;
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.s}px) {
  }
`

const Procedure = styled.h5`
  a {
    font-family: "Matter-regular";
    text-decoration: underline;
    color: var(--color-darkgreen);
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.s}px) {
    font-size: 16px;
  }
`

const DeadlineText = styled.h6`
  @media (max-width: 1560px) {
    font-size: 20px !important;
    padding-left: 0.6rem !important;
  }
  @media (max-width: ${breakpoints.xxl}px) {
    font-size: 18px !important;
    padding-top: 0.2rem;
    padding-left: 0.5rem !important;
    margin-right: 0.5rem;
  }

  @media (max-width: 1310px) {
    font-size: 17px !important;
  }

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 18px !important;
  }
  @media (max-width: ${breakpoints.l}px) {
    padding-top: 0;
    padding-left: 0.75rem !important;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 0;
  }
`

const DividingLine = styled.div`
  width: 100%;
  border-top: 1px solid #cbcbcb;
  margin-top: 2.5rem;
  padding-bottom: 2.5rem;
`

const Right = styled.div`
  width: 45%;

  a {
    font-family: "Matter-regular";
    text-decoration: underline;
    color: var(--color-darkgreen);
    cursor: pointer;
  }
  
  h3 {
    color: var(--color-darkgreen);
  }

  h5 {
    margin-top: 1rem;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
    padding: 0.5rem 1rem;
    padding-left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;

    h6,
    p {
      padding-left: 1.5rem;
    }

    svg {
      transform: translateY(0.5rem);
      min-width: 31px;
      min-height: 31px;
    }

    :nth-child(4),
    :nth-child(5) {
      padding-left: 7rem;

      p {
        font-size: 22px;
        font-family: "Matter-regular";
      }
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.l}px) {
    position: relative;
    width: 90%;
    margin: 0 auto;

    li {
      padding: 0.25rem 0rem;

      h6,
      p {
        padding-left: 1rem;
      }

      svg {
        transform: translateY(0.5rem);
        max-width: 18px;
        max-height: 18px;
      }

      :nth-child(4),
      :nth-child(5) {
        padding-left: 2.5rem;
        padding-top: 0rem;
        padding-bottom: 0rem;

        p {
          padding-left: 1.5rem;
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h5,
    h6 {
      font-size: 18px;
    }
  }
`

const BannerWrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: var(--color-lightestbeige);
`

const BannerImage = styled.div`
  width: 69%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: ${breakpoints.xxl}px) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 95%;
  }
`

const Term = styled.div``

const TermInner = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
  }
`

const TermItem = styled.div`
  display: flex;
  justify-content: space-between;

  h6 {
    padding-left: 1rem;
  }
  svg {
    transform: translateY(0.5rem);
  }

  @media (max-width: ${breakpoints.l}px) {
    padding-bottom: 1rem;
    justify-content: flex-start;

    svg {
      align-self: flex-start;
      min-width: 22px;
      min-height: 22px;
      width: 22px;
      height: 22px;
      transform: translateY(0.1rem);
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    svg {
      margin-top: 0.15rem;
      width: 22px;
      height: 22px;
    }
  }
`
