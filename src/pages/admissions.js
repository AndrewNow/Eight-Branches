import React, { useState, useEffect, useRef } from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import breakpoints from "../components/breakpoints"
import StampLogo from "../svg/stamplogo"
import { AcademicAdvisor } from "../components/GeneralComponents/generalcomponents"
// import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaRegCalendar } from "react-icons/fa"
import { AiOutlineClockCircle } from "react-icons/ai"

const Admissions = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Admissions`

  // ---------- Parallax for image banner when in view ----------
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

  const ArrowSVG = () => (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6247 20.8862L6.23846 15.4999L4.4043 17.3212L11.6247 24.5416L27.1247 9.04159L25.3035 7.22034L11.6247 20.8862Z"
        fill="black"
      />
    </svg>
  )

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
      <AcademicRequirements>
        <StampLogo />
        <h1>Academic Requirements</h1>
        <RequirementWrapper>
          <Requirement>
            <h6>
              2 years post-secondary education, or relevant professional
              experience;
            </h6>
          </Requirement>
          <Requirement>
            <h6>
              Demonstrated understanding of the responsibilities associated with
              being a health care professional;
            </h6>
          </Requirement>
          <Requirement>
            <h6>
              Strong desire to learn the principles and ideologies of Eastern
              medicine.
            </h6>
          </Requirement>
        </RequirementWrapper>
      </AcademicRequirements>
      <AdmissionsSection>
        <Left>
          <h2>Admission Procedure</h2>
        </Left>
        <Right>
          <h5>
            Prospective students are invited to download the application form
            below and submit it by mail. The form can also be obtained by
            calling the registration office, or in person if a tour of the
            facility is desired.
          </h5>
          <DividingLine />
          <h3>Application Requirements</h3>
          <ul>
            <li>
              <ArrowSVG />
              <h6>Submission of properly-completed application form</h6>
            </li>
            <li>
              <ArrowSVG />
              <h6>
                Official transcripts from all post-secondary institutions
                attended (sent directly from the institution)
              </h6>
            </li>
            <li>
              <ArrowSVG />
              <h6>Non-refundable application fee;</h6>
            </li>
            <li>
              <ArrowSVG />
              <p>$50 for domestic students</p>
            </li>
            <li>
              <ArrowSVG />
              <p>$100 for international students</p>
            </li>
            <li>
              <ArrowSVG />
              <h6>
                Two letters of recommendation attesting to your individual
                learning capacities, skills and attitude
              </h6>
            </li>
            <li>
              <ArrowSVG />
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
          <DividingLine />
          <h3>Mailing Instructions:</h3>
          <h5>
            Eight Branches Academy of Eastern Medicine
            <br />
            112 Merton Street, 3rd Floor <br />
            Toronto, ON <br />
            M4S 2Z8
            <br />
            Attention: Admissions
          </h5>
        </Right>
      </AdmissionsSection>
      <BannerWrapper>
        <BannerInner
          style={{
            transform: `translate3D(0, calc(15vh - ${offsetY * 0.1}px), 0)`,
          }}
          ref={contentRef}
        
        >
          <StaticImage
            src="../images/Admissions/groupbanner.jpg"
            alt="Image of an instructor leading a Tai-Chi class."
            quality={100}
            style={{ minHeight: "100%" }}
            imgStyle={{ objectFit: "cover", margin: "0 auto" }}
            transformOptions={{ cropFocus: "center" }}
          />
        </BannerInner>
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
                <h6>
                  Start Date: September 8, 2020 <br /> End Date: December 19,
                  2020
                </h6>
              </TermItem>
              <TermItem>
                <AiOutlineClockCircle size={24} />
                <h6>Applications due: August 8, 2020</h6>
              </TermItem>
            </TermInner>
          </Term>
          <DividingLine />
          <Term>
            <h3>Winter Term</h3>
            <TermInner>
              <TermItem>
                <FaRegCalendar size={21} />
                <h6>
                  Start Date: September 8, 2020 <br /> End Date: December 19,
                  2020
                </h6>
              </TermItem>
              <TermItem>
                <AiOutlineClockCircle size={24} />
                <h6>Applications due: August 8, 2020</h6>
              </TermItem>
            </TermInner>
          </Term>
          <DividingLine />
          <Term>
            <h3>Fall Term</h3>
            <TermInner>
              <TermItem>
                <FaRegCalendar size={21} />
                <h6>
                  Start Date: September 8, 2020 <br /> End Date: December 19,
                  2020
                </h6>
              </TermItem>
              <TermItem>
                <AiOutlineClockCircle size={24} />
                <h6>Applications due: August 8, 2020</h6>
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

const AcademicRequirements = styled.section`
  background-color: var(--color-darkgreen);
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.5rem 0;
  flex-direction: column;

  & h1 {
    text-align: center;
    padding: 2rem;
  }
  @media (max-width: ${breakpoints.l}px) {
    padding: 1.5rem 0;
    h1 {
      padding-top: 0rem;
    }
    svg {
      max-width: 40px;
    }
  }
  `

const RequirementWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  
  @media (max-width: ${breakpoints.xl}px) {
    width: 90%;
    flex-direction: column;
  }

`

const Requirement = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid white;
  border-radius: 30px;
  height: 200px;
  width: 35%;
  margin: 2.5rem;
  padding: 1.5rem;

  @media (max-width: ${breakpoints.xl}px) {
    height: auto;
    width: auto;
    border-radius: 20px;
    margin: 0.75rem 1rem;
    padding: 0.75rem 1rem;
  }
`

const AdmissionsSection = styled.section`
  background-color: #fdfaf1;
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
`

const DividingLine = styled.div`
  width: 100%;
  border-top: 1px solid #cbcbcb;
  margin-top: 2.5rem;
  padding-bottom: 2.5rem;
`

const Right = styled.div`
  width: 45%;

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

    &:nth-child(4),
    :nth-child(5) {
      padding-left: 7rem;

      p {
        font-size: 22px;
        font-family: "Matter-regular";
      }
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    position: relative;
    width: 90%;
    margin: 0 auto;

    & li {
      padding: 0.25rem 0rem;

      h6,
      p {
        padding-left: 1rem;
      }

      & svg {
        transform: translateY(0.5rem);
        max-width: 18px;
        max-height: 18px;
      }

      &:nth-child(4),
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
`

const BannerWrapper = styled.div`
  width: 100%;
  height: 55vh;
  overflow: hidden;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  position: relative;

  @media (max-width: ${breakpoints.xl}px) {
    height: 45vh;
  }
  @media (max-width: ${breakpoints.l}px) {
    height: 35vh;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: 30vh;
  }
  @media (max-width: ${breakpoints.s}px) {
    height: 23vh;
  }
`
const BannerInner = styled.div`
  position: absolute;
  width: 100vmax;
  top: 0;
  
  @media (max-width: ${breakpoints.xl}px) {
    padding-top: 5rem;
    width: 100%;
  }
  @media (max-width: ${breakpoints.l}px) {
    padding-top: 7rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding-top: 7rem;
  }
  @media (max-width: ${breakpoints.s}px) {
    padding-top: 8rem;
    width: 110%;
  }
  @media (max-width: ${breakpoints.xs}px) {
    padding-top: 12rem;
    width: 130%;
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
    padding-bottom: .5rem;
    justify-content: flex-start;
    
    svg {
      align-self: flex-start;
      min-width: 22px;
      min-height: 22px;
      transform: translateY(.1rem);
    }  
  }
`
