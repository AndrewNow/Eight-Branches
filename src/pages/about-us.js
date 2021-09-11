import React, { useState, useCallback, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import styled from "styled-components"
import breakpoints from "../components/breakpoints"
import { motion } from "framer-motion"
import EightBranches from "../components/AboutUsComponents/eight-branches"
import { useEmblaCarousel } from "embla-carousel/react"
import { AcademicAdvisor } from "../components/GeneralComponents/generalcomponents"
import FAQMap from "../components/AboutUsComponents/FAQMap"

const AboutUs = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `About Us`
  const [expand, setExpand] = useState(false)
  console.log(expand)

  const clickExpand = {
    hidden: {
      height: "300px",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
      height: "auto",
    },
  }
  const hideGradient = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    visible: {
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
      opacity: 1,
    },
  }

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
    <Layout title={siteTitle}>
      <Seo title="About Us" />
      <SectionWrapper>
        <ImageBanner>
          <BannerText>
            <h1>
              Ancient Wisdom, <br /> Modern Practice
            </h1>
          </BannerText>

          <StaticImage
            src="../images/AboutUs/banner.png"
            alt="Beige background image with an in the foreground."
            quality={100}
            layout="fullWidth"
          />
        </ImageBanner>
        <ImageBannerMobile>
          <BannerText>
            <h1>
              Ancient Wisdom, <br /> Modern Practice
            </h1>
          </BannerText>

          <StaticImage
            src="../images/AboutUs/banner.png"
            alt="Beige background image with an in the foreground."
            quality={100}
            // height={530}
            layout="fullWidth"
          />
        </ImageBannerMobile>
      </SectionWrapper>
      <AboutUsSection>
        <Left>
          <StaticImage
            src="../images/AboutUs/moxibustion.png"
            alt="A practitioner performing moxibustion and acupuncture on a patient."
            quality={100}
          />
        </Left>
        <Right>
          <h3>
            Eight Branches Academy of Eastern Medicine is a Toronto Acupuncture
            School that offers students a comprehensive education with a firm
            foundation in Traditional Chinese Medicine.
          </h3>
          <HiddenText
            variants={clickExpand}
            initial="hidden"
            animate={expand ? "visible" : "hidden"}
          >
            <Gradient
              variants={hideGradient}
              intial="visible"
              animate={expand ? "hidden" : "visible"}
            />
            <p>
              Before Eight Branches Academy was established, it was Kokoro Dojo
              – a peaceful sanctuary tucked behind the residences and busy
              storefronts in the heart of Toronto's Annex. Kokoro Dojo was a Zen
              Shiatsu school focused on the teachings of Shizuto Masunaga. These
              teachings emphasize personal development through meditation, Qi
              Gong, and extensive hands-on practice, in addition to technical
              instruction.
              <br />
              <br />
              After studying Traditional Chinese Medicine in British Columbia,
              Toronto and Chengdu, our founder was introduced to Kokoro Dojo,
              and found that its principals of practice coincided profoundly
              with his own. He established a thriving practice and became an
              integral part of the Dojo, teaching TCM theory and diagnosis; in
              addition to completing the Zen Shiatsu program himself. ​ Dondrub
              and Diana, who managed the Dojo and clinic, welcomed Ryan’s idea
              of incorporating a technical acupuncture program that included the
              Zen and Taoist principals of the Masunaga traditions. ​ The
              program was received enthusiastically by its students, and driven
              by an increased demand for comprehensive TCM instruction in
              Toronto, Eight Branches Academy of Eastern Medicine was
              established. With the addition of other treatment modalities and
              practitioners, the Dojo developed into Eight Branches Healing Arts
              Centre.
            </p>
          </HiddenText>
          <ExpandButton onClick={() => setExpand(!expand)}>
            <p>Read more</p>
            <motion.svg
              animate={expand ? { rotate: "180deg" } : { rotate: 0 }}
              initial={{ rotate: 0 }}
              width="13"
              height="8"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.115 -6.94355e-07L9 6.79892L15.885 -9.24496e-08L18 2.09312L9 11L-9.14931e-08 2.09312L2.115 -6.94355e-07Z"
                fill="black"
              />
            </motion.svg>
          </ExpandButton>
        </Right>
      </AboutUsSection>
      <EightBranchesSection>
        <h1>
          <svg
            width="64"
            height="89"
            viewBox="0 0 64 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.1941 68.4199C42.8549 71.3584 37.8305 73.0537 32.5253 73.0537C22.4765 73.0537 14.3002 66.8094 14.3002 59.1523C14.3002 50.0543 20.6353 45.2509 32.5253 45.2509C45.3515 45.2509 50.7503 48.359 50.7503 55.79V62.6842C36.2389 62.5994 31.9635 59.7457 31.9635 50.8171V38.0177C31.9635 29.0891 36.3326 26.2354 50.7503 26.1506V31.3778C50.7503 40.3063 45.9132 43.5839 32.5253 43.5839C20.5104 43.5839 14.3002 38.7806 14.3002 29.6825C14.3002 22.0819 22.4765 15.7811 32.5253 15.7811C37.7369 15.7811 42.8549 17.5612 46.1941 20.4997L47.5048 19.313C43.7911 16.0354 38.2986 14.0858 32.5253 14.0858C21.5403 14.0858 12.4277 21.0648 12.4277 29.6825C12.4277 39.7977 19.5118 45.2792 32.5253 45.2792C46.8494 45.2792 52.6228 41.3235 52.6228 31.3778V24.4553C35.7708 24.3706 30.0911 27.5634 30.0911 38.0177V50.8171C30.0911 61.2714 35.7708 64.4642 52.6228 64.3795V55.79C52.6228 47.2853 46.2877 43.5839 32.5253 43.5839C19.6054 43.5839 12.4277 49.1218 12.4277 59.1523C12.4277 67.7418 21.4467 74.749 32.5253 74.749C38.2986 74.749 43.7911 72.8842 47.5048 69.6066L46.1941 68.4199Z"
              fill="#D27241"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9809 0.148438H49.3991C57.1205 0.148438 63.38 6.32115 63.38 13.9356V75.2118C63.38 82.8262 57.1205 88.9989 49.3991 88.9989H13.9809C6.25945 88.9989 0 82.8262 0 75.2118V13.9356C0 6.32115 6.25945 0.148438 13.9809 0.148438ZM13.9809 1.68034C7.11739 1.68034 1.55343 7.1672 1.55343 13.9356V75.2118C1.55343 81.9801 7.11739 87.467 13.9809 87.467H49.3991C56.2626 87.467 61.8266 81.9801 61.8266 75.2118V13.9356C61.8266 7.1672 56.2626 1.68034 49.3991 1.68034H13.9809Z"
              fill="#D27241"
            />
          </svg>
          The Eight Branches <br /> of Chinese Medicine
        </h1>
        <EightBranches />
      </EightBranchesSection>
      <OurCorePrinciples>
        <h2>Our Core Principles</h2>
        <PrinciplesWrapper>
          <PrinciplesItem>
            <StaticImage
              src="../images/AboutUs/OurCorePrinciples/herbs.png"
              alt="Beige background image with an in the foreground."
              quality={100}
            />
            <p>
              Education based upon the 8 foundational branches of Eastern
              Medicine
            </p>
          </PrinciplesItem>
          <PrinciplesItem>
            <StaticImage
              src="../images/AboutUs/OurCorePrinciples/acu.png"
              alt="Beige background image with an in the foreground."
              quality={100}
            />
            <p>
              Focus on personal development and care based on the Daoist Arts,
              which enrich the understanding of this system of medicine.
            </p>
          </PrinciplesItem>
          <PrinciplesItem>
            <StaticImage
              src="../images/AboutUs/OurCorePrinciples/massage.png"
              alt="Beige background image with an in the foreground."
              quality={100}
            />
            <p>
              Balanced courses, offering both in-depth theory and extensive
              hands-on practice
            </p>
          </PrinciplesItem>
        </PrinciplesWrapper>
      </OurCorePrinciples>
      <GraphSection>
        <GraphTop>
          <h1>
            Educational <br /> Excellence
          </h1>
          <h6>
            At Eight Branches, we pride ourselves on providing a comprehensive
            education that is tailored to help students pass the necessary exams
            and build a successful professional practice. Graduates of Eight
            Branches consistently outperform their peers on the Pan-Canadian
            National Examinations.
            <br /> <br />
            Pass rates on the Pan-Canadian examinations are the most essential
            evaluation tool for prospective students as it is the only objective
            criteria to compare schools.
          </h6>
        </GraphTop>
        <Embla>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              <EmblaSlide>
                <StaticImage
                  src="../images/AboutUs/Graphs/allexams.png"
                  alt="Graph depicting how Eight Branches consistently scores higher in written exam success rates compared to other Ontario colleges."
                  placeholder="blurred"
                  quality={100}
                />
              </EmblaSlide>
              <EmblaSlide>
                <StaticImage
                  src="../images/AboutUs/Graphs/clinicalexams.png"
                  alt="Graph depicting how Eight Branches consistently scores higher in clinical exam success rates compared to other Ontario colleges."
                  placeholder="blurred"
                  quality={100}
                />
              </EmblaSlide>
              <EmblaSlide>
                <StaticImage
                  src="../images/AboutUs/Graphs/writtenexams.png"
                  alt="Graph depicting how Eight Branches consistently scores higher in written exam success rates compared to other Ontario colleges."
                  placeholder="blurred"
                  quality={100}
                />
              </EmblaSlide>
              <EmblaSlide>
                <StaticImage
                  src="../images/AboutUs/Graphs/tcmpexams.png"
                  alt="Graph depicting how Eight Branches consistently scores higher in traditional chinese medicine practitioner exam success rates compared to other Ontario colleges."
                  placeholder="blurred"
                  quality={100}
                />
              </EmblaSlide>
            </EmblaContainer>
          </EmblaViewport>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </Embla>
      </GraphSection>

      <OurTeachingClinic>
        <TeachingClinicFlex>
          <TCLeft>
            <StaticImage
              src="../images/AboutUs/teachingclinic.png"
              alt="Image of a woman with a prosthetic foot in hand, which has a number of acupuncture points inked upon it"
              placeholder="blurred"
              quality={100}
            />
          </TCLeft>
          <TCRight>
            <Header>
              <Link to="/teaching-clinic">
                <h2>
                  Our Teaching Clinic
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 15.885L6.79892 9L0 2.115L2.09312 0L11 9L2.09312 18L0 15.885Z"
                      fill="white"
                    />
                  </svg>
                </h2>
              </Link>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                in arcu orci. Ut sit amet nisl at velit imperdiet vestibulum in
                non nunc. Vivamus venenatis massa ut eros sodales, id fermentum
                mauris.
              </h6>
            </Header>
            <Details>
              <Treatments>
                <h6>List of Treatments:</h6>
                <p>
                  Acupuncture, Moxibustion, Herbal Medicine, Tui Na, Nutritional
                  & Lifestyle Counselling, Cupping, Gua Sha, Auricular (Ear)
                  Acupuncture and Seeding.
                </p>
              </Treatments>
              <div>
                <h6>Clinic Hours:</h6>
                <Details>
                  <p style={{ paddingRight: "1.5rem" }}>
                    Monday
                    <br />
                    Tuesday
                    <br />
                    Wednesday
                    <br />
                    Thursday
                    <br />
                    Friday
                    <br />
                    Saturday
                    <br />
                    Sunday
                    <br />
                  </p>
                  <p>
                    6:00pm-10:00pm <br />
                    6:00pm-10:00pm <br />
                    2:00pm-8:00pm <br />
                    Closed <br />
                    Closed <br />
                    Closed <br />
                    Closed <br />
                  </p>
                </Details>
              </div>
            </Details>
          </TCRight>
        </TeachingClinicFlex>
      </OurTeachingClinic>
      <FAQBg>
        <h1>Common Questions</h1>
        <FAQWrapper>
          <FAQMap />
        </FAQWrapper>
      </FAQBg>
      <AcademicAdvisor />
    </Layout>
  )
}

export default AboutUs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const SectionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-beige);
  & h2 {
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    & h2 {
      padding-top: 5rem;
      padding-bottom: 2.5rem;
    }
  }
`

const EightBranchesSection = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  background-color: var(--color-lightestbeige);

  h1 {
    padding: 5rem 0;
    margin: 0 auto;
    text-align: center;
    color: var(--color-lightorange);
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ImageBanner = styled.div`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

const ImageBannerMobile = styled.div`
  display: none;

  @media (max-width: ${breakpoints.m}px) {
    display: block;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
`

const BannerText = styled.div`
  position: absolute;
  z-index: 20;
  bottom: 5rem;
  left: 5vw;
  width: 37.5%;
  color: white;

  & h1 {
    padding-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    bottom: 5rem;

    & h1 {
      padding-bottom: 0.5rem;
    }
  }
  @media (max-width: ${breakpoints.xs}px) {
    bottom: 2.5rem;
  }
`

const AboutUsSection = styled.section`
  background-color: var(--color-sandbeige);
  display: flex;
  justify-content: space-around;
  padding: 10rem 0;
`

const Left = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin-left: 5rem;
`
const Right = styled.div`
  flex-basis: 50%;

  h3 {
    padding-top: 7rem;
    padding-bottom: 2.5rem;
  }
`

const HiddenText = styled(motion.div)`
  width: 65%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  p {
    font-family: "Matter-light";
  }
`

const Gradient = styled(motion.div)`
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(253, 250, 241, 0) 30%,
      #efe9dd 90%
    );
  }
`

const ExpandButton = styled.button`
  width: 65%;
  border: none;
  background: none;
  position: relative;
  padding-top: 1rem;
  margin: 0 auto;
  z-index: 5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding-right: 0.5rem;
    font-size: 20px;
  }
`

const OurCorePrinciples = styled.section`
  padding: 5rem 0;
  background-color: #efe9dd;

  h2 {
    text-align: center;
    color: var(--color-darkgreen);
  }
`

const PrinciplesWrapper = styled.div`
  padding-top: 5rem;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const PrinciplesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 31%;
  p {
    padding-top: 1rem;
    text-align: center;
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
  border-top: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 5rem;

  h1 {
    padding-right: 3rem;
  }

  h6 {
    width: 55%;
    align-self: flex-end;
  }
`

const Embla = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  padding: 5rem 0;

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
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

  :disabled {
    opacity: 0.2;
    cursor: default;
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
`

const OurTeachingClinic = styled.section`
  background-color: var(--color-charcoal);
  width: 100%;
`

const TeachingClinicFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding: 10rem 0;
`

const TCLeft = styled.div`
  align-self: center;
  margin-right: 2rem;
  border-radius: 20px;
  overflow: hidden;
`

const TCRight = styled.div`
  flex-basis: 50%;
  margin-left: 2rem;
`

const Header = styled.div`
  color: var(--color-beige);
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #ababab;
  a {
    text-decoration: none;
  }
  h2 {
    color: var(--color-beige);
    text-decoration: none;
    padding-bottom: 1rem;

    svg {
      transform: translateY(-0.25rem);
      transition: var(--hover-transition);
      margin-left: 1rem;
    }
    :hover {
      svg {
        margin-left: 1.5rem;
      }
    }
  }
`

const Details = styled.div`
  color: var(--color-beige);
  display: flex;
  justify-content: space-between;
  p {
    padding-top: 1rem;
    font-family: "matter-light";
  }
`

const Treatments = styled.div`
  width: 45%;
`

const FAQBg = styled.section`
  background-color: var(--color-beige);
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 10rem;
  h1 {
    text-align: center;
    padding: 5rem 0;
    color: var(--color-darkgreen);
  }
`

const FAQWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 1px solid black;
  border-bottom: none;
`
