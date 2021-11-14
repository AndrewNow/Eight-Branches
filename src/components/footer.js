import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import contactInfo from "../../site/settings/contact_info.json"
import FooterStamp from "../svg/footerStamp"
import { SiTiktok, SiInstagram, SiLinkedin } from "react-icons/si"
import MailchimpFormContainer from "./Mailchimp/mailchimpFormContainer.js"
import breakpoints from "./breakpoints.js"
import { motion, AnimatePresence } from "framer-motion"

const Footer = () => {
  const [visible, setVisible] = useState(false)

  const footerRef = useRef()
  // logic to hide the footer unless it is within a certain threshold from the top of the viewport
  // this is to prevent it appearing when an iOS user triggers a "scroll bounce" when scrolling to the top of the page, revealing the footer behind the <body>
  const showFooter = () => {
    setVisible(true)
  }
  const hideFooter = () => {
    setVisible(false)
  }

  useEffect(() => {
    const onScroll = () => {
      const footerDivCoords = footerRef.current.getBoundingClientRect()
      // only show the footer if it is within 1800px from the top of the viewport
      if (footerDivCoords.y <= 1800) {
        showFooter()
      } else {
        hideFooter()
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [showFooter, hideFooter])

  // fade it in with an animation

  const fadeIn = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.35,
        transition: "easeOut",
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.35,
        transition: "easeOut",
      },
    },
  }

  return (
    <div ref={footerRef}>
      <AnimatePresence>
        {visible && (
          <FooterComponent
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <FlexWrapper>
              <Newsletter>
                <div>
                  <h4>Sign up for our newsletter</h4>
                  <MailchimpFormContainer />
                </div>
                <FooterStamp />
              </Newsletter>
              <MobileWrapper>
                <Website>
                  <h4>Website</h4>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                  <Link to="/programs">
                    <p>Programs</p>
                  </Link>
                  <Link to="/bulletin-board">
                    <p>Bulletin Board</p>
                  </Link>
                  <Link to="/campus">
                    <p>Campus</p>
                  </Link>
                  <Link to="/our-faculty">
                    <p>Our Faculty</p>
                  </Link>
                  <Link to="/teaching-clinic">
                    <p>Teaching Clinic</p>
                  </Link>
                  <Link
                  // to="/studentlogin"
                  >
                    <p>Student Login</p>
                  </Link>
                  <Link to="/admissions">
                    <p>Admissions</p>
                  </Link>
                  {/*
                  <Link to="/careers">
                    <p>Careers</p>
                  </Link> */}
                </Website>

                <GetInTouch>
                  <h4>Get in touch</h4>
                  <a href={`mailto: ${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                  <br />
                  <br />
                  <a href={`tel: ${contactInfo.phone}`} alt="Main phone number">
                    {contactInfo.phone}
                  </a>
                  <br />
                  <a
                    href={`tel: ${contactInfo.phone2}`}
                    alt="Toll-free phone number"
                  >
                    {contactInfo.phone2}
                  </a>
                  <br />
                  <br />

                  <a
                    href="https://goo.gl/maps/c1mUx1rVNAh6rBZ59"
                    target="blank"
                  >
                    {contactInfo.address.street}
                  </a>
                  <br />
                </GetInTouch>
              </MobileWrapper>
              <StayConnected>
                <FooterStampMobile>
                  <FooterStamp />
                </FooterStampMobile>
                <div>
                  <h4>Stay connected</h4>
                  <a
                    href="https://www.instagram.com/eightbranches/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiTiktok size={27} />
                  </a>
                  <a
                    href="https://www.instagram.com/eightbranches/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiInstagram size={27} />
                  </a>
                  <a
                    href="https://ca.linkedin.com/company/eight-branches-academy-of-eastern-medicine"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiLinkedin size={27} />
                  </a>
                </div>
              </StayConnected>
            </FlexWrapper>
          </FooterComponent>
        )}
      </AnimatePresence>
    </div>
  )
}

const FooterComponent = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  z-index: 0;
  height: var(--footer-height);
  width: 100%;
  background-color: var(--color-beige);

  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
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

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
    padding-top: 8rem;

    & h4 {
      font-family: "Matter-regular";
      color: #2b2b2b;
      padding-bottom: 0.75rem;
    }

    & a {
      font-size: 16px;
    }
  }
`

const Newsletter = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: ${breakpoints.xl}px) {
    margin-right: 1rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    & > :nth-child(2) {
      display: none;
    }
    padding-bottom: 2.5rem;
  }
`

const Website = styled.section`
  color: var(--color-black);
  text-decoration: none;
`

const GetInTouch = styled.section`
  flex-basis: 3rem;
  & a {
    cursor: pointer;
  }
`

const StayConnected = styled.section`
  white-space: nowrap;
  & a {
    padding-right: 1.5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 1.5rem;
  }
`

const FooterStampMobile = styled.div`
  display: none;
  @media (max-width: ${breakpoints.m}px) {
    display: flex;
  }
`

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.xxl}px) {
    justify-content: space-evenly;
  }
  @media (max-width: ${breakpoints.l}px) {
    justify-content: space-between;
  }
  @media (max-width: ${breakpoints.m}px) {
    flex-direction: row;
  }
`

export default Footer
