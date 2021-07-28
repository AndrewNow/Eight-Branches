import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { Squash as Hamburger } from "hamburger-react"

const Navbar = () => {
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

  //below is a "modal" element to prevent scrolling on background when sidebar opens
  // const useLockBodyScroll = () => {
  //   useLayoutEffect(() => {
  //     const originalStyle = window.getComputedStyle(document.body).overflow
  //     document.body.style.overflow = "hidden"
  //     return () => (document.body.style.overflow = originalStyle)
  //   }, [])
  // }

  // const Modal = () => {
  //   useLockBodyScroll()
  //   return <></>
  // }

  return (
    <>
      {/* {open && <Modal />} */}
      <HeaderWrapper>
        <Link to="/">Eight Branches logo</Link>
        <IconWrapper>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            onClick={() => setOpen(!open)}
            color="black"
          />
        </IconWrapper>
        <AnimatePresence>
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
                <Link to="/news">News</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/programs">Programs</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/teachingclinic">Teaching Clinic</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/our-faculty">Meet Our Faculty</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/studentlogin">Student Login</Link>
              </motion.h3>
              <motion.h3 variants={navItem}>
                <Link to="/applynow">Apply Now</Link>
              </motion.h3>
            </NavMenu>
          ) : null}
        </AnimatePresence>
      </HeaderWrapper>
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

const HeaderWrapper = styled.header`
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
