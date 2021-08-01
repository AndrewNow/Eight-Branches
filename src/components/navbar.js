import React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { Squash as Hamburger } from "hamburger-react"
import NavLogo from "../svg/navLogo"

const Navbar = () => {
  const showNavbar = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
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
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.35,
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  const navItem = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  }

  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [currentOffset, setCurrentOffset] = useState(0)
  
    useEffect(() => {
      if (typeof window !== `undefined`) {
        window.onscroll = () => {
          setCurrentOffset(window.scrollY)
          if (currentOffset < window.scrollY) {
            setShow(false)
          }
          else {
            setShow(true)
        }
        }
      }
    }, [currentOffset])
    
    
  console.log(show)
  
  return (
    <>
      {/* {open && <Modal />} */}
      <AnimatePresence>
        <HeaderWrapper
          variants={showNavbar}
          initial="visible"
          animate={show ? "visible" : "hidden"}
          exit="hidden"
          key="header"
        >
          <Link to="/">
            <NavLogo />
          </Link>
          <IconWrapper>
            <Hamburger
              toggled={open}
              toggle={setOpen}
              onClick={() => setOpen(!open)}
              color="black"
            />
          </IconWrapper>
          {open ? (
            <NavMenu
              initial="hidden"
              animate={open ? "visible" : "hidden"}
              exit="hidden"
              variants={menuAnimation}
            >
              <motion.h3 variants={navItem} exit="hidden">
                <Link to="/aboutus">About Us</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/programs">Programs</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/news">News</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/our-faculty">Our Faculty</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/campus">Campus</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/studentlogin">Student Login</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/applynow">Apply Now</Link>
              </motion.h3>
            </NavMenu>
          ) : null}
        </HeaderWrapper>
        <ClickOut
          variants={clickOut}
          animate={open ? "visible" : "hidden"}
          initial="hidden"
          exit="hidden"
          onClick={() => setOpen(!open)}
        />
      </AnimatePresence>
    </>
  )
}

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  z-index: 999;
  height: 100px;
  width: 100%;
  padding: 0 5vw;
  /* border-bottom: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    margin-top: 1rem;
  }
`

const IconWrapper = styled.div`
  display: relative;
  /* mix-blend-mode: difference; */
  z-index: 1000;
`

const NavMenu = styled(motion.nav)`
  position: absolute;
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

    &:nth-child(1) {
      padding-top: 15vh;
    }
  }

  & a {
    text-decoration: none;
    color: var(--color-black);
    transition: color ease-in-out 0.15s;

    &:hover {
      color: var(--color-orange);
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
