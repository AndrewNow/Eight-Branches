import React, { useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import AboutUsClose from "../../svg/aboutUsClose"

const EightBranches = () => {
  const dropdown = {
    visible: {
      opacity: 1,
      height: "auto ",
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.4,
        delayChildren: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  const fadeout = {
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
    },
  }

  const [expand, setExpand] = useState({
    acupuncture: null,
    moxibustion: null,
    cupping: null,
    herbology: null,
    guasha: null,
    nutrition: null,
    taoist: null,
    bodywork: null,
  })

  // this component is a little convoluted - I wrote this under time constraints and
  // did not have time to come up with an ideal way to manage state w/ .map() considering
  // the design requirement of having two separate areas in which the dropdown could expand
  // this should ideally be refactored in the future, but for now it works.

  // there are two wrapper sections, and underneath each is a list of the associated dropdown blurbs

  return (
    <>
      <Wrapper>
        <Grid>
          <Block
            onClick={() =>
              setExpand({
                acupuncture: !false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner>
              <h3>Acupuncture</h3>
            </BlockInner>
          </Block>
          <Block
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: !false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner>
              <h3>Moxibustion</h3>
            </BlockInner>
          </Block>
          <Block
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: !false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner>
              <h3>Cupping</h3>
            </BlockInner>
          </Block>
          <Block
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: !false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner>
              <h3>Herbology</h3>
            </BlockInner>
          </Block>
        </Grid>
        <AnimatePresence>
          {expand.acupuncture && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.acupuncture ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <div
                onClick={() =>
                  setExpand({
                    acupuncture: false,
                  })
                }
              >
                <AboutUsClose />
              </div>
              <motion.h4 variants={fadeout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.moxibustion && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.moxibustion ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <div
                onClick={() =>
                  setExpand({
                    moxibustion: false,
                  })
                }
              >
                <AboutUsClose />
              </div>
              <motion.h4 variants={fadeout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.cupping && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.cupping ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <div
                onClick={() =>
                  setExpand({
                    cupping: false,
                  })
                }
              >
                <AboutUsClose />
              </div>
              <motion.h4 variants={fadeout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.herbology && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.herbology ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <div
                onClick={() =>
                  setExpand({
                    herbology: false,
                  })
                }
              >
                <AboutUsClose />
              </div>
              <motion.h4 variants={fadeout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
      </Wrapper>
      {/* beginning of wrapper 2 */}
      <Wrapper style={{ paddingBottom: "5rem" }}>
        <Grid>
          <Block
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: !false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner>
              <h3>Gua Sha</h3>
            </BlockInner>
          </Block>
          <Block
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: !false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner>
              <h3>Nutrition</h3>
            </BlockInner>
          </Block>
          <Block
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: !false,
                bodywork: false,
              })
            }
          >
            <BlockInner>
              <h3>Taoist Arts</h3>
            </BlockInner>
          </Block>

          <Block
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: !false,
              })
            }
          >
            <BlockInner>
              <h3>Asian Bodywork</h3>
            </BlockInner>
          </Block>
        </Grid>
        {/* start of dropdown area 2 */}
        <AnimatePresence>
          {expand.guasha && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.guasha ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <div
                onClick={() =>
                  setExpand({
                    guasha: false,
                  })
                }
              >
                <AboutUsClose />
              </div>
              <motion.h4 variants={fadeout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.nutrition && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.nutrition ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <div
                onClick={() =>
                  setExpand({
                    nutrition: false,
                  })
                }
              >
                <AboutUsClose />
              </div>
              <motion.h4 variants={fadeout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.taoist && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.taoist ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <div
                onClick={() =>
                  setExpand({
                    taoist: false,
                  })
                }
              >
                <AboutUsClose />
              </div>
              <motion.h4 variants={fadeout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.bodywork && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.bodywork ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <div
                onClick={() =>
                  setExpand({
                    bodywork: false,
                  })
                }
              >
                <AboutUsClose />
              </div>
              <motion.h4 variants={fadeout}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  )
}

export default EightBranches

const Wrapper = styled(motion.div)`
  position: relative;
  margin: 0 auto;
  width: 90%;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  margin: 0 auto;
`

const Block = styled.div`
  height: auto;
  position: relative;
  margin: 2rem;
`

const BlockInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-lightorange);
  border-radius: 20px;
  height: 200px;
  transition: var(--hover-transition);
  cursor: pointer;

  &:hover {
    background-color: var(--color-lightorange);
    color: var(--color-beige);
  }
`

const InfoDropDown = styled(motion.div)`
  border: 1px solid var(--color-lightorange);
  border-radius: 20px;
  margin: 0 2rem;
  left: 0;
  display: flex;
  position: relative;
  flex-basis: 0;

  h4 {
    width: 95%;
    padding: 5rem 5rem;
  }

  svg {
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`
