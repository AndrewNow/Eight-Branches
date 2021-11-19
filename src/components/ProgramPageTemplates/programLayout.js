import React from "react"
import styled from "styled-components"
import StampLogo from "../../svg/stamplogo"
import breakpoints from "../../components/breakpoints"
import { ApplyNow } from "../generalcomponents"
import { motion } from "framer-motion"
import { ProgramTableDataMap } from "./programTableDataMap"


const ProgramLayout = ({ programData }) => {
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

  return (
    <>
      <LandingSection>
        <ImageWrapper>
          <HideImage
            style={{ backgroundColor: "var(--color-sandbeige)" }}
            variants={hideImage}
            initial="visible"
            animate="hidden"
            exit="hidden"
          />
          {programData.image}
        </ImageWrapper>
        <RightSection>
          <LandingTextWrapper>
            <StampLogo fillColor="black" />
            <h1>{programData.programName}</h1>
            <h4>{programData.programType}</h4>
          </LandingTextWrapper>
        </RightSection>
      </LandingSection>
      <AboutTheProgram>
        <AboutLeft>
          <h6>About the Program</h6>
          <h3>{programData.about}</h3>
        </AboutLeft>
        <AboutRight>
          <div>
            <h6>{programData.programDescription.optionOne.title}</h6>
            <p>
              {programData.programDescription.optionOne.hours}
              <br />
              {programData.programDescription.optionOne.description}
            </p>
            <DividingLine />
          </div>
          {programData.programDescription.optionTwo && (
            <div>
              <h6>{programData.programDescription.optionTwo.title}</h6>
              <p>
                {programData.programDescription.optionTwo.hours}
                <br />
                {programData.programDescription.optionTwo.description}
              </p>
              <DividingLine />
            </div>
          )}
          {programData.programDescription.additionalInfo && (
            <div>
              <p>{programData.programDescription.additionalInfo}</p>
            </div>
          )}
        </AboutRight>
      </AboutTheProgram>

      {programData.courseData.map(programOption => {
        console.log(programOption)
        return (
          <>
            <Banner>
              <BannerInner>
                <h1>{programOption.label}</h1>
              </BannerInner>
            </Banner>
            <TableSection>
              <ProgramTableDataMap programOption={programOption} />
            </TableSection>
          </>
        )
      })}
      <ApplyNow />
    </>
  )
}

export default ProgramLayout

const LandingSection = styled.span`
  display: flex;
  align-items: center;
  background-color: var(--color-sandbeige);
  color: black;
  svg {
    color: black;
  }

  @media (max-width: ${breakpoints.xl}px) {
    flex-direction: column-reverse;
  }
`

const RightSection = styled.div`
  height: 100vh;
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

  h1,
  h6,
  svg {
    color: var(--color-black);
  }
  h4 {
    color: black;
    width: 60%;
    margin-bottom: 3rem;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 60%;
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
  height: 100vh;
  position: relative;

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

const HideImage = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const AboutTheProgram = styled.section`
  background-color: var(--color-lightestbeige);
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 5rem 3rem;
  padding-bottom: 6rem;
  margin: 0 auto;

  h6 {
    padding: 1rem 0;
  }

  @media (max-width: ${breakpoints.xl}px) {
    flex-direction: column;
    padding: 3.5rem 1.5rem;
    padding-bottom: 4rem;
  }
`

const AboutLeft = styled.div`
  flex-basis: 40%;
  padding: 0rem;
  h3 {
    font-size: 28px;
    line-height: 150%;
  }
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
  p {
    font-size: 18px;
  }
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
  background-color: var(--color-darkgreen);
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
