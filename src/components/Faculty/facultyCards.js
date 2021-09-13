import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"
import { GrClose } from "react-icons/gr"
import breakpoints from "../breakpoints"

export const FacultyLeadership = ({
  title,
  role,
  excerpt,
  bio,
  email,
  slug,
  portraitpic,
}) => {
  const [open, setOpen] = useState(false)

  //lock scroll on background when Modal is open
  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = "hidden"
      return () => (document.body.style.overflow = originalStyle)
    }, [])
  }

  const ScrollLock = () => {
    useLockBodyScroll()
    return <></>
  }

  const fadeIn = {
    hidden: {
      y: 75,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.15,
        duration: 0.25,
      },
    },
  }
  const greybgfadein = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
      {open && <ScrollLock />}
      <FacultyPost key={slug} onClick={() => setOpen(!open)}>
        <PortraitThumbnail>
          <GatsbyImage image={portraitpic} alt={title} />
        </PortraitThumbnail>
        <TextWrapper>
          <p>{role}</p>
          <h3>{title}</h3>
          <FacultyDescription>
            <p>{excerpt}</p>
          </FacultyDescription>
          <ReadMore>Read More</ReadMore>
        </TextWrapper>
      </FacultyPost>
      <AnimatePresence>
        {open && (
          <GreyBg
            onClick={() => setOpen(!open)}
            variants={greybgfadein}
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            exit="hidden"
          >
            <ModalWrapper>
              <MobileCloseButton>
                <p>Close</p>
                <GrClose
                  size={25}
                  style={{ color: "white" }}
                  onClick={() => setOpen(!open)}
                />
              </MobileCloseButton>
              <Modal
                variants={fadeIn}
                initial="hidden"
                animate={open ? "visible" : "hidden"}
                exit="hidden"
              >
                <ModalImage>
                  <GatsbyImage image={portraitpic} alt={title} />
                </ModalImage>
                <ModalText>
                  <p>{role}</p>
                  <h3>{title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: bio }} />
                  <GetInTouch href={`mailto:${email}`}>Get in touch</GetInTouch>
                </ModalText>
              </Modal>
            </ModalWrapper>
          </GreyBg>
        )}
      </AnimatePresence>
    </>
  )
}

export const FacultyInstructor = ({
  title,
  role,
  briefdescription,
  bio,
  email,
  slug,
  portraitpic,
}) => {
  const [open, setOpen] = useState(false)

  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = "hidden"
      return () => (document.body.style.overflow = originalStyle)
    }, [])
  }

  const ScrollLock = () => {
    useLockBodyScroll()
    return <></>
  }

  const fadeIn = {
    hidden: {
      y: 75,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.15,
        duration: 0.25,
      },
    },
  }
  const greybgfadein = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
      {open && <ScrollLock />}
      <FacultyPost key={slug} onClick={() => setOpen(!open)}>
        <PortraitThumbnail>
          <GatsbyImage image={portraitpic} alt={title} />
        </PortraitThumbnail>
        <TextWrapper>
          <p>{role}</p>
          <h3>{title}</h3>
          <FacultyDescription>
            <p>{briefdescription}</p>
          </FacultyDescription>
          <ReadMore>Read More</ReadMore>
        </TextWrapper>
      </FacultyPost>
      <AnimatePresence>
        {open && (
          <GreyBg
            onClick={() => setOpen(!open)}
            variants={greybgfadein}
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            exit="hidden"
          >
            <ModalWrapper>
              <MobileCloseButton>
                <p>Close</p>
                <GrClose size={25} onClick={() => setOpen(!open)} />
              </MobileCloseButton>
              <Modal
                variants={fadeIn}
                initial="hidden"
                animate={open ? "visible" : "hidden"}
                exit="hidden"
              >
                <ModalImage>
                  <GatsbyImage image={portraitpic} alt={title} />
                </ModalImage>
                <ModalText>
                  <p>{role}</p>
                  <h3>{title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: bio }} />
                  <GetInTouch href={`mailto:${email}`}>Get in touch</GetInTouch>
                </ModalText>
              </Modal>
            </ModalWrapper>
          </GreyBg>
        )}
      </AnimatePresence>
    </>
  )
}

const FacultyPost = styled.article`
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
  z-index: 5;
  overflow: hidden;
  justify-self: center;
  display: flex;
  flex-direction: column;
  width: auto;
  height: 620px;
  margin-bottom: 5rem;
  transition: all ease-out 0.55s;

  p {
    padding-top: 1rem;
    letter-spacing: 0.01rem;
  }
  h6 {
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    transition: var(--hover-transition);
    :hover {
      color: var(--color-orange);
    }
  }
  :hover {
    background-color: var(--color-lightestgreen);
    cursor: pointer;
    button {
      text-decoration: underline;
    }
  }
  @media (max-width: ${breakpoints.xxl}px) {
    height: auto;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: auto;
    margin-bottom: 2.5rem;
  }
`

const TextWrapper = styled.div`
  border-top: 1px solid black;
  padding: 1rem 1.5rem;
`

const PortraitThumbnail = styled.div`
  img {
    max-width: 550px;
  }
`

const FacultyDescription = styled.small`
  display: flex;
  justify-content: space-between;
  p {
    padding-top: 0.75rem;
    font-size: 18px;
    line-height: 28px;
    color: #3a3a3a;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`

const ReadMore = styled.button`
  align-self: flex-start;
  margin-top: 1.2rem;
  font-family: "Matter-light";
  font-size: 18px;
  border: none;
  background: none;
  cursor: pointer;
  padding-left: 0;
`

const GreyBg = styled(motion.div)`
  position: fixed;
  z-index: 99998;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000035;
  backdrop-filter: blur(2px);
`

const ModalWrapper = styled.div`
  overflow-y: default;
  z-index: 99999;
  top: 10vh;
  /* pointer-events: none; */
  @media (max-width: ${breakpoints.m}px) {
    overflow-y: scroll;
  }
`

const Modal = styled(motion.div)`
  position: relative;
  z-index: 99999;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 85vw;
  max-height: 70vh;
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px solid black;
  background-color: var(--color-sandbeige);
  cursor: default;
  pointer-events: none;
  a {
    pointer-events: auto;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 2.5rem;
    padding: 1rem;
    padding-bottom: 2.5rem;
    flex-direction: column;
    width: 93vw;
    max-height: none;
    overflow: scroll;
  }
`

const ModalImage = styled.div`
  border-radius: 5px;
  align-self: center;
  border: 1px solid black;
  max-width: 50%;
  img {
    min-height: 65vh;
    border-radius: 5px;
    max-width: 50%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    max-width: 50%;
    min-height: 90%;
  }
  @media (max-width: ${breakpoints.m}px) {
    /* min-height: 100px; */
    /* overflow: hidden; */
    max-width: 100%;
    img {
      min-height: 100%;
      max-width: 100%;
      height: auto;
    }
  }
`

const ModalText = styled.div`
  overflow-y: scroll;
  flex-basis: 50%;
  padding-left: 2rem;
  padding-right: 5rem;
  pointer-events: auto;
  & p {
    font-family: "Matter-light";
    padding-top: 1rem;
  }
  & a {
    font-size: 22px;
    line-height: 34px;
    text-decoration: underline;
    color: var(--color-darkgreen);
    font-family: "Matter-light";
  }
  @media (max-width: ${breakpoints.xl}px) {
    a {
      font-size: 18px;
      line-height: 31px;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    /* overflow-y: visible; */
    flex-basis: 100%;
    margin-top: 1rem;
    padding-left: 0;
    padding-right: 0;
    overflow-y: default;
    a {
      font-size: 16px;
      line-height: 27px;
    }
  }
`

const GetInTouch = styled.a`
  display: inline-block;
  padding-top: 1rem;
  font-size: 18px;
  text-decoration: underline;
  color: var(--color-orange) !important;
  font-family: "Matter-light";
  @media (max-width: ${breakpoints.m}px) {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    margin: 0 auto;
  }
`

const MobileCloseButton = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10vh;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  filter: invert(1);
  cursor: pointer;
  & svg {
    margin-bottom: 1rem;
    color: white !important;
  }
  & p {
    margin-bottom: 1rem;
    padding-top: 0;
    padding-right: 0.25rem;
    &:hover {
      text-decoration: underline;
    }
  }
`
