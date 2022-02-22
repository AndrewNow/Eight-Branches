import React, { useEffect, useCallback, useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import styled from "styled-components"
import StampLogo from "../svg/stamplogo"
import breakpoints from "../components/breakpoints"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import useEmblaCarousel from "embla-carousel-react"
import { Arrow, LeftLogoPattern } from "../svg/misc"
import { AcademicAdvisor } from "../components/generalcomponents"

const HomePage = ({ data }) => {
  const hideImage = {
    visible: {
      y: 0,
    },
    hidden: {
      y: "-100%",
      transition: {
        delay: 0.15,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }
  const hideDiplomaImage = {
    visible: {
      y: 0,
    },
    hidden: {
      y: "-100%",
      transition: {
        // delay: 0.2,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }
  const fadeIn = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.65,
        duration: 1,
      },
    },
  }
  const fadeInDiplomaText = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  }

  // ---------- INTERSECTION OBSERVER LOGIC ----------
  const [HideImageRef, HideImageInView] = useInView({
    root: null,
    threshold: 0.7,
    triggerOnce: true,
  })
  const [DiplomaRef0, DiplomaInView0] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })
  const [DiplomaRef1, DiplomaInView1] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })
  const [DiplomaRef2, DiplomaInView2] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })
  const [DiplomaRef3, DiplomaInView3] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })

  const DiplomaData = [
    {
      title: "Acupuncture & Moxibustion",
      path: "/programs/diploma-programs/acupuncture-and-moxibustion",
      ref: DiplomaRef0,
      inView: DiplomaInView0,
      image: (
        <StaticImage
          src="../images/HomePage/acupuncture.png"
          quality={100}
          transformOptions={{ cropFocus: "bottom" }}
          imgStyle={{ objectFit: "cover" }}
          style={{ minHeight: "100%" }}
          alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
        />
      ),
    },
    {
      title: "Traditional Chinese Medicine Practitioner ",
      path: "/programs/diploma-programs/TCMP",
      ref: DiplomaRef1,
      inView: DiplomaInView1,
      image: (
        <StaticImage
          src="../images/HomePage/tcmpdiploma.png"
          quality={100}
          transformOptions={{ cropFocus: "bottom" }}
          imgStyle={{ objectFit: "cover" }}
          style={{ minHeight: "100%" }}
          alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
        />
      ),
    },
    {
      title: "Post-Graduate Advanced TCMP",
      path: "/programs/diploma-programs/advanced-TCMP",
      ref: DiplomaRef2,
      inView: DiplomaInView2,
      image: (
        <StaticImage
          src="../images/HomePage/advtcmp.png"
          quality={100}
          transformOptions={{ cropFocus: "bottom" }}
          imgStyle={{ objectFit: "cover" }}
          style={{ minHeight: "100%" }}
          alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
        />
      ),
    },
    {
      title: "Herbology",
      path: "/programs/diploma-programs/herbology",
      ref: DiplomaRef3,
      inView: DiplomaInView3,
      image: (
        <StaticImage
          src="../images/HomePage/herbologydiploma.png"
          quality={100}
          transformOptions={{ cropFocus: "bottom" }}
          imgStyle={{ objectFit: "cover" }}
          style={{ minHeight: "100%" }}
          alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
        />
      ),
    },
  ]

  // ---------- Initialize Embla Carousel ----------
  const [emblaRef, embla] = useEmblaCarousel({
    align: "center",
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  // ---------- Run configurations ----------
  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on("select", onSelect)
  }, [embla, onSelect])

  // ---------- Carousel buttons ----------
  const NextButton = ({ enabled, onClick }) => {
    return (
      <NextEmblaButton
        aria-label="Next slide button"
        onClick={onClick}
        disabled={!enabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" stroke="black" />
          <path d="M20 14L31 25L20 36" stroke="black" />
        </svg>
      </NextEmblaButton>
    )
  }

  const PrevButton = ({ enabled, onClick }) => {
    return (
      <PrevEmblaButton
        aria-label="Previous slide button"
        onClick={onClick}
        disabled={!enabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="24.5"
            stroke="black"
            vectorEffect="non-scaling-size"
          />
          <path d="M30 14L19 25L30 36" stroke="black" />
        </svg>
      </PrevEmblaButton>
    )
  }

  return (
    <Layout>
      <Seo title="Home" />
      <LandingSection>
        <LeftSection ref={HideImageRef}>
          <HideImage
            style={{ backgroundColor: "var(--color-beige)" }}
            variants={hideImage}
            initial="visible"
            animate={HideImageInView ? "hidden" : "visible"}
            exit="hidden"
          />
          <StaticImage
            src="../images/HomePage/home.png"
            alt="Soft image of a practitioner performing acupuncture on a foot."
            quality={100}
            placeholder="none"
            transformOptions={{ cropFocus: "bottom" }}
            imgStyle={{ objectFit: "cover" }}
            style={{ height: "100%" }}
          />
        </LeftSection>
        <RightSection>
          <LandingTextWrapper
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <StampLogo />
            <motion.h1 variants={fadeIn}>
              Ancient Wisdom, <br />
              Modern Practice
            </motion.h1>
            <motion.p variants={fadeIn}>
              Eight Branches offers students a holistic and industry-leading
              education, firmly rooted in Traditional Chinese Medicine (TCM).
            </motion.p>
          </LandingTextWrapper>
        </RightSection>
      </LandingSection>
      <AboutUsSection>
        <AboutUsWrapper>
          <AboutUsImage>
            <StaticImage
              src="../images/HomePage/aboutus.png"
              quality={100}
              transformOptions={{ cropFocus: "bottom" }}
              imgStyle={{ objectFit: "cover" }}
              style={{ minHeight: "100%" }}
              alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
            />
          </AboutUsImage>
          <AboutUsText>
            <h6>About Us</h6>
            <h1>
              Our college empowers students to uplift communities through the
              practice of Eastern medicine, promoting restoration of health and
              prevention of illness.
              <ReadMore to="/about-us" aria-label="Link to About Us page">
                Learn More
              </ReadMore>
            </h1>
          </AboutUsText>
        </AboutUsWrapper>
      </AboutUsSection>
      <DiplomaPrograms>
        <DiplomaHeader>
          <h1>Diploma Programs</h1>
          <p>
            Our programs are tailored to suit any kind of learner, at any phase
            of life. Explore our offerings below and find out how you can take
            part in sharing and integrating the powerful healing benefits of
            Eastern medicine.
          </p>
          <ProgramsLink to="/programs">
            <p>View All Programs</p> <Arrow color="var(--color-darkgreen)" />
          </ProgramsLink>
        </DiplomaHeader>
        {DiplomaData.map((diploma, index) => (
          <DiplomaEntry key={index} ref={diploma.ref}>
            <EntryText
              variants={fadeInDiplomaText}
              initial="hidden"
              animate={diploma.inView ? "visible" : "hidden"}
            >
              <motion.h1 variants={fadeInDiplomaText}>
                {diploma.title}
              </motion.h1>
              <DiplomaReadMore to={diploma.path}>View Program</DiplomaReadMore>
            </EntryText>
            <EntryImage>
              <BorderRadius>
                <HideImage
                  style={{ backgroundColor: "var(--color-lightestbeige)" }}
                  variants={hideDiplomaImage}
                  initial="visible"
                  animate={diploma.inView ? "hidden" : "visible"}
                  exit="hidden"
                />
                {diploma.image}
              </BorderRadius>
            </EntryImage>
          </DiplomaEntry>
        ))}
      </DiplomaPrograms>
      <GraphSection>
        <GraphTop>
          <h1>
            Educational <br /> Excellence
          </h1>
          <h6>
            At Eight Branches, we pride ourselves on providing a comprehensive
            education that is tailored to help our passionate students pass the
            necessary exams and help them build a successful professional
            practice.
            <br />
            <br />
            Our students consistently outperform the Ontario average in terms of
            pass rates on the Pan-Canadian examinations, the only objective
            measure which is used to compare schools.
          </h6>
        </GraphTop>
        <Embla>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              <EmblaSlide>
                <StaticImage
                  src="../images/AboutUs/Graphs/allexams.png"
                  alt="Graph depicting how Eight Branches consistently scores higher in written exam success rates compared to other Ontario colleges."
                  placeholder="none"
                  quality={100}
                />
              </EmblaSlide>
              <EmblaSlide>
                <StaticImage
                  src="../images/AboutUs/Graphs/clinicalexams.png"
                  alt="Graph depicting how Eight Branches consistently scores higher in clinical exam success rates compared to other Ontario colleges."
                  placeholder="none"
                  quality={100}
                />
              </EmblaSlide>
              <EmblaSlide>
                <StaticImage
                  src="../images/AboutUs/Graphs/writtenexams.png"
                  alt="Graph depicting how Eight Branches consistently scores higher in written exam success rates compared to other Ontario colleges."
                  placeholder="none"
                  quality={100}
                />
              </EmblaSlide>
              <EmblaSlide>
                <StaticImage
                  src="../images/AboutUs/Graphs/tcmpexams.png"
                  alt="Graph depicting how Eight Branches consistently scores higher in traditional chinese medicine practitioner exam success rates compared to other Ontario colleges."
                  placeholder="none"
                  quality={100}
                />
              </EmblaSlide>
            </EmblaContainer>
          </EmblaViewport>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </Embla>
      </GraphSection>
      {data.events ? (
        <UpcomingEvents>
          <EventsHeader>
            <h1>Upcoming Events</h1>
            <BulletinBoardLink
              to="/bulletin-board"
              aria-label="Link to Bulletin Board page"
            >
              <p>Visit Bulletin Board</p> <Arrow />
            </BulletinBoardLink>
          </EventsHeader>
          <EventWrapper>
            {data.events.edges?.slice(0, 2).map((eventData, i) => {
              const eventDataQuery = eventData.node.childrenMarkdownRemark[0]
              if (!eventDataQuery) {
                return null
              }
              const { title, date, host } = eventDataQuery.frontmatter
              const slug = eventDataQuery.fields.slug

              return (
                eventDataQuery && (
                  <Event key={i}>
                    <div>
                      <EventTitle to={slug} itemProp="url">
                        <h4 key={slug}>{title}</h4>
                      </EventTitle>
                      <h6>
                        {/* &nbsp; &nbsp;| &nbsp; */}
                        {!date || date === "Invalid date"
                          ? " Date TBD"
                          : " " + date}
                        <br />
                      </h6>
                      <h6>
                        <strong>Hosted by: </strong>
                        {host}
                      </h6>
                    </div>
                    <SignUpLink to={slug} itemProp="url">
                      Event Details
                    </SignUpLink>
                  </Event>
                )
              )
            })}
          </EventWrapper>
          <LeftPattern>
            <LeftLogoPattern />
          </LeftPattern>
          <RightPattern>
            <LeftLogoPattern />
          </RightPattern>
        </UpcomingEvents>
      ) : null}
      <AcademicAdvisor />
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    events: allFile(
      filter: {
        sourceInstanceName: { eq: "events" }
        internal: { mediaType: { eq: "text/markdown" } }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          childrenMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
              host
              date(formatString: "dddd, MMMM Do", locale: "est")
            }
          }
        }
      }
    }
  }
`

const LandingSection = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  background-color: var(--color-beige);

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column-reverse;
    height: 125vh;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
`

const LeftSection = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    height: 40%;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: 40vh;
  }
  @media (max-width: ${breakpoints.s}px) {
    height: 250px;
  }
`

const HideImage = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const RightSection = styled.div`
  height: 100%;
  width: 50vw;
  position: relative;
  z-index: 10;
  background-color: var(--color-beige);

  @media (max-width: ${breakpoints.l}px) {
    width: 100vw;
    margin-top: 10vh;
    height: 60%;
  }

  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
  @media (max-width: ${breakpoints.s}px) {
    padding-top: 10vh;
  }
`

const LandingTextWrapper = styled(motion.div)`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1,
  p {
    color: var(--color-darkgreen);
  }
  p {
    font-family: "Matter-light";
    width: 60%;
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 3rem;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    p {
      font-size: 20px;
      line-height: 30px;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    p {
      margin-bottom: 6rem;
    }
    svg {
      transform: scale(0.8);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      width: 70%;
      font-size: 18px;
      line-height: 28px;
    }
    svg {
      transform: scale(0.75);
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      margin-top: 0.5rem;
    }
    p {
      margin-bottom: 5rem;
      width: 90%;
      font-size: 17px;
      line-height: 28px;
    }
    svg {
      transform: scale(0.7);
    }
  }
`

const AboutUsSection = styled.div`
  background-color: var(--color-lightgreen);
  color: var(--color-white);
  width: 100%;
  /* height: 80vh; */
  padding: 2rem 0;
`

const AboutUsWrapper = styled.div`
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 0;

  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${breakpoints.xxl}px) {
    height: auto;
    min-height: auto;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
`

const AboutUsImage = styled.div`
  position: relative;
  width: 32%;
  height: 100%;
  /* min-height: 100%; */
  overflow: hidden;

  @media (max-width: ${breakpoints.xl}px) {
    min-height: auto;
    max-width: 30vw;
  }
  @media (max-width: ${breakpoints.l}px) {
    display: none;
    visibility: hidden;
  }
`

const AboutUsText = styled.div`
  width: 57%;
  margin-left: 4rem;
  h6 {
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 3.54vw;
    line-height: 130%;
    margin-bottom: 3rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    h1 {
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    margin-left: 0;
    h1 {
      font-size: 45px;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
    h1 {
      font-size: 32px;
    }
  }
  @media (max-width: 376px) {
    h1 {
      font-size: 28px;
    }
  }
`

const ReadMore = styled(Link)`
  display: inline-block;
  transform: translateY(-1rem);
  margin-left: 2rem;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 0.35rem 1.5rem;
  text-decoration: none;
  font-family: "Matter-regular";
  text-align: center;

  transition: 0.25s all ease-in-out;
  :hover {
    color: var(--color-lightgreen);
    background-color: var(--color-white);
  }
  @media (max-width: ${breakpoints.xl}px) {
    transform: translateY(-0.5rem);
    margin-left: 0rem;
    margin-top: 3rem;
    display: block;
    max-width: 140px;
  }
  @media (max-width: ${breakpoints.m}px) {
    transform: translateY(0rem);
    margin: 0 auto;
    margin-top: 2rem;
  }
`

const DiplomaPrograms = styled.section`
  background-color: var(--color-lightestbeige);
`

const DiplomaHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 7rem;
  padding-bottom: 5rem;

  h1,
  p {
    color: var(--color-darkgreen);
    text-align: center;
  }
  h1 {
    padding-bottom: 2rem;
  }
  p {
    width: 50%;
    font-family: "matter-light";
  }
  @media (max-width: ${breakpoints.l}px) {
    p {
      width: 80%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    p {
      width: 90%;
    }
  }
`

const DiplomaEntry = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid #82af82;
  padding: 2rem 0;

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column-reverse;
    padding: 4rem 0;
  }
`

const EntryText = styled(motion.div)`
  width: 35%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    color: var(--color-darkgreen);
    max-width: 90%;
    margin-bottom: 2rem;
  }

  @media (max-width: 1870px) {
    width: 39%;
  }
  @media (max-width: 1670px) {
    width: 43%;
  }
  @media (max-width: 1600px) {
    width: 45vw;
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.l}px) {
    h1 {
      font-size: 40px;
      line-height: 130%;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    width: auto;
    margin: 0;
    h1 {
      font-size: 45px;
      margin-top: 1.5rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      font-size: 36px;
    }
  }
`

const EntryImage = styled.div`
  overflow: hidden;
  position: relative;

  @media (max-width: 1600px) {
    max-width: 45vw;
  }
  @media (max-width: ${breakpoints.m}px) {
    max-width: none;
  }
`

const BorderRadius = styled.div`
  border-radius: 30px;
  overflow: hidden;

  @media (max-width: ${breakpoints.l}px) {
    border-radius: 20px;
  }

  @media (max-width: ${breakpoints.m}px) {
    border-radius: 5px;
  }
`

const DiplomaReadMore = styled(Link)`
  align-self: flex-start;
  display: inline-block;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-darkgreen);
  color: var(--color-darkgreen);
  padding: 0.35rem 1.5rem;
  text-decoration: none;
  font-family: "Matter-regular";

  transition: 0.25s all ease-in-out;
  :hover {
    color: var(--color-white);
    background-color: var(--color-darkgreen);
  }
`

const GraphSection = styled.section`
  background-color: var(--color-lightestbeige);
  padding-top: 4rem;
  padding-bottom: 4rem;
`

const GraphTop = styled.section`
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #82af82;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 5rem;

  h1 {
    padding-right: 3rem;
    padding-left: 2rem;
  }

  h6 {
    width: 55%;
    align-self: flex-end;
  }
  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    h1 {
      padding-right: 0rem;
      padding-left: 0;
    }
    h6 {
      padding-top: 2rem;
      align-self: flex-start;
      width: 85%;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 2rem;
    h6 {
      width: 100%;
    }
  }
`

const Embla = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  padding: 5rem 0;

  @media (max-width: ${breakpoints.xl}px) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 95%;
  }
`

const EmblaViewport = styled.div`
  width: 100%;
  overflow: hidden;
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
`

const EmblaSlide = styled.div`
  min-width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const NextEmblaButton = styled(motion.button)`
  right: -5%;
  border: none;
  background: none;
  cursor: pointer;
  touch-action: manipulation;
  transition: opacity 0.5s ease;
  opacity: 1;

  position: absolute;
  z-index: 1;
  top: 37.5%;
  /* border-radius: 100%; */
  :disabled {
    opacity: 0.2;
    cursor: default;
  }
  @media (max-width: ${breakpoints.xl}px) {
    right: -15%;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 45px;
    height: 45px;
    top: 90%;
    right: 25%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    top: 85%;
  }
`

const PrevEmblaButton = styled(motion.button)`
  left: -5%;
  border: none;
  background: none;
  cursor: pointer;
  touch-action: manipulation;
  transition: opacity 0.5s ease;
  opacity: 1;

  position: absolute;
  z-index: 1;
  top: 37.5%;

  :disabled {
    opacity: 0.2;
    cursor: default;
  }

  @media (max-width: ${breakpoints.xl}px) {
    left: -15%;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 45px;
    height: 45px;
    top: 90%;
    left: 25%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    top: 85%;
  }
`

const UpcomingEvents = styled.section`
  background-color: #e6dacc;
  padding: 6rem 0;
  position: relative;
  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 4rem;
  }
`

const EventsHeader = styled.header`
  text-align: center;
  margin: 0 auto;
`

const ProgramsLink = styled(Link)`
  color: var(--color-darkgreen);
  text-decoration: none;
  display: flex;
  align-items: baseline;
  justify-content: center;

  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  p {
    width: unset;
    padding-top: 1.5rem;
    padding-right: 0.75rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  :hover {
    color: #00000095;
    p {
      opacity: 0.65;
    }
    svg {
      opacity: 0.65;
      transform: translate3d(4px, 0, 0);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`

const BulletinBoardLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: baseline;
  justify-content: center;

  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  p {
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  :hover {
    color: #00000095;
    svg {
      opacity: 0.65;
      transform: translate3d(4px, 0, 0);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`

const EventWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  flex-direction: row;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;

    h4 {
      font-size: 32px;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    h4 {
      font-size: 25px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`
const Event = styled.article`
  width: 29%;
  color: var(--color-black);
  background-color: var(--color-white);
  border-radius: 20px;
  border: 1px solid black;
  padding: 2.5rem 3.5rem;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h6 {
    margin-top: .5rem;
    margin-bottom: 1rem;
    font-size: 20px;
    line-height: 120%;
    font-family: "Matter-light";
    strong {
      font-family: "Matter-regular";
    }
    
    :last-child {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 1600px) {
    width: 34%;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    min-width: 33%;
    max-width: 50%;
    border-radius: 20px;
    h4 {
      font-size: 24px;
    }
    h6 {
      font-size: 17px;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    h6 {
      font-size: 17px;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    min-width: 80%;
    max-width: 80%;
    width: 80%;
    margin: 1rem auto;
    padding: 2rem 2rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 2.5rem;
    min-width: none;
    max-width: none;
    width: 90%;
    h6 {
      line-height: 130%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 100%;

    h6 {
      font-size: 16px;
    }
  }
`

const EventTitle = styled(Link)`
  text-decoration: none;

  h4 {
    line-height: 125%;
    padding-bottom: 0.25rem;
    color: var(--color-black);
  }
`

const SignUpLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-family: "Matter-light";
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--color-darkgreen);
  border: 1px solid var(--color-darkgreen);
  border-radius: 10px;
  width: 160px;
  height: 40px;
  transition: var(--hover-transition);

  :hover {
    background-color: var(--color-darkgreen);
    color: var(--color-white);
  }

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 17px;
  }
`

const LeftPattern = styled.div`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: ${breakpoints.m}px) {
    left: 2%;
  }
  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`

const RightPattern = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  @media (max-width: ${breakpoints.m}px) {
    right: 2%;
  }
  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`
