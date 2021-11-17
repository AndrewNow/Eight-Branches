import React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import styled from "styled-components"
import breakpoints from "./breakpoints"
import contactInfo from "../../site/settings/contact_info.json"

export const GoogleMaps = () => {
  return (
    <MapWrapper>
      <MapFrame>
        <MapText>
          <h3>Visit Us</h3>
          <a href="https://g.page/EightBranches?share" target="blank">
            <h6>
              112 Merton St 3rd floor, <br /> Toronto, ON M4S 2Z8
            </h6>
          </a>
          <h3>Contact Us</h3>
          <a href={`mailto: ${contactInfo.email}`}>
            <h6>{contactInfo.email}</h6>
          </a>
          <a href={`tel: ${contactInfo.phone}`} alt="Main phone number">
            <h6>{contactInfo.phone}</h6>
          </a>
          <a
            href={`tel: ${contactInfo.phone2}`}
            alt="Alternative toll-free phone number"
          >
            <h6>{contactInfo.phone2}</h6>
          </a>
        </MapText>
        <Map>
          <iframe
            title="Eight Branches map"
            src="https://snazzymaps.com/embed/329034"
          />
        </Map>
      </MapFrame>
    </MapWrapper>
  )
}

export const AcademicAdvisor = () => {
  return (
    <AcademicAdvisorWrapper>
      <AcademicAdvisorText>
        <h2>
          Have any questions? <br />
          Speak with an Academic Advisor!
        </h2>
        <BookAnAppointment href="https://eightbranches.youcanbook.me/" target="_blank" rel="noreferrer">
          Book an appointment
        </BookAnAppointment>
      </AcademicAdvisorText>
      <AcademicAdvisorImage>
        <StaticImage
          src="../images/Misc/background.png"
          alt="An image of a bookshelf within our school."
          quality={100}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "100%" }}
        />
      </AcademicAdvisorImage>
    </AcademicAdvisorWrapper>
  )
}

export const ApplyNow = () => {
  return (
    <ApplyNowSection>
      <ApplyNowInner>
        <h1>Start Your Application Today</h1>
        <ReadMore to="/admissions">Apply Now</ReadMore>
      </ApplyNowInner>
    </ApplyNowSection>
  )
}

const MapWrapper = styled.div`
  background-color: var(--color-darkgreen);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2.5rem;

  @media (max-width: ${breakpoints.m}px) {
    padding: 0;
    margin: 0;
  }
`
const MapFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  border: 1px solid white;
  width: 100%;
  height: 90%;
  border-radius: 40px;

  @media (max-width: ${breakpoints.m}px) {
    padding: 0rem;
    flex-direction: column-reverse;
    border: none;
  }
`

const MapText = styled.div`
  flex-basis: 30%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--color-white);

  & > :nth-child(2) {
    margin-bottom: 5rem;
  }

  & a {
    font-size: 24px;
    line-height: 35px;
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    border: 1px solid white;
    padding: 4rem;
    margin: 1rem auto;
    text-align: left;
    align-self: flex-start;
    flex-basis: 100%;
    border-radius: 20px;
    width: 90%;

    & > :nth-child(2) {
      margin-bottom: 2.5rem;
    }
    a {
      font-size: 18px;
    }
  }
`

const Map = styled.div`
  flex-basis: 60%;
  height: 600px;

  & iframe {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 10px;
    overflow: hidden;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;

    iframe {
      height: 400px;
      border-radius: 0px;
      overflow: default;
    }
  }
`





const AcademicAdvisorWrapper = styled.div`
  width: 100%;
  background-color: var(--color-lightgreen);
  display: flex;
  position: relative;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column-reverse;
  }
`


const AcademicAdvisorText = styled.div`
  align-self: center;
  flex-basis: 50%;
  border: 1px solid white;
  border-radius: 40px;
  width: 100%;
  height: 100%;
  margin: 2rem;
  padding: 5rem 3rem;

  h2 {
    margin-bottom: 2.5rem;
    color: white;
  }
  
  @media (max-width: ${breakpoints.xl}px) {
    padding: 2.5rem 2rem;
    width: 90%;
    border-radius: 20px;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 2rem 1.5rem;
    h2 {
      margin-top: 0rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    margin: 1rem;
    text-align: center;
    align-items: center;
}
`

const AcademicAdvisorImage = styled.div`
  min-height: 400px;
  width: 50%;
  overflow-x: hidden;
  position: relative;

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    min-height: 300px;
  }
  @media (max-width: ${breakpoints.m}px) {
    min-height: auto;
  }
`

const BookAnAppointment = styled.a`
  width: 170px;
  text-align: center;
  border-radius: 10px;
  line-height: 26px;
  font-size: 18px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 0.5rem 2rem;
  padding-bottom: 0.6rem;
  text-decoration: none;
  font-family: "Matter-regular";
  cursor: pointer;
  transition: 0.25s all ease-in-out;

  &:hover {
    color: var(--color-lightgreen);
    background-color: var(--color-white);
  }
`




const ApplyNowSection = styled.section`
  background-color: var(--color-darkgreen);
  height: 67.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media (max-width: ${breakpoints.m}px) {
    padding: 1rem;
  }
`

const ApplyNowInner = styled.div`
  border: 1px solid white;
  border-radius: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & h1 {
    color: white;
    max-width: 35%;
    text-align: center;
  }

  @media (max-width: ${breakpoints.l}px) {
    border-radius: 20px;
    & h1 {
      max-width: 90%;
    }
  }
`

const ReadMore = styled(Link)`
  margin-top: 2.5rem;
  width: 170px;
  text-align: center;
  border-radius: 10px;
  line-height: 26px;
  font-size: 18px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 0.5rem 1.6rem;
  padding-bottom: 0.6rem;
  text-decoration: none;
  font-family: "Matter-regular";

  transition: 0.25s all ease-in-out;
  &:hover {
    color: var(--color-darkgreen);
    background-color: var(--color-white);
  }
`
