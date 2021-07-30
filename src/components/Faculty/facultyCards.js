import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

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
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
        <p>{role}</p>
        <h3>{title}</h3>
        <FacultyDescription>
          <p>{excerpt}</p>
        </FacultyDescription>
        <ReadMore>Read More</ReadMore>
        <AnimatePresence>
          {open && (
            <GreyBg
              onClick={() => setOpen(!open)}
              variants={greybgfadein}
              initial="hidden"
              animate={open ? "visible" : "hidden"}
              exit="hidden"
            >
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
            </GreyBg>
          )}
        </AnimatePresence>
      </FacultyPost>
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
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
        <p>{role}</p>
        <h3>{title}</h3>
        <FacultyDescription>
          <p>{briefdescription}</p>
        </FacultyDescription>
        <ReadMore>Read More</ReadMore>
        <AnimatePresence>

        {open && (
          <GreyBg
          onClick={() => setOpen(!open)}
          variants={greybgfadein}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          exit="hidden"
          >
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
          </GreyBg>
        )}
        </AnimatePresence>
      </FacultyPost>
    </>
  )
}

const FacultyPost = styled.article`
  border: 1px solid black;
  justify-self: center;
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 620px;
  margin-bottom: 5rem;
  padding: 1.5rem 2rem;
  transition: all ease-out 0.55s;

  & h3 {
    /* white-space: nowrap; */
    /* overflow-x: hidden; */
  }

  & p {
    padding-top: 1rem;
    letter-spacing: 0.01rem;
  }

  & h6 {
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    transition: var(--hover-transition);

    &:hover {
      color: var(--color-orange);
    }
  }

  &:hover {
    background-color: var(--color-lightestgreen);
    cursor: pointer;

    & button {
      text-decoration: underline;
    }
  }
`


const PortraitThumbnail = styled.div`
  & img {
    max-width: 550px;
  }
`

const FacultyDescription = styled.small`
  display: flex;
  justify-content: space-between;

  & p {
    padding-top: 0.75rem;
    font-size: 16px;
    color: #3a3a3a;
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
`
const GreyBg = styled(motion.div)`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000035;
`

const Modal = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-sandbeige);
  border: 1px solid black;
  margin: 0 auto;
  width: 85vw;
  max-height: 70vh;
  padding: 1.5rem;

  cursor: default;
`

const ModalImage = styled.div`
  align-self: center;
  & img {
    border: 1px solid black;
    max-width: 850px;
    min-height: 600px;
  }
`

const ModalText = styled.div`
  overflow-y: scroll;
  flex-basis: 50%;
  padding-left: 2rem;
  padding-right: 5rem;

  & p {
    font-family: "Matter-light";
  }

  & a {
    font-size: 18px;
    text-decoration: underline;
    color: var(--color-darkgreen);
    font-family: "Matter-light";
  }
`

const GetInTouch = styled.a`
  display: inline-block;
  padding-top: 1rem;
  font-size: 18px;
  text-decoration: underline;
  color: var(--color-orange) !important;
  font-family: "Matter-light";
`
