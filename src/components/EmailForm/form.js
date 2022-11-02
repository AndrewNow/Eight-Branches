import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import styled from "styled-components"
import { motion } from "framer-motion"
import breakpoints from "../breakpoints"
import NavLogo from "../../svg/navLogo"

const Form = ({ landingPageType }) => {
  const successMessageAnim = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  }
  // +++++++++++++++++++++ EMAIL JS CONFIG +++++++++++++++++++++
  const form = useRef()

  const [SuccessfulSubmission, setSuccessfulSubmission] = useState(false)

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_hy8kuhd",
        "8b_landing_template",
        form.current,
        "Sl8R2Sih7-dFqBqKz"
      )
      .then(
        result => {
          setSuccessfulSubmission(true)
          console.log(result.text)
        },
        error => {
          setSuccessfulSubmission(false)
          console.log(error.text)
        }
      )
    e.target.reset()
    // reset form after submission
  }

  return (
    <ComponentWrapper>
      <LogoWrapper>
        <NavLogo />
      </LogoWrapper>
      <h4>Get your information package today!</h4>
      <EmailJSForm onSubmit={sendEmail} ref={form}>
        <WrapInputLabel>
          <label>First Name:</label>
          <Input
            type="text"
            name="first_name"
            placeholder="First name..."
            required
          />
        </WrapInputLabel>
        <WrapInputLabel>
          <label>Last Name:</label>
          <Input
            type="text"
            name="last_name"
            placeholder="Last name..."
            required
          />
        </WrapInputLabel>
        <WrapInputLabel>
          <label>Email:</label>
          <Input
            type="email"
            name="user_email"
            placeholder="Email..."
            required
          />
        </WrapInputLabel>
        <WrapInputLabel>
          <label>Phone Number:</label>
          <Input
            type="text"
            name="user_phone"
            placeholder="Phone number..."
            required
          />
        </WrapInputLabel>
        <WrapInputLabel>
          <label>Province:</label>
          <CustomSelect>
            <select name="user_province" id="province" placeholder="" required>
              <option disabled selected value>
                Select an option...
              </option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Northwest Territories</option>
              <option>Nova Scotia</option>
              <option>Nunavut</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
              <option>Yukon</option>
            </select>
          </CustomSelect>
        </WrapInputLabel>
        {/* Below is a hidden input to distinguish landing page types.
        Since we have multiple landing pages, this allows us to see which type the email came from. */}
        <input type="hidden" name="landing_page_type" value={landingPageType} />
        <span />
        <SendButton type="submit" value="Submit" />
        {SuccessfulSubmission && (
          <motion.p
            variants={successMessageAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Thank you for your interest! We'll get back to you shortly.
          </motion.p>
        )}
      </EmailJSForm>
    </ComponentWrapper>
  )
}

export default Form

const ComponentWrapper = styled.div`
  background: var(--color-beige);
  border: 1px solid var(--color-charcoal);
  border-radius: 20px;
  padding: 1.5vw 3vw;
  width: 90%;
  margin: 0 auto;
  margin-left: 0;
  h4 {
    margin: 2rem 0;
  }

  @media (max-width: ${breakpoints.xl}px) {
    h4 {
      margin: 1rem 0;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    margin: 0 auto;
    h4 {
      margin: 2rem 0;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 10px 30px;
    h4 {
      margin: 2rem auto;
      text-align: center;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

const LogoWrapper = styled.div`
  svg {
    height: 90px;
    width: auto;
    margin-top: 1rem;
    /* height: 75px; */
    /* margin-top: 1rem; */
  }
  @media (max-width: ${breakpoints.xl}px) {
    svg {
      margin-top: 0.5rem;
      height: 60px;
      max-width: 200px;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
  }

  @media (max-width: ${breakpoints.m}px) {
    svg {
      margin-top: 0.5rem;
      height: 50px;
      max-width: 200px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    svg {
      margin-top: 1rem;
    }
  }
`

const EmailJSForm = styled.form`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  label {
    font-family: "Matter-Light";
    font-size: 24px;
    line-height: 150%;
  }
  @media (max-width: ${breakpoints.xl}px) {
    label {
      font-size: 18px;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
  }
  @media (max-width: ${breakpoints.m}px) {
    display: block;
    label {
      font-size: 16px;
    }
  }
`

const WrapInputLabel = styled.span`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  label {
    padding-bottom: 0.25rem;
  }
`

const CustomSelect = styled.div`
  position: relative;
  select {
    background: white;
    color: var(--color-grey);
    width: 100%;
    padding: 7px 10px;
    border: 1px solid var(--color-darkgreen);
    box-sizing: border-box;
    font-family: "Matter-Regular";
    font-size: 16px;
    border-radius: 5px;
    ::placeholder {
      font-family: "Matter-Regular";
      font-size: 16px;
      color: var(--color-grey);
    }
  }
`

const Input = styled.input`
  /* background: none; */
  width: 100%;
  border: 1px solid var(--color-darkgreen);
  box-sizing: border-box;
  font-family: "Matter-Regular";
  font-size: 16px;
  border-radius: 5px;
  padding: 7px 10px;

  ::placeholder {
    font-family: "Matter-Regular";
    font-size: 16px;
    color: var(--color-grey);
  }
`

const SendButton = styled.input`
  background: var(--color-darkgreen);
  border: none;
  padding: 0.75rem 1.75rem;
  margin: 2rem 0;
  width: 80%;
  border-radius: 10px;
  font-family: "Matter-Regular";
  font-size: 18px;
  color: white;
  cursor: pointer;
  transition: var(--hover-transition);
  :hover {
  }

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 16px;
    margin: 1rem 0;
  }
  @media (max-width: ${breakpoints.l}px) {

    /* margin: 2rem auto; */
    /* display: block; */
  }
  @media (max-width: ${breakpoints.m}px) {
    margin: 2rem auto;
    display: block;
  }
`
