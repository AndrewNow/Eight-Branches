import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

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

  return (
    <>
      {open && <ScrollLock />}
      <FacultyPost key={slug} onClick={() => setOpen(!open)}>
        <GatsbyImage image={portraitpic} alt={title} />
        <p>{role}</p>
        <h3>{title}</h3>
        <FacultyDescription>
          <p>{excerpt}</p>
        </FacultyDescription>
        <ReadMore>Read More</ReadMore>

        {open && (
          <GreyBg>
            <Modal>
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

  return (
    <>
      {open && <ScrollLock />}

      <FacultyPost key={slug} onClick={() => setOpen(!open)}>
        <GatsbyImage image={portraitpic} alt={title} />
        <p>{role}</p>
        <h3>{title}</h3>
        <FacultyDescription>
          <p>{briefdescription}</p>
        </FacultyDescription>
        <ReadMore>Read More</ReadMore>

        {open && (
          <GreyBg>
            <Modal>
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
  transition: var(--hover-transition);

  & img {
    max-width: 550px;
  }

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
`
const GreyBg = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000025;
`

const Modal = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-sandbeige);
  border: 1px solid black;
  margin: 0 auto;
  width: 75vw;
  max-height: 70vh;
  padding: 1.5rem;
`

const ModalImage = styled.div`
  align-self: center;
  & img {
    border: 1px solid black;
    max-width: 750px;
    min-height: 600px;
  }
`

const ModalText = styled.div`
  overflow-y: scroll;
  flex-basis: 40%;
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
