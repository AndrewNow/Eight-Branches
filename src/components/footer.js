import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import contactInfo from "../../site/settings/contact_info.json"
import FooterStamp from "../svg/footerStamp"
import { SiTiktok, SiInstagram, SiLinkedin } from "react-icons/si"
import MailchimpFormContainer from './Mailchimp/mailchimpFormContainer.js'

const Footer = () => {
  return (
    <FooterComponent>
      <FlexWrapper>
        <Newsletter>
          <div>
            <h4>Sign up for our newsletter</h4>
            <MailchimpFormContainer />
          </div>
          <FooterStamp />
        </Newsletter>

        <Website>
          <h4>Website</h4>
          <Link to="/aboutus">
            <p>About Us</p>
          </Link>
          <Link to="/news">
            <p>News</p>
          </Link>
          <Link to="/programs">
            <p>Programs</p>
          </Link>
          <Link to="/admissions">
            <p>Admissions</p>
          </Link>
          <Link to="/teachingclinic">
            <p>Teaching Clinic</p>
          </Link>
          <Link to="/our-faculty">
            <p>Meet Our Faculty</p>
          </Link>
          <Link to="/studentlogin">
            <p>Student Login</p>
          </Link>
          <Link to="/applynow">
            <p>Apply Now</p>
          </Link>
          <Link to="/careers">
            <p>Careers</p>
          </Link>
        </Website>

        <GetInTouch>
          <h4>Get in touch</h4>
          <a href={`mailto: ${contactInfo.email}`}>{contactInfo.email}</a>
          <br />
          <br />
          <a href={`tel: ${contactInfo.phone}`} alt="Main phone number">
            {contactInfo.phone}
          </a>
          <br />
          <a href={`tel: ${contactInfo.phone2}`} alt="Toll-free phone number">
            {contactInfo.phone2}
          </a>
          <br />
          <br />

          <a href="https://goo.gl/maps/c1mUx1rVNAh6rBZ59" target="blank">
            {contactInfo.address.street}
          </a>
          <br />
        </GetInTouch>
        <StayConnected>
          <h4>Stay connected</h4>
          <a href="https://www.instagram.com/eightbranches/" target="blank">
            <SiTiktok size={27} />
          </a>
          <a href="https://www.instagram.com/eightbranches/" target="blank">
            <SiInstagram size={27} />
          </a>
          <a
            href="https://ca.linkedin.com/company/eight-branches-academy-of-eastern-medicine"
            target="blank"
          >
            <SiLinkedin size={27} />
          </a>
        </StayConnected>
      </FlexWrapper>
    </FooterComponent>
  )
}

const FooterComponent = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 0;
  height: var(--footer-height);
  width: 100%;
  background-color: var(--color-beige);
`

const FlexWrapper = styled.span`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;

  & a,
  p {
    color: var(--color-black);
    font-size: 18px;
    line-height: 28px;
    text-decoration: none;
    font-family: "Matter-light";
    transition: var(--hover-transition);

    &:hover {
      color: var(--color-orange);
    }
  }

  & p {
    padding-bottom: 0.5rem;
  }  

  & h4 {
    padding-bottom: 1.5rem;
  }
`


const Newsletter = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Website = styled.section`
  color: var(--color-black);
  text-decoration: none;
`

const GetInTouch = styled.section`
  flex-basis: 3rem;
  cursor: pointer;
`

const StayConnected = styled.section`
  & a {
    padding-right: 1.5rem;
  }
`
export default Footer
