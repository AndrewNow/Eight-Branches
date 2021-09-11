import React, { useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import breakpoints from "../../../breakpoints"

export const YearOneTermOne = ({ programData }) => {
  const expandAnimation = {
    visible: {
      height: "auto",
      transition: {
        ease: "easeIn",
      },
    },
    hidden: {
      height: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  }

  const children = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  }

  const [expand, setExpand] = useState(false)
  const termOne =
    programData.acupunctureMoxibustion.sixSemester[0].yearOne[0].termOne

  return termOne.map(term => (
    <>
      <Header
        onClick={() => setExpand(!expand)}
        animate={{
          backgroundColor: expand
            ? "var(--color-lightestgreen)"
            : "var(--color-beige)",
        }}
        whileHover={{ filter: "brightness(.95)" }}
      >
        <h5>Term 1 - Spring</h5>
        <motion.svg
          animate={{ rotate: expand ? 45 : 0 }}
          width="35"
          height="35"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 16H32" stroke="white" />
          <path d="M16 0L16 32" stroke="white" />
        </motion.svg>
      </Header>
      <AnimatePresence exitBeforeEnter>
        {expand && (
          <Term
            key="term1index"
            variants={expandAnimation}
            initial="hidden"
            animate={expand ? "visible" : "hidden"}
            exit="hidden"
          >
            <TermHeader variants={children}>
              <h6>CODE</h6>
              <h6>COURSE TITLE</h6>
              <h6>COURSE TYPE</h6>
              <h6>CREDITS</h6>
            </TermHeader>
            {term.courses.map((course, i) => (
              <TermInfo key={i} variants={children}>
                <p>{course.code}</p>
                <p>{course.title}</p>
                <p>{course.type}</p>
                <p>{course.credits}</p>
              </TermInfo>
            ))}
            <motion.h6 variants={expandAnimation}>
              Total Term Credits: 27 credits
            </motion.h6>
          </Term>
        )}
      </AnimatePresence>
    </>
  ))
}

export const YearOneTermTwo = ({ programData }) => {
  const expandAnimation = {
    visible: {
      height: "auto",
      transition: {
        ease: "easeIn",
      },
    },
    hidden: {
      height: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  }
  const children = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  }

  const [expand, setExpand] = useState(false)
  const termTwo =
    programData.acupunctureMoxibustion.sixSemester[0].yearOne[1].termTwo

  return termTwo.map(term => (
    <>
      <Header
        onClick={() => setExpand(!expand)}
        animate={{
          backgroundColor: expand
            ? "var(--color-lightestgreen)"
            : "var(--color-beige)",
        }}
        whileHover={{ filter: "brightness(.95)" }}
      >
        <h5>Term 2 - Spring</h5>
        <motion.svg
          animate={{ rotate: expand ? 45 : 0 }}
          width="35"
          height="35"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 16H32" stroke="white" />
          <path d="M16 0L16 32" stroke="white" />
        </motion.svg>
      </Header>
      <AnimatePresence exitBeforeEnter={true}>
        {expand && (
          <Term
            key="term2index"
            variants={expandAnimation}
            initial="hidden"
            animate={expand ? "visible" : "hidden"}
            exit="hidden"
          >
            <TermHeader variants={children}>
              <h6>CODE</h6>
              <h6>COURSE TITLE</h6>
              <h6>COURSE TYPE</h6>
              <h6>CREDITS</h6>
            </TermHeader>
            {term.courses.map((course, i) => (
              <TermInfo key={i}>
                <p>{course.code}</p>
                <p>{course.title}</p>
                <p>{course.type}</p>
                <p>{course.credits}</p>
              </TermInfo>
            ))}
            <motion.h6 variants={children}>
              Total Term Credits: 27 credits
            </motion.h6>
          </Term>
        )}
      </AnimatePresence>
    </>
  ))
}

const Header = styled(motion.div)`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;

  &:hover {
    cursor: pointer;
    background-color: var(--color-lightestgreen);
  }

  svg {
    filter: invert(1);
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding: 1rem 1.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 1rem;
  }
`

const Term = styled(motion.div)`
  background-color: white;
  border-bottom: 1px solid black;
  overflow-y: hidden;
  h6 {
    padding: 2.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 0.25rem;

    h6 {
      padding: 1.5rem 2rem;
      &:last-child {
        text-align: center;
      }
    }
  }
`

const TermInfo = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr;
  justify-items: space-between;
  margin: 0 auto;
  padding: 0rem 2.5rem;

  @media (max-width: ${breakpoints.m}px) {
    padding: 0rem;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    border-bottom: 1px dotted var(--color-salmon);

    p {
      padding: .5rem .25rem;
      font-size: 11px;
      line-height: 16px;
      padding-bottom: 1rem;
      align-self: center;
  
      &:nth-child(3) {
        width: 90%;
      }
    }
  }
`

const TermHeader = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr;
  justify-items: space-between;
  background-color: white;
  margin: 0 auto;
  padding: 0rem 2.5rem;

  h6 {
    padding: 2.5rem 0;
    padding-bottom: 1rem;
    color: var(--color-darkgreen);
    /* :last-child {
      justify-self: end;
    } */
  }

  @media (max-width: ${breakpoints.m}px) {
    padding: 0rem;
    grid-template-columns: 1fr 2fr 2fr 1fr;

    h6 {
      padding: 0.5rem 0.25rem;
      font-size: 12px;
      line-height: 14px;
      padding-bottom: 1rem;
      letter-spacing: 0.02rem;
      align-self: center;
    }
  }
`
