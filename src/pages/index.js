import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import StampLogo from '../svg/stamplogo'
// import ebgreen from '../images/ebgreen.png'

const HomePage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <LandingSection>
        <LeftSection>
          {/* <img src={ebgreen} /> */}
        </LeftSection>
        <RightSection>
          <LandingTextWrapper>
            <StampLogo />
            <h1>
              Ancient Wisdom, <br /> Modern Practice
            </h1>
            <h6>
              Eight Branches offers treatment to the public, hosting classes and
              workshops promoting restoration of health and prevention of
              illness.
            </h6>
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
  background-color: var(--color-lightgreen);
  align-items: center;
`

const LeftSection = styled.div`
  height: 100%;
  width: 50%;
  background-size: cover;
  background-position: 50%;
  background-image: url("https://i.imgur.com/apf9Pf7.png");
  `

const RightSection = styled.div`
  height: 100%;
  width: 50vw;
`

const LandingTextWrapper = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  & h1,
  h6 {
    color: var(--color-white);
  }
  & h6 {
    width: 60%;
    margin-bottom: 3rem;
  }
  
  & h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
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
  padding: .5rem 1.6rem;
  text-decoration: none;
  font-family: "Matter-regular";

  transition: .25s all ease-in-out;
  &:hover {
    color: var(--color-darkgreen);
    background-color: var(--color-white);
  }
`




export default HomePage