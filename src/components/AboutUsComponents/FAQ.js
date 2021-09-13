import React, { useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import breakpoints from "../breakpoints"

export const FAQ = ({ index, question, answer }) => {
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
  return (
    <>
      <Header
        key={index + "item"}
        onClick={() => setExpand(!expand)}
        animate={{
          backgroundColor: expand
            ? "var(--color-lightestgreen)"
            : "var(--color-beige)",
        }}
        whileHover={{ filter: "brightness(.95)" }}
      >
        <h5>{question}</h5>
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
          <Answer
            key={index}
            variants={expandAnimation}
            initial="hidden"
            animate={expand ? "visible" : "hidden"}
            exit="hidden"
          >
            <motion.p variants={children}>{answer}</motion.p>
          </Answer>
        )}
      </AnimatePresence>
    </>
  )
}

const Header = styled(motion.div)`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;

  h5 {
    max-width: 90%;
  }

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

    h5 {
      max-width: 85%;
    }

    svg {
      min-width: 35px;
      min-height: 35px;
    }
  }
`

const Answer = styled(motion.div)`
  background-color: white;
  border-bottom: 1px solid black;
  overflow-y: hidden;

  p {
    width: 90%;
    margin: 0 auto;
    padding: 2.5rem;
  }
  h6 {
    padding: 2.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 0.25rem;
    p {
      width: 95%;
      padding: 1rem;
    }
    h6 {
      padding: 1.5rem 2rem;
      &:last-child {
        text-align: center;
      }
    }
  }
`
