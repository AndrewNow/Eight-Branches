import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import breakpoints from "../components/breakpoints"
import { motion } from "framer-motion"

const PrivacyPolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const FadeIn = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Privacy Policy" />
      <Bg>
        <TextWrapper variants={FadeIn} initial="hidden" animate="visible">
          <h1>Privacy Policy</h1>

          <h3>Eight Branches Privacy Policy</h3>
          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
            eightbranches.ca (the “Site”).
          </p>
          <h3>Personal Information We Collect</h3>
          <p>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information.”
            <br />
            <br />
            We collect Device Information using the following technologies:
          </p>
          <ul>
            <li>
              “Cookies” are data files that are placed on your device or
              computer and often include an anonymous unique identifier. For
              more information about cookies, and how to disable cookies, visit{" "}
              <a
                href="http://www.allaboutcookies.org"
                target="_blank"
                rel="noreferrer"
              >
                http://www.allaboutcookies.org.
              </a>
            </li>
            <li>
              “Log files” track actions occurring on the Site, and collect data
              including your IP address, browser type, Internet service
              provider, referring/exit pages, and date/time stamps.
            </li>
            <li>
              “Web beacons,” “tags,” and “pixels” are electronic files used to
              record information about how you browse the Site.
            </li>
          </ul>
          <p>
            Additionally when you make a contact inquiry through our site, we
            collect certain information from you, including your full name,
            email address, and phone number. We refer to this information as
            “Contact Information.”
            <br />
            <br />
            When we talk about “Personal Information” in this Privacy Policy, we
            are talking both about Device Information and Contact Information.
          </p>

          <h3>How Do We Use Your Personal Information?</h3>
          <p>
            We use the information that we collect generally to fulfill any
            requests placed through the Site (including processing your contact
            information). Additionally, we use this information to:
          </p>
          <ul>
            <li>Communicate with you;</li>
            <li>Screen for potential risk or fraud; and</li>
            <li>
              When in line with the preferences you have shared with us, provide
              you with information or advertising relating to our products or
              services.
            </li>
            <li>
              We use the Device Information that we collect to help us screen
              for potential risk and fraud (in particular, your IP address), and
              more generally to improve and optimize our Site (for example, by
              generating analytics about how our customers browse and interact
              with the Site, and to assess the success of our marketing and
              advertising campaigns).
            </li>
          </ul>
          <h3>Sharing Your Personal Information</h3>
          <p>
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. For example, we use
            Google Analytics to help us understand how you use the Site--you can
            read more about how Google uses your Personal Information{" "}
            <a
              href="https://www.google.com/intl/en/policies/privacy/"
              target="_blank"
              rel="noreferrer"
            >
              here.
            </a>{" "}
            You can also opt-out of Google Analytics{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
            >
              here.
            </a>
            <br />
            <br />
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights.
          </p>
          <h3>Behavioral Advertising</h3>
          <p>
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you. For more information about how targeted
            advertising works, you can visit the{" "}
            <a
              href="
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            "
              target="_blank"
              rel="noreferrer"
            >
              Network Advertising Initiative’s (“NAI”) educational page.
            </a>
            <br />
            <br />
            You can opt out of targeted advertising by clicking the links below:
            <ul>
              <li>
                <a
                  href="https://www.google.com/settings/ads/anonymous"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google
                </a>
              </li>
              <li>
                <a
                  href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bing
                </a>
              </li>
            </ul>
          </p>
          <p>
            Additionally, you can opt out of some of these services by visiting{" "}
            <a
              href="http://optout.aboutads.info/"
              target="_blank"
              rel="noreferrer"
            >
              the Digital Advertising Alliance’s opt-out portal.
            </a>
          </p>
          <h3>Do Not Track</h3>
          <p>
            Please note that we do not alter our Site’s data collection and use
            practices when we see a Do Not Track signal from your browser.
          </p>
          <h3>Data Retention</h3>
          <p>
            When you place an inquiry through the Site, we will maintain your
            Contact Information for our records unless and until you ask us to
            delete this information.
          </p>
          <h3>Changes</h3>
          <p>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </p>
          <h3>Contact Us</h3>
          <p>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at{" "}
            <a href="mailto:marketing@eightbranches.ca">
              marketing@eightbranches.ca
            </a>
            .{" "}
          </p>
        </TextWrapper>
      </Bg>
    </Layout>
  )
}

export default PrivacyPolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Bg = styled.div`
  background-color: var(--color-lightestbeige);
  /* height: 95vh; */
  text-align: center;
  color: var(--color-darkgreen);
`

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  height: 100%;
  padding-bottom: 10vh;
  h1 {
    margin-top: 10vh;
    line-height: 130%;
  }
  p,
  ul {
    color: var(--color-black);
    width: 55%;
    font-family: "matter-light";
  }
  li {
    font-family: "matter-light";
  }
  h3 {
    width: 55%;
    padding-top: 3rem;
    padding-bottom: 1rem;
    text-align: left;
  }
  a {
    color: var(--color-darkgreen);
  }

  @media (max-width: ${breakpoints.l}px) {
    p, ul, h3 {
      width: 70%;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    p, ul, h3 {
      width: 80%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    p, ul, h3 {
      width: 90%;
    }
  }
`
