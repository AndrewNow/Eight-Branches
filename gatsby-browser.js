// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// custom CSS styles
import "./src/style.css"
import React from "react"

// Wrapper for page transitions
import { AnimatePresence } from "framer-motion"

export const wrapPageElement = ({ element }) => {
  // Locomotive smooth scroll config, info here  https://www.npmjs.com/package/react-locomotive-scroll

  return (
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
  )
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // transition duration from `layout.js` * 1000 to get time in ms

  // * 2 for exit + enter animation
  const TRANSITION_DELAY = 0.3 * 1000 * 2

  // if it's a "normal" route
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }

  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }
  return false
}
