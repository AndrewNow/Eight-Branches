import React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { Squash as Hamburger } from "hamburger-react"
import NavLogo from "../svg/navLogo"
import breakpoints from "../components/breakpoints"

const Navbar = () => {
  const showNavbar = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      pointerEvents: "none",
    },
  }

  const clickOut = {
    visible: {
      visibility: "visible",
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.4,
      },
    },
    hidden: {
      visibility: "hidden",
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.4,
      },
    },
  }

  const menuAnimation = {
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.35,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.35,
      },
    },
  }

  const innerMenuAnimation = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: .5,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  }

  const navItem = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  }

  const [open, setOpen] = useState(false)

  //logic for hiding the navbar when the user scrolls down
  const [show, setShow] = useState(true)
  const [currentOffset, setCurrentOffset] = useState(0)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setCurrentOffset(window.scrollY)
        if (
          currentOffset < window.scrollY &&
          window.scrollY >= 100 &&
          open === false
        ) {
          setShow(false)
        } else if (currentOffset > window.scrollY || window.scrollY <= 100) {
          setShow(true)
        }
      }
    }
  }, [currentOffset, open])

  return (
    <>
      {/* {open && <Modal />} */}
      <HeaderWrapper
        variants={showNavbar}
        initial="visible"
        animate={show ? "visible" : "hidden"}
        exit="hidden"
        key="header"
      >
        <LogoWrapper>
          <Link to="/">
            <NavLogo />
          </Link>
        </LogoWrapper>
        <IconWrapper>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            onClick={() => setOpen(!open)}
            color="black"
          />
        </IconWrapper>
      </HeaderWrapper>
      <AnimatePresence exitBeforeEnter>
        {open ? (
          <NavMenu
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            exit="hidden"
            variants={menuAnimation}
          >
            <motion.div
              variants={innerMenuAnimation}
            >
              <motion.h3 variants={navItem}
              >
                <Link to="/about-us">About Us</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/programs">Programs</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/bulletin-board">Bulletin Board</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/campus">Campus</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/our-faculty">Our Faculty</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/teaching-clinic">Teaching Clinic</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/studentlogin">Student Login</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/admissions">Admissions</Link>
              </motion.h3>
            </motion.div>
          </NavMenu>
        ) : null}
      </AnimatePresence>
      <ClickOut
        variants={clickOut}
        animate={open ? "visible" : "hidden"}
        initial="hidden"
        exit="hidden"
        onClick={() => setOpen(!open)}
      />
    </>
  )
}

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  z-index: 990;
  height: 100px;
  width: 90vw;
  margin: 0 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    margin-top: 0.25rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    top: 1rem;
    height: 60px;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & svg {
    height: 75px;
    margin-top: 1rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    & svg {
      margin-top: 0;
      height: 50px;
      max-width: 200px;
    }
  }
`

const IconWrapper = styled.div`
  display: relative;
  z-index: 1000;
`

const NavMenu = styled(motion.nav)`
  border-left: 1px solid black;
  position: fixed;
  z-index: 900;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100vh;
  background-color: var(--color-beige);
  padding: 3rem;

  & h3 {
    margin-bottom: 2rem;
    text-align: center;

    :nth-child(1) {
      padding-top: 15vh;
    }
  }

  h3 > a {
    text-decoration: none;
    color: var(--color-black);
    transition: color ease-in-out 0.15s;

    :hover {
      color: var(--color-orange);
    }
    :active {
      color: var(--color-orange);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    border: none;
    width: 100vw;
    left: 0;

    & h3 {
      &:nth-child(1) {
        padding-top: 5vh;
      }
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    & h3 {
      font-size: 24px;
      margin-bottom: 1.5rem;
      &:nth-child(1) {
        padding-top: 7vh;
      }
    }
  }
  @media (max-width: ${breakpoints.xs}px) {
    h3 {
      font-size: 20px;
      margin-bottom: 1rem;

      :nth-child(1) {
        padding-top: 7vh;
      }
    }
  }
`

const ClickOut = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  z-index: 99;
  position: fixed;
  backdrop-filter: blur(3px);
  /* background-color: #00000032; */
  top: 0;
`

export default Navbar
